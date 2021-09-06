import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Articles from "./Articles";
import { fetchArticles } from "../../Redux/actions";
import { articlesSelector, loadingSelector } from "../../Redux/selectors";

const NewsPage = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [sortBy, setSortBy] = useState("popularity");

  const isLoading = useSelector(loadingSelector);
  const articles = useSelector(articlesSelector);

  function pageHandler(event) {
    event.preventDefault();
    const input = event.target[0].value;
    dispatch(fetchArticles(searchValue, sortBy, input));
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchArticles(searchValue, sortBy, 1));
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="page-wrap" data-testid="newsPage">
      <form className="search-gr" onSubmit={handleSubmit}>
        <label htmlFor="search">
          Search:
          <input
            data-testid="news-input"
            id="search"
            type="text"
            value={searchValue}
            onChange={handleChange}
            disabled={isLoading}
            className="input"
          />
        </label>
        <div className="radio__inputs">
          <label htmlFor="relevancy">
            <input
              id="relevancy"
              type="radio"
              value="relevancy"
              checked={sortBy === "relevancy"}
              onChange={() => setSortBy("relevancy")}
            />
            relevancy
          </label>
          <label htmlFor="popularity">
            <input
              id="popularity"
              type="radio"
              value="popularity"
              checked={sortBy === "popularity"}
              onChange={() => setSortBy("popularity")}
            />
            popularity
          </label>
          <label htmlFor="publishedAt">
            <input
              id="publishedAt"
              type="radio"
              value="publishedAt"
              checked={sortBy === "publishedAt"}
              onChange={() => setSortBy("publishedAt")}
            />
            publishedAt
          </label>
        </div>
        <button type="submit" disabled={isLoading} data-testid="news-btn">
          {isLoading === true ? "Loading..." : "Search"}
        </button>
      </form>
      {articles && articles.length > 5 ? (
        <div data-testid="news-div">
          <Articles articles={articles} />
          <form onSubmit={pageHandler}>
            <input type="text" pattern="^([\d]{1,5})$" name="page" />
            <button type="submit">go to page</button>
          </form>
        </div>
      ) : (
        <div style={{ color: "white", fontSize: "2em" }}>Search something!</div>
      )}
    </div>
  );
};

export default NewsPage;
