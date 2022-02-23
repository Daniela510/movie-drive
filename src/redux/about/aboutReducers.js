import { ABOUT_CLOSE, ABOUT_OPEN, REQUESTS_CLOSE, REQUESTS_OPEN } from "./aboutTypes";

const initialState = {
  display: false,
  requests: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ABOUT_OPEN:
      return {
        ...state,
        display: true,
      };
    case ABOUT_CLOSE:
      return {
        ...state,
        display: false,
      };
    case REQUESTS_OPEN:
      return {
        ...state,
        requests: true,
      };
    case REQUESTS_CLOSE:
      return {
        ...state,
        requests: false,
      };
    default:
      return state;
  }
};

export default reducer;
