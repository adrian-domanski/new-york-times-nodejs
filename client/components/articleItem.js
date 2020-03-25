import React from "react";
import moment from "moment";

const ArticleItem = ({ article }) => {
  return (
    <a className="link-reset" href={article.url} target="_blank">
      <div className="article-tile">
        <div className="article-tile-content">
          <h1 className="article-tile__title">{article.title}</h1>
          <h1 className="article-tile__pubDate">
            {moment(article.publishedDate).calendar()}
          </h1>
          <p className="article-tile__byline">{article.byLine}</p>
        </div>
      </div>
    </a>
  );
};

export default ArticleItem;
