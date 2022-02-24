import {
  FETCH_MOVIE_FAIL,
  FETCH_MOVIE_REQ,
  FETCH_MOVIE_SUC,
  SET_ACTIVE_DATA,
} from "./movieTypes";

const initialState = {
  loading: false,
  movies: [],
  activeData: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOVIE_SUC:
      return {
        ...state,
        loading: false,
        movies: action.payload,
        error: "",
      };
    case FETCH_MOVIE_FAIL:
      return {
        ...state,
        loading: false,
        movies: [],
        error: action.payload,
      };
    case SET_ACTIVE_DATA:
      return {
        ...state,
        activeData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
