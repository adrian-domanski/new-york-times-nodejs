const graphql = require("graphql");

const { GraphQLObjectType } = graphql;
const articleQueries = require("./queries/articleQueries");
const userQueries = require("./queries/userQueries");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...articleQueries,
    ...userQueries
  }
});

module.exports = RootQuery;
