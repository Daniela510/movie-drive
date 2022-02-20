import { MENU_CLOSE, MENU_OPEN } from "./menuTypes";

export const menuClose = () => {
  return {
    type: MENU_CLOSE,
  };
};
export const menuOpen = () => {
  return {
    type: MENU_OPEN,
  };
};
