import React, { useContext } from "react"
import { ArticleContext } from "../context/articleContext"
import Head from "./head"
import ArticlesRow from "./articlesRow"

const ArticleDetails = ({ id }) => {
  const { articles } = useContext(ArticleContext)
  const article = articles.find(article => article.uri.includes(id))
  return (
    <>
      <Head title="Article" />
      <div className="article-details-page">
        {article ? (
          <>
            <section className="article-details container">
              <h1 className="article-details__title">{article.title}</h1>
              <img
                className="article-details__img"
                src={article.media[0]["media-metadata"][2].url}
                alt={article.media[0]["media-metadata"][2].caption}
              />
              <p className="article-details__content">{article.abstract}</p>
              <p className="article-details__publish">
                Published on {article.published_date} <b>{article.byline}</b>
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
    </>
  )
}

export default ArticleDetails
