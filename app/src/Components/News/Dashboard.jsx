import React, { useState } from 'react';
import axios from '../../Services/api';
import Articles from './Articles';

const API_KEY = 'b3f3853c39804a67b2b35f7e2ad0f4c6';

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [arts, setArt] = useState([]);
  const [sortBy, setSortBy] = useState('popularity');
  const [page, setPage] = useState(1);

  async function apiGet() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchValue}&sortBy=${sortBy}&apiKey=${API_KEY}&pageSize=10&page=${page}`,
      );
      console.log(response.data);
      setArt(response.data.articles);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  async function pageHandler(event) {
    event.preventDefault();
    const input = event.target[0].value;
    console.log(input);
    setPage(input);
    await apiGet();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await apiGet();
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
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </form>
      <Articles articles={arts} />
      {arts.length
        ? (
          <form onSubmit={pageHandler}>
            <input type="text" pattern="^([\d]{1,5})$" name="page" />
            <button type="submit">go to page</button>
          </form>
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
