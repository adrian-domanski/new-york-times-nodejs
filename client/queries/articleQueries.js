import gql from "graphql-tag";

export const getArticlesQuery = gql`
  query {
    articles {
      id
      title
      description
      imageUrl
      publishedDate
      byLine
    }
  }
`;
