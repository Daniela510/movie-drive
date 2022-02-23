import { ADD_CART, REMOVE_CART } from "./cartTypes";

export const addItem = movie => {
  return {
    type: ADD_CART,
    payload: movie
  };
};
export const removeItem = movie => {
  return {
    type: REMOVE_CART,
    payload: movie
  };
};