// import {createSelector} from "reselect";

export const loadingSelector = (state) => state.app.loading;
export const articlesSelector = (state) => state.articles.articles;
// export const articleTitleSelector = (title) => createSelector(
//   (state) => state.articles.articles,
//   (articles) => articles.find((elem) => elem.title === title)
// )
