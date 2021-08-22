import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Articles from './Articles';
import { fetchArticles } from '../../Redux/actions';
import { articlesSelector, loadingSelector } from '../../Redux/selectors';

const Dashboard = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [sortBy, setSortBy] = useState('popularity');
  const [page, setPage] = useState(1);

  const isLoading = useSelector(loadingSelector);
  const articles = useSelector(articlesSelector);

  async function pageHandler(event) {
    event.preventDefault();
    const input = event.target[0].value;
    setPage(input);
    dispatch(fetchArticles(searchValue, sortBy, page));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(fetchArticles(searchValue, sortBy, page));
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="page-wrap">
      <form className="search-gr" onSubmit={handleSubmit}>
        <label htmlFor="search">
          Search:
          <input
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
              checked={sortBy === 'relevancy'}
              onChange={() => setSortBy('relevancy')}
            />
            relevancy
          </label>
          <label htmlFor="popularity">
            <input
              id="popularity"
              type="radio"
              value="popularity"
              checked={sortBy === 'popularity'}
              onChange={() => setSortBy('popularity')}
            />
            popularity
          </label>
          <label htmlFor="publishedAt">
            <input
              id="publishedAt"
              type="radio"
              value="publishedAt"
              checked={sortBy === 'publishedAt'}
              onChange={() => setSortBy('publishedAt')}
            />
            publishedAt
          </label>
        </div>
        <button type="submit" disabled={isLoading}>
          {(isLoading === undefined) ? 'Loading...' : 'Search'}
        </button>
      </form>
      {articles
        ? (
          <div>
            <Articles articles={articles} />
            <form onSubmit={pageHandler}>
              <input type="text" pattern="^([\d]{1,5})$" name="page" />
              <button type="submit">go to page</button>
            </form>
          </div>
        )
        : (
          <div style={{ color: 'white', fontSize: '2em' }}>
            Search something!
          </div>
        )}
    </div>
  );
};

export default Dashboard;
