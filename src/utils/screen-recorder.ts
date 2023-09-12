import * as rrweb from "rrweb";
import rrwebPlayer from "rrweb-player";
import "rrweb-player/dist/style.css";

let screenRecordEvent = [] as any;
let recorderObj = null as any;
const recordingFrameIndicator = document.createElement("div");
recordingFrameIndicator.classList.add("recording-frame");

export const startBugTrackingScreenRecording = () => {
  appendWidgetFrameToBody();
  clearRecording();
  recorderObj = rrweb.record({
    emit(event) {
      screenRecordEvent.push(event);
    },
    recordCanvas: true,
  });
};

export const stopBugTrackingScreenRecording = () => {
  recorderObj();
  const playerContainer = document.getElementById(
    "record-player"
  ) as HTMLDivElement;
  emptyElement(playerContainer);
  setTimeout(() => {
    new rrwebPlayer({
      target: playerContainer,
      props: {
        events: screenRecordEvent,
      },
    });
  }, 200);
  removeWidgetFrameToBody();
};

export const saveScreenRecording = (
  widgetOrigin: string,
  panelFrame: HTMLIFrameElement
) => {
  panelFrame.contentWindow?.postMessage(
    {
      eventType: "SCREENRECORDDONE",
      body: {
        recorderedEvent: screenRecordEvent,
      },
    },
    widgetOrigin
  );
};

export const clearRecording = () => {
  screenRecordEvent = [];
};

function emptyElement(element: HTMLElement) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

const appendWidgetFrameToBody = () => {
  document.body.classList.add("crowd-recording-frame");
  document.body.appendChild(recordingFrameIndicator);
};

const removeWidgetFrameToBody = () => {
  document.body.classList.remove("crowd-recording-frame");
};
