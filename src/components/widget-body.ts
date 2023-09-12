export const buildWidgetBodyContainer = (
  id: string,
  parentContainer: HTMLDivElement
) => {
  const widgetPanelIframe = `<iframe id="${id}" frameborder="0" class="crowd-widget-body-frame" allowtransparency="true" style="height: 0; visibility: hidden;"></iframe>`;
  parentContainer.innerHTML += widgetPanelIframe;
};

export const addWidgetBodyEventAndAttribute = (
  iFrameElement: HTMLIFrameElement,
  url: string
) => {
  if (iFrameElement) {
    const iframeWindow = iFrameElement.contentWindow;
    if (iframeWindow) {
      iframeWindow.location.href = url;
    }
  }
};

export const adjustWidgetBodyDimensions = (
  iFrameElement: HTMLIFrameElement,
  width: number,
  height: number
) => {
  console.log(width);
  iFrameElement.style.height = `${height}px`;
};

export const adjustWidgetPanelPosition = (
  iframe: HTMLIFrameElement,
  position: string
) => {
  iframe.classList.add(
    `widget-panel-${position.toLowerCase().split("_").join("-")}`
  );
};
