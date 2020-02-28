const graphql = require("graphql");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Object Types
const { UserType, LoginType } = require("../objectTypes");

const { GraphQLString, GraphQLNonNull, GraphQLID } = graphql;

// Register
const register = {
  type: LoginType,
  args: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  },
  async resolve(parent, args) {
    try {
      const { email, password } = args;
      if (!email || !password) {
        throw new Error("Please enter all credentials");
      }
      // Check if user exist
      const fetchedUser = await User.findOne({ email });
      if (fetchedUser) throw Error("User with that email already exists");
      // Hash password and create user
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ email, password: hashedPassword });
      const user = await newUser.save();
      const token = jwt.sign({ userId: user.id }, "jwtSecret", {
        expiresIn: "1h"
      });
      return {
        userId: user.id,
        token
      };
    } catch (err) {
      throw err;
    }
  }
};

module.exports = {
  register
};
