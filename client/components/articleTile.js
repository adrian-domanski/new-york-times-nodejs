import React, { useState, useEffect } from "react";
import { getNYTArticleId } from "../helpers/helpers";

const ArticleTile = ({ article }) => {
  const [articleImg, setArticleImg] = useState("");

  useEffect(() => {
    if (article.media.length) {
      const [img] = article.media;
      if (img.type === "image") {
        setArticleImg({
          alt: img.caption,
          src: img["media-metadata"][img["media-metadata"].length - 1].url
        });
      }
    }
  }, []);

  if (!articleImg) return null;

  return (
    <Link
      to={`/app/article/${getNYTArticleId(article.uri)}`}
      className="link-reset"
      state={article}>
      <div className="article-tile">
        <img
          src={articleImg.src}
          alt={articleImg.alt}
          className="article-tile__img"
        />
        <div className="article-tile-content">
          <h1 className="article-tile__title">{article.title}</h1>
          <p className="article-tile__byline">{article.byline}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleTile;
