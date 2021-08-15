import React from 'react';
import { Link } from 'react-router-dom';

const Articles = ({ articles }) => (
  <div className="">
    <ul className="">
      {articles.map(({
        author, title, publishedAt, urlToImage, description,
      }) => (
        <li className="articles_search" key={title + Math.floor(Math.random() * 100)}>
          <div className="articles_text">
            <h2>{title}</h2>
            <p>
              Author:
              {author}
            </p>
            <p>
              Published at:
              {publishedAt}
            </p>
            <p>{description}</p>
            <Link to={`/details/${title}`}>Read more</Link>
          </div>
          <img className="articles_img" width={200} src={urlToImage} alt={title} />
        </li>
      ))}
    </ul>
  </div>
);

export default Articles;
