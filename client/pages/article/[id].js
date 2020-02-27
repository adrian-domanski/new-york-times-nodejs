import React, { useContext } from "react";
import { ArticleContext } from "../../context/articleContext";
import ArticlesRow from "../../components/articlesRow";
import { useRouter } from "next/router";
import Layout from "../../components/layout";

const ArticleDetails = props => {
  const router = useRouter();
  const {
    articleContext: { articles }
  } = useContext(ArticleContext);
  const article = articles.find(article => article.id === router.query.id);
  return (
    <Layout>
      <div className="article-details-page">
        {article ? (
          <>
            <section className="article-details container">
              <h1 className="article-details__title">{article.title}</h1>
              <img
                className="article-details__img"
                src={article.imageUrl}
                alt={article.title}
              />
              <p className="article-details__content">{article.description}</p>
              <p className="article-details__publish">
                Published on {article.publishedDate} <b>{article.byLine}</b>
              </p>
            </section>
            <div className="container">
              <ArticlesRow
                rowTitle="Other articles"
                alreadyUsedArticle={article}
              />
            </div>
          </>
        ) : (
          <div className="loader">Loading...</div>
        )}
      </div>
    </Layout>
  );
};

export default ArticleDetails;
