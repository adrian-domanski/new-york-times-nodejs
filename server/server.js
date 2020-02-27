const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./graphql/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP(req => {
    return {
      context: {
        req
      },
      schema,
      graphiql: true
    };
  })
);

const PORT = process.env.PORT || 5000;

// mongoose.set("debug", true);
mongoose.connect(
  "mongodb+srv://test:test123@cluster0-t75dz.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log("MongoDB Connected...")
);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}...`));
