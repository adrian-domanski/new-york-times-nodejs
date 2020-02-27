import React, { useState, useContext } from "react";
import Layout from "../components/layout";
import ArticlesRow from "../components/articlesRow";
import banerImg from "../images/baner.jpg";
import { AuthContext } from "../context/authContext";
import Link from "next/link";
import { ArticleContext } from "../context/articleContext";

const Index = () => {
  const { isAuth } = useContext(AuthContext);
  const {
    articleContext: { articles }
  } = useContext(ArticleContext);

  return (
    <Layout>
      <div className="home-page">
        <div className="home-page-baner">
          <img src={banerImg} className="home-page-baner__img" />
          <div className="baner-content">
            <h1 className="baner-content__title">
              Welcome on the <b>New York Times Articles</b> page!
            </h1>
          </div>
        </div>
        <section className="home-page-info container">
          <h1 className="home-page-info__title">
            To see all available articles please{" "}
            <Link href="/login">
              <a className="home-page-info__link">Log In</a>
            </Link>
            !
          </h1>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
