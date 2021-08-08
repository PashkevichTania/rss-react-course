import React from 'react';

const Articles = ({ articles }) => (
  <div className="">
    <ul className="">
      {articles.map(({
        author, title, publishedAt, urlToImage, description,
      }) => (
        <li className="articles_search" key={Math.floor(Math.random())}>
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
          </div>
          <img className="articles_img" width={200} src={urlToImage} alt={title} />
        </li>
      ))}
    </ul>
  </div>
);

export default Articles;
