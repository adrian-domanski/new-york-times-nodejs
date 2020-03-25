const graphql = require("graphql");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { GraphQLList, GraphQLNonNull, GraphQLString } = graphql;
const { UserType, LoginType } = require("../objectTypes");

// Login
const login = {
  type: LoginType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  resolve: async (parent, args) => {
    try {
      const { email, password } = args;
      if (!email || !password) {
        throw new Error("Please enter all credentials");
      }
      const user = await User.findOne({ email }).select("--password");

      if (!user) {
        throw new Error("User with that email does not exist!");
      }

      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) {
        throw new Error("Invalid credentials - wrong password");
      }

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        "jwtSecret",
        { expiresIn: "1h" }
      );

      return {
        userId: user.id,
        token
      };
    } catch (err) {
      throw err;
    }
  }
};

// Auth user - return user based on token
const authUser = {
  type: LoginType,
  args: {
    token: { type: GraphQLString }
  },
  resolve: async (parent, args, ctx) => {
    try {
      const decoded = await jwt.decode(args.token, "jwtSecret");
      if (decoded && decoded.userId) {
        return {
          userId: decoded.userId,
          token: args.token
        };
      }
    } catch (err) {
      throw err;
    }
  }
};
module.exports = {
  login,
  authUser
};
