const { GraphQLList, GraphQLString, GraphQLInt } = require("graphql");
const { ArticleType, SearchArticleType } = require("../objectTypes");
const axios = require("axios");

const articles = {
  type: GraphQLList(ArticleType),
  resolve: async (parent, args, ctx) => {
    try {
      const { data } = await axios.get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=8KZZUTBaIxt20npBsa0Jxi48fqXI6Syk"
      );
      const formattedArr = data.results
        .map(article => {
          if (
            article.media.length &&
            article.media[0]["media-metadata"].length === 3
          ) {
            const { title, id, abstract, published_date, byline } = article;
            return {
              title,
              id,
              description: abstract,
              imageUrl: article.media[0]["media-metadata"][2].url,
              publishedDate: published_date,
              byLine: byline
            };
          }
        })
        .filter(article => article);

      return formattedArr;
    } catch (err) {
      throw err;
    }
  }
};

const searchArticles = {
  type: GraphQLList(SearchArticleType),
  args: {
    page: { type: GraphQLInt },
    phrase: { type: GraphQLString }
  },
  resolve: async (parent, args, ctx) => {
    const { phrase, page } = args;
    const { data } = await axios.get(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${phrase}&api-key=8KZZUTBaIxt20npBsa0Jxi48fqXI6Syk&fl=abstract&fl=_id&fl=web_url&fl=lead_paragraph&fl=byline&fl=pub_date&page=${page}`
    );

    const formattedArr = data.response.docs.map(article => {
      const {
        lead_paragraph,
        _id,
        abstract,
        pub_date,
        byline,
        web_url
      } = article;
      return {
        title: lead_paragraph,
        id: _id,
        description: abstract,
        publishedDate: pub_date,
        url: web_url,
        byLine: byline.original
      };
    });

    return formattedArr;
  }
};

module.exports = {
  articles,
  searchArticles
};
