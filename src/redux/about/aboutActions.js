import { ABOUT_CLOSE, ABOUT_OPEN, REQUESTS_CLOSE, REQUESTS_OPEN } from "./aboutTypes";

export const aboutClose = () => {
  return {
    type: ABOUT_CLOSE,
  };
};
export const aboutOpen = () => {
  return {
    type: ABOUT_OPEN,
  };
};
export const requestsClose = () => {
  return {
    type: REQUESTS_CLOSE,
  };
};
export const requestsOpen = () => {
  return {
    type: REQUESTS_OPEN,
  };
};
