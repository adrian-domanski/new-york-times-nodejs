const graphql = require("graphql");

// Mutations
const userMutations = require("./mutations/userMutations");

const { GraphQLObjectType } = graphql;

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  fields: {
    ...userMutations
  }
});

module.exports = RootMutation;
