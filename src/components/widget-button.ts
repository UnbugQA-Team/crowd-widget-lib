export const buildWidgetLauncherButton = (
  id: string,
  parentContainer: HTMLDivElement
) => {
  const widgetLauncherIframe = `<iframe id="${id}" frameborder="0" class="crowd-widget-launcher-frame" allowtransparency="true" style="height: 0;"></iframe>`;
  parentContainer.innerHTML += widgetLauncherIframe;
};

export const addWidgetLauncherEventAndAttribute = (
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

export const adjustWidgetLauncherPosition = (
  iframe: HTMLIFrameElement,
  position: string
) => {
  iframe.classList.add(
    `widget-launcher-${position.toLowerCase().split("_").join("-")}`
  );
};

export const adjustWidgetLauncherDimensions = (
  iFrameElement: HTMLIFrameElement,
  width: number,
  height: number
) => {
  iFrameElement.style.height = `${height}px`;
  iFrameElement.style.width = `${width}px`;
};
