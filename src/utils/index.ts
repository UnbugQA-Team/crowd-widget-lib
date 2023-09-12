import { DisplayRules } from "../model";

export const widgetLauncherPosition = [
  { label: "Middle left", value: "Middle left" },
  { label: "Middle right", value: "Middle right" },
  { label: "Bottom left", value: "Bottom left" },
  { label: "Bottom right", value: "Bottom right" },
];

export const generateWidgetUserIDAndStore = (
  prefix: string,
  cookieLifetime: number
) => {
  // Calculate the expiration date for 4 hours from now
  const expirationDate = new Date();
  expirationDate.setTime(
    expirationDate.getTime() + cookieLifetime * 60 * 60 * 1000
  ); // 4 hours in milliseconds
  const cookieItem = `${prefix}-user-session=${encodeURIComponent(
    generateId("crowd-widget-user-session")
  )}; expires=${expirationDate.toUTCString()}; path=/`;
  document.cookie = cookieItem;
};

export const getUserIDSession = (prefix: string) => {
  const cookieName = `${prefix}-user-session`;
  const cookies = document.cookie;

  // Parse the cookie string to find the item
  const cookieItems = cookies.split(";");
  let itemValue = null;

  cookieItems.forEach((cookieItem) => {
    const [name, value] = cookieItem.trim().split("=");
    if (name === cookieName) {
      itemValue = decodeURIComponent(value);
    }
  });

  return itemValue === null ? false : true;
};

export const generateId = (suffix: string): string => {
  return `${suffix}-${new Date().getTime()}${Math.floor(Math.random() * 100)}`;
};

export const getOS = () => {
  const userAgent = window.navigator.userAgent;

  if (/iPhone/i.test(userAgent)) {
    return "ios";
  } else if (/iPad/i.test(userAgent)) {
    return "ipad";
  } else if (/Macintosh/i.test(userAgent)) {
    return "mac";
  } else if (/windows/i.test(userAgent)) {
    return "windows";
  } else if (/Android/.test(userAgent)) {
    return "android";
  } else if (/Linux/.test(userAgent)) {
    return "linux";
  }

  return "unknown";
};

export const setClientOs = () => {
  document.documentElement.dataset.os = getOS();
};

export const getDeviceType = () => {
  const userAgent = navigator.userAgent;
  if (
    /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
  ) {
    return "Mobile";
  } else if (/Tablet|iPad/i.test(userAgent)) {
    return "Tablet";
  } else {
    return "Desktop";
  }
};

export const checkPageCompability = (
  visibilityOption: string,
  specificPageOption: string,
  specificPageValue: string
) => {
  //* Check if the option is All Pages
  if (visibilityOption === "ALLPAGES") {
    return true;
  } else if (visibilityOption === "SPECIFICPAGES") {
    //* Check if the option is Specific Pages

    const currentUrl = window.location.href.replace(/\/$/, "");

    if (specificPageOption === "start_with") {
      return currentUrl.startsWith(specificPageValue);
    } else if (specificPageOption === "end_with") {
      return currentUrl.endsWith(specificPageValue);
    } else if (specificPageOption === "contains") {
      return currentUrl.includes(specificPageValue);
    } else if (specificPageOption === "exactly_matches") {
      return currentUrl === specificPageValue;
    } else if (specificPageOption === "is_not") {
      return currentUrl !== specificPageValue;
    } else if (specificPageOption === "matches_regex") {
      const regexPattern = new RegExp(specificPageValue, "i");
      return regexPattern.test(currentUrl);
    }
  } else {
    return false;
  }
};

export const checkDeviceAndPageCompability = async (data: DisplayRules) => {
  const visitorsDeviceType = getDeviceType().toLowerCase();
  const showWidgetOnCurrentPage = checkPageCompability(
    data.visibilityOption,
    data.specificPageOption,
    data.specificPageValue
  );

  if (data.devices.includes(visitorsDeviceType) && showWidgetOnCurrentPage) {
    return {
      position: data.position,
      showAfter: data.showWidgetAfter,
    };
  } else {
    return false;
  }
};

export const enableControllerDragging = (element: any) => {
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
