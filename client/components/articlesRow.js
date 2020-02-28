import React, { useEffect, useState, useContext } from "react";
import { ArticleContext } from "../context/articleContext";
import ArticleTile from "./articleTile";

const ArticlesRow = ({ rowTitle = "Other articles", alreadyUsedArticle }) => {
  const [otherArticles, setOtherArticles] = useState([]);
  const {
    articleContext: { articles }
  } = useContext(ArticleContext);
  useEffect(() => {
    if (articles.length) {
      let tempArr = [];
      while (tempArr.length < 3) {
        const random = Math.floor(Math.random() * articles.length);
        if (
          !tempArr.includes(articles[random]) &&
          (articles[random] !== alreadyUsedArticle || !alreadyUsedArticle)
        ) {
          tempArr.push(articles[random]);
        }
      }
      setOtherArticles(tempArr);
    }
  }, [articles, alreadyUsedArticle]);

  return (
    <section className="other-articles">
      <h1 className="other-articles__title">{rowTitle}</h1>
      <div className="other-articles-grid">
        {otherArticles.map(article => (
          <ArticleTile key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default ArticlesRow;
