const { GraphQLList } = require("graphql");
const { ArticleType } = require("../objectTypes");
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

module.exports = {
  articles
};
