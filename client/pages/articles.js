import React, { useContext } from "react";
import { ArticleContext } from "../context/articleContext";
import ArticleTile from "../components/articleTile";
import Layout from "../components/layout";

const Articles = () => {
  const {
    articleContext: { articles }
  } = useContext(ArticleContext);
  console.log(articles);
  const articlesList = articles.length ? (
    <div className="articles-grid">
      {articles.map(article => (
        <ArticleTile key={article.id} article={article} />
      ))}
    </div>
  ) : (
    <div className="loader">Loading...</div>
  );
  return (
    <Layout>
      <div className="articles-page container">{articlesList}</div>
    </Layout>
  );
};

export default Articles;
