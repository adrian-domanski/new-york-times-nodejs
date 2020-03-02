import React, { useContext, useEffect } from "react";
import { ArticleContext } from "../context/articleContext";
import ArticleTile from "../components/articleTile";
import Layout from "../components/layout";
import { AuthContext } from "../context/authContext";
import { useRouter } from "next/router";

const Articles = () => {
  const {
    articleContext: { articles }
  } = useContext(ArticleContext);
  const {
    authContext: { isAuth }
  } = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!isAuth) router.push("/login");
  }, [isAuth]);

  const articlesList =
    articles.length && isAuth ? (
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
