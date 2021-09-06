import { DELETE_ARTICLES, FETCH_ARTICLES } from "./types";

const initialState = {
  articles: [],
};

const articlesReducer = (
  action = {
    type: DELETE_ARTICLES,
    payload: [],
  },
  state = initialState
) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { articles: action.payload };
    case DELETE_ARTICLES:
      return { articles: [] };
    default:
      return state;
  }
};

export default articlesReducer;
