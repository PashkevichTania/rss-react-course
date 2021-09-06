import { HIDE_LOADER, SHOW_LOADER } from "./types";

const initialState = {
  loading: false,
};

const appReducer = (action = { type: HIDE_LOADER }, state = initialState) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { loading: true };
    case HIDE_LOADER:
      return { loading: false };
    default:
      return state;
  }
};

export default appReducer;
