const graphql = require("graphql");
const User = require("../models/User");
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

// Article type
const ArticleType = new GraphQLObjectType({
  name: "ArticleType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    publishedDate: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    byLine: { type: GraphQLString }
  })
});

// Search article type
const SearchArticleType = new GraphQLObjectType({
  name: "SearchArticleType",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
    publishedDate: { type: GraphQLString },
    url: { type: GraphQLString },
    byLine: { type: GraphQLString }
  })
});

// User type
const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  })
});

// Login type
const LoginType = new GraphQLObjectType({
  name: "LoginType",
  fields: () => ({
    user: {
      type: UserType,
      resolve: (parent, args, ctx) => {
        try {
          return User.findById(parent.userId);
        } catch (err) {
          throw err;
        }
      }
    },
    token: { type: GraphQLString }
  })
});

module.exports = {
  ArticleType,
  UserType,
  LoginType,
  SearchArticleType
};
