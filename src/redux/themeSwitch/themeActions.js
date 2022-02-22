import { THEME_CLASSIC, THEME_INVERT, THEME_GOLD } from "./themeTypes";

export const makeClassic = () => {
  return {
    type: THEME_CLASSIC,
  };
};
export const makeInverse = () => {
  return {
    type: THEME_INVERT,
  };
};
export const makeGold = () => {
  return {
    type: THEME_GOLD,
  };
};
