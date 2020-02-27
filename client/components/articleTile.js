import React from "react";
import Link from "next/link";

const ArticleTile = ({ article }) => {
  return (
    <Link href={`/article/[id]`} as={`/article/${article.id}`}>
      <a className="link-reset">
        <div className="article-tile">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="article-tile__img"
          />
          <div className="article-tile-content">
            <h1 className="article-tile__title">{article.title}</h1>
            <p className="article-tile__byline">{article.byLine}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleTile;
