export const buildScreenRecorderControllerContainer = (
  wrapperId: string,
  id: string,
  parentContainer: HTMLDivElement
) => {
  const controllerIframeHtml = `<div id="${wrapperId}" style="visibility: hidden;"><div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg></div>
    <iframe id="${id}" frameborder="0" allowtransparency="true" loading="lazy"></iframe></div>`;
  parentContainer.innerHTML += controllerIframeHtml;
};

// Function to enable dragging
export const enableDragging = (element: any) => {
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  // Function to handle mouse down event
  function dragMouseDown(e: any) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  // Function to handle mouse move event
  function elementDrag(e: any) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  }

  // Function to handle mouse up event
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

  // Attach the event listener to the iframe
  element.onmousedown = dragMouseDown;
};

export const addScreenRecoderControllerEventAndAttribute = (
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
