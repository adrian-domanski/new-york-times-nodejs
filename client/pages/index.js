import React from "react";
import Layout from "../components/layout";
import ArticlesRow from "../components/articlesRow";
import banerImg from "../images/baner.jpg";
import Head from "next/head";

const Index = () => {
  return (
    <Layout>
      <Head>
        <title>NYT Articles | Home</title>
      </Head>
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
          <ArticlesRow rowTitle="Recent articles" />
        </section>
      </div>
    </Layout>
  );
};

export default Index;
