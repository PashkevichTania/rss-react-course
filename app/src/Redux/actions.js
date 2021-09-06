import axios from "axios";
import {
  FETCH_ARTICLES,
  DELETE_ARTICLES,
  HIDE_LOADER,
  SHOW_LOADER,
} from "./types";

const API_KEY = "b3f3853c39804a67b2b35f7e2ad0f4c6";

export function showLoader() {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function fetchArticles(searchValue, sortBy, page) {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=${API_KEY}&pageSize=10&page=${page}`
      );
      console.log(
        `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=${API_KEY}&pageSize=10&page=${page}`
      );
      console.log(response.data);
      dispatch({ type: FETCH_ARTICLES, payload: response.data.articles });
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(hideLoader());
    }
  };
}

export function deleteArticles() {
  return {
    type: DELETE_ARTICLES,
  };
}
