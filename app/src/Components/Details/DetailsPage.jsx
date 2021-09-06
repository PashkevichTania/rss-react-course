import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../../Redux/actions";
import { articlesSelector } from "../../Redux/selectors";

const DetailsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href.toString().match(/details\/(.*)/gm);
    if (url[0]) {
      const title = url[0].split("%20").join(" ").slice(8);

      dispatch(fetchArticles(title, "relevancy", 1));
    }
  }, []);
  const arts = useSelector(articlesSelector);
  console.log(arts ? arts[0] : arts);

  return (
    <div className="ArticleDetails">
      {(arts ? arts[0] : arts) ? (
        <div>
          <h3>{arts[0].source.name}</h3>
          <h2>{arts[0].title}</h2>
          <p>
            Author:
            {arts[0].author}
          </p>
          <p>
            Published at:
            {arts[0].publishedAt}
          </p>
          <p>{arts[0].description}</p>
          <div>{arts[0].title}</div>
          <img
            className="articles_img"
            width={200}
            src={arts[0].urlToImage}
            alt={arts[0].title}
          />
        </div>
      ) : (
        <div>{false ? "loading...." : "someting whent wrong"}</div>
      )}
    </div>
  );
};

export default DetailsPage;
