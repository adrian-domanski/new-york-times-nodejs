import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

export default withApollo(
  ({ initialState }) => {
    const dev = process.env.NODE_ENV !== "production";
    console.log(dev);
    return new ApolloClient({
      uri: "https://my-nyt-articles.herokuapp.com/graphql",
      // ? "http://localhost:5000/graphql"
      cache: new InMemoryCache().restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    }
  }
);
