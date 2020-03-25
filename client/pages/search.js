import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/layout";
import { getArticlesByPhraseQuery } from "../queries/articleQueries";
import { useQuery } from "@apollo/react-hooks";
import ArticleItem from "../components/articleItem";

const SearchPage = () => {
  const { refetch: searchArticles } = useQuery(getArticlesByPhraseQuery, {
    skip: true
  });

  const [articlesLoading, setArticlesLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [phrase, setPhrase] = useState("");
  const [page, setPage] = useState(0);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    if (isBottom && !articlesLoading) fetchMore();
  }, [isBottom]);

  const pageContainer = useRef();

  const handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  // Add scroll listener on component mount
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Search submit
  const handleSearch = async () => {
    try {
      setArticlesLoading(true);
      const { data } = await searchArticles({ phrase, page });
      setArticlesLoading(false);
      setPage(page + 1);
      if (!data.searchArticles.length) return setArticles(null);
      setArticles(data.searchArticles);
      console.log(data);
    } catch (err) {
      console.log(err);
      setArticlesLoading(false);
    }
  };

  const fetchMore = async () => {
    try {
      setArticlesLoading(true);
      const { data } = await searchArticles({ phrase, page });
      setArticlesLoading(false);
      setPage(page + 1);
      setArticles([...articles, ...data.searchArticles]);
    } catch (err) {
      setArticlesLoading(false);
      console.log(err);
    }
  };

  return (
    <Layout>
      <div className="search-page container">
        <h1 className="search-page__title">Search articles by phrase</h1>
        <p className="search-page__lead">
          Type in interesting phrase and click browse, scroll to the bottom of
          the page for more results.
        </p>
        <div className="search-bar">
          <input
            type="text"
            name="phrase"
            value={phrase}
            autoComplete="off"
            className="search-bar__input"
            placeholder="Title, category, phrase..."
            onChange={e => setPhrase(e.target.value)}
          />
          <button onClick={handleSearch} className="search-bar__btn">
            {phrase ? "Browse" : "Random news"}
          </button>
        </div>
        <div className="search-grid" ref={pageContainer}>
          {articles === null ? (
            <h1 className="search-page__title">No search results</h1>
          ) : (
            <>
              {articles.map(article => (
                <ArticleItem article={article} key={article.id} />
              ))}
              {articlesLoading ? (
                <div className="loader">Loading...</div>
              ) : null}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SearchPage;
