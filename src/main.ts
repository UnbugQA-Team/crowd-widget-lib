import "./iframe.css";
import {
  clearRecording,
  saveScreenRecording,
  startBugTrackingScreenRecording,
  stopBugTrackingScreenRecording,
} from "./utils/screen-recorder";
import {
  checkDeviceAndPageCompability,
  generateWidgetUserIDAndStore,
  getUserIDSession,
  enableControllerDragging,
  generateId,
} from "./utils";

const widgetOrigin = "*";
const crowdOrigin = "https://staging.crowdapp.io"; // "http://localhost:2222";
const widgetVariablePrefix = "crowd-widget";
const cookieLifetime = 0.5; // Hour(s)
// const environment = "dev";
// const baseURL =
//   environment === "dev"
//     ? "http://localhost:2222/widget-extension"
//     : "https://staging.crowdapp.io/widget-extension"; // "https://staging.crowdapp.io/widget-extension";

const baseURL = "https://staging.crowdapp.io/widget-extension";

// https://admin200.lfxedu.com/test.html

let isWidgetPanelVisible = false;

const initCrowdWidget = () => {
  if ((window as any).CrowdApp && (window as any).CrowdApp.widget_token) {
    const widget_token = (window as any).CrowdApp.widget_token;
    const crowdWidgetClass = new SetupCrowdWidget(widget_token);
    crowdWidgetClass.setupWidgetContainer();
  } else {
    console.error(
      "Crowd App installation failed. Please ensure that you are using the correct code snippet"
    );
  }
};

/**
 * @class SetupCrowdWidget
 * @constructor (widgetToken: string)
 *
 * @description The SetupCrowdWidget class provides functionality for creating and embedding crowd widget on client website.
 */
class SetupCrowdWidget {
  //** Variable that holds the widget token and it will be used across the class*/
  private widgetToken: string = "";

  //** Generate IDs for the div container that will be used for the IFrames */
  private panelFrameId = generateId(`${widgetVariablePrefix}-body`);
  private launcherFrameId = generateId(`${widgetVariablePrefix}-launcher`);
  private controllerFrameId = generateId(`${widgetVariablePrefix}-controller`);
  private controllerFrameWrapperId = generateId(
    `${widgetVariablePrefix}-controller-wrapper`
  );
  private screenRecordPlayerFrameId = generateId(
    `${widgetVariablePrefix}-record-player-frame`
  );

  widgetParentContainer = null as unknown as HTMLDivElement;

  iframesLoaded = {
    launcherFrame: false,
    panelFrame: false,
    controllerFrame: false,
  };

  constructor(widgetToken: string) {
    this.widgetToken = widgetToken;
  }

  /** Return all the iFrame reference  */
  private getWidgetElementsReference() {
    const panelIframe = document.getElementById(
      this.panelFrameId
    ) as HTMLIFrameElement;
    const launcherIframe = document.getElementById(
      this.launcherFrameId
    ) as HTMLIFrameElement;
    const controllerIframe = document.getElementById(
      this.controllerFrameId
    ) as HTMLIFrameElement;
    const controllerWapper = document.getElementById(
      this.controllerFrameWrapperId
    ) as HTMLIFrameElement;
    const playerFrame = document.getElementById(
      this.screenRecordPlayerFrameId
    ) as HTMLDivElement;
    return {
      panelIframe,
      launcherIframe,
      controllerWapper,
      controllerIframe,
      playerFrame,
    };
  }

  /**
   * This private method provides the endpoint for each of the iframe containers that will be created
   */
  private getwidgetFrameEndpoint() {
    return {
      panelEndpoint: `${baseURL}?token=${this.widgetToken}`,
      launcherEndpoint: `${baseURL}/launcher?token=${this.widgetToken}`,
      controllerEndpoint: `${baseURL}/recorder-controller`,
    };
  }

  setupWidgetContainer() {
    this.widgetParentContainer = document.createElement("div");
    this.widgetParentContainer.classList.add("crowd-widget");
    this.setupWidgetLauncherElement();
    this.setupWidgetPanelElement();
    this.setupWidgetControllerElement();
    this.setupWidgetRecordPlayerElement();
    document.body.appendChild(this.widgetParentContainer);
    window.addEventListener("message", (event) => {
      if (event.origin !== crowdOrigin) return;
      this.listenAndExecutePostMessageInteration(event);
    });
    this.assignWidgetPanelAndLauncherEndpoints();
    enableControllerDragging(
      this.getWidgetElementsReference().controllerWapper
    );
    this.assignListenerToControlButton();
  }

  //** Setup the iframe for the widget launcher */
  private setupWidgetLauncherElement() {
    const widgetLauncherIframe = `<iframe id="${this.launcherFrameId}" frameborder="0" class="crowd-widget-launcher-frame" allowtransparency="true" style="height: 0;"></iframe>`;
    this.widgetParentContainer.innerHTML += widgetLauncherIframe;
  }

  //** Setup the iframe for the widget panel */
  private setupWidgetPanelElement() {
    const widgetPanelIframe = `<iframe id="${this.panelFrameId}" frameborder="0" class="crowd-widget-body-frame" allowtransparency="true" style="height: 0; visibility: hidden;"></iframe>`;
    this.widgetParentContainer.innerHTML += widgetPanelIframe;
  }

  //** Setup the iframe for the widget controller basically for the screen recording container */
  private setupWidgetControllerElement() {
    const controllerIframeHtml = `<div id="${this.controllerFrameWrapperId}" class="controller-frame crowd-block" style="visibility: hidden;"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg></div>
    <iframe id="${this.controllerFrameId}" frameborder="0" allowtransparency="true"></iframe></div>`;
    this.widgetParentContainer.innerHTML += controllerIframeHtml;
  }

  private setupWidgetRecordPlayerElement() {
    const controllerIframeHtml = `<div id="${this.screenRecordPlayerFrameId}" class="record-player-frame" style="visibility: hidden;">
      <div class="player-action">
        <button type="button" id="delete-screen-record">Cancel</button>
        <button type="button" id="save-screen-record">Save video</button>
      </div>
      <div class="crowd-player-container" id="record-player"></div>
    </div>`;
    this.widgetParentContainer.innerHTML += controllerIframeHtml;
  }

  private assignListenerToControlButton() {
    document
      .getElementById("delete-screen-record")
      ?.addEventListener("click", () => {
        clearRecording();
        this.toggleCrowdWidgetControllerVisibility("CLOSEPLAYER");
      });
    document
      .getElementById("save-screen-record")
      ?.addEventListener("click", () => {
        saveScreenRecording(
          widgetOrigin,
          this.getWidgetElementsReference().panelIframe
        );
        this.toggleCrowdWidgetControllerVisibility("CLOSEPLAYER");
      });
  }

  private assignWidgetPanelAndLauncherEndpoints() {
    const elementRefs = this.getWidgetElementsReference();
    if (
      elementRefs.launcherIframe !== null &&
      elementRefs.panelIframe &&
      elementRefs.panelIframe.contentWindow &&
      elementRefs.launcherIframe.contentWindow
    ) {
      elementRefs.launcherIframe.contentWindow.location.href =
        this.getwidgetFrameEndpoint().launcherEndpoint;
      elementRefs.panelIframe.contentWindow.location.href =
        this.getwidgetFrameEndpoint().panelEndpoint;
    }
  }

  private assignWidgetControllerEndpoints() {
    const elementRefs = this.getWidgetElementsReference();
    if (
      elementRefs.controllerIframe !== null &&
      elementRefs.controllerIframe.contentWindow
    ) {
      elementRefs.controllerIframe.contentWindow.location.href =
        this.getwidgetFrameEndpoint().controllerEndpoint;
    }
  }

  private adjustWidgetPanelPositionDimension(
    action: "Position" | "Resize",
    eventData: any
  ) {
    const elementRefs = this.getWidgetElementsReference();
    if (action === "Position") {
      elementRefs.panelIframe.classList.add(
        `widget-panel-${eventData.launcherPosition
          .toLowerCase()
          .split("_")
          .join("-")}`
      );
    } else if (action === "Resize") {
      elementRefs.panelIframe.style.height = `${eventData.height}px`;
    }
  }

  private adjustWidgetLauncherPositionDimension(
    action: "Position" | "Resize",
    eventData: any
  ) {
    const elementRefs = this.getWidgetElementsReference();
    if (action === "Position") {
      elementRefs.launcherIframe.classList.add(
        `widget-launcher-${eventData.position
          .toLowerCase()
          .split("_")
          .join("-")}`
      );
    } else if (action === "Resize") {
      elementRefs.launcherIframe.style.height = `${eventData.height}px`;
      elementRefs.launcherIframe.style.width = `${eventData.width}px`;
    }
  }

  private toggleWidgetVisibility() {
    const elementRefs = this.getWidgetElementsReference();
    if (isWidgetPanelVisible) {
      elementRefs.panelIframe.style.visibility = "hidden";
      elementRefs.launcherIframe.style.visibility = "visible";
    } else {
      elementRefs.panelIframe.style.visibility = "visible";
      elementRefs.launcherIframe.style.visibility = "hidden";
      elementRefs.panelIframe.contentWindow?.postMessage(
        {
          eventType: "STARTCOUNTDOWN",
        },
        crowdOrigin
      );
    }
    isWidgetPanelVisible = !isWidgetPanelVisible;
  }

  private toggleCrowdWidgetControllerVisibility(
    event: "STARTRECORDING" | "STOPRECORDING" | "CLOSEPLAYER"
  ) {
    const elementRefs = this.getWidgetElementsReference();
    if (event === "STARTRECORDING") {
      elementRefs.panelIframe.style.visibility = "hidden";
      elementRefs.controllerWapper.style.visibility = "visible";
    } else if (event === "STOPRECORDING") {
      document.body.classList.add("show-crowd-player");
      elementRefs.playerFrame.style.visibility = "visible";
      elementRefs.controllerWapper.style.visibility = "hidden";
    } else if (event === "CLOSEPLAYER") {
      document.body.classList.remove("show-crowd-player");
      elementRefs.playerFrame.style.visibility = "hidden";
      elementRefs.panelIframe.style.visibility = "visible";
    }
  }

  listenAndExecutePostMessageInteration(event: MessageEvent) {
    const elementRefs = this.getWidgetElementsReference();
    if (event.data.eventType === "PANELLOADED") {
      this.adjustWidgetPanelPositionDimension("Position", event.data.body);
    } else if (event.data.eventType === "PANELRESIZE") {
      this.adjustWidgetPanelPositionDimension("Resize", event.data.body);
    } else if (event.data.eventType === "LAUNCHERLOADED") {
      if (
        !event.data.body.showFeedbackWidget ||
        event.data.body.showFeedbackWidget === "false"
      ) {
        this.clearWidgetOnDeactivation();
        return;
      }
      checkDeviceAndPageCompability(event.data.body.displayRule).then(
        (response) => {
          if (response) {
            setTimeout(() => {
              this.adjustWidgetLauncherPositionDimension("Position", response);
              if (!getUserIDSession(widgetVariablePrefix)) {
                elementRefs.launcherIframe.contentWindow?.postMessage(
                  {
                    eventType: "WIDGETIMPRESSION",
                  },
                  crowdOrigin
                );
              }
            }, response.showAfter);
          } else {
            this.clearWidgetOnDeactivation();
          }
        }
      );
    } else if (event.data.eventType === "LAUNCHERRESIZE") {
      this.adjustWidgetLauncherPositionDimension("Resize", event.data.body);
    } else if (event.data.eventType === "IMPRESSIONRECORDED") {
      generateWidgetUserIDAndStore(widgetVariablePrefix, cookieLifetime);
    } else if (event.data.eventType === "OPENPANEL") {
      this.toggleWidgetVisibility();
      if (
        elementRefs.controllerWapper !== null &&
        !this.iframesLoaded.controllerFrame
      ) {
        this.assignWidgetControllerEndpoints();
        this.iframesLoaded.controllerFrame = true;
      }
    } else if (event.data.eventType === "STARTSCREENRECORD") {
      startBugTrackingScreenRecording();
      this.toggleCrowdWidgetControllerVisibility("STARTRECORDING");
    } else if (event.data.eventType === "STOPSCREENRECORD") {
      stopBugTrackingScreenRecording();
      elementRefs.controllerWapper.style.visibility = "hidden";
      this.toggleCrowdWidgetControllerVisibility("STOPRECORDING");
    }
  }

  clearWidgetOnDeactivation() {
    this.widgetParentContainer.remove();
  }

  getClientSiteDomain() {
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const hostname = url.hostname;
    console.log(hostname);
    return hostname;
  }
}
initCrowdWidget();
