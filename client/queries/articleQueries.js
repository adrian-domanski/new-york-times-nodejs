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

export const getArticlesByPhraseQuery = gql`
  query($page: Int!, $phrase: String!) {
    searchArticles(page: $page, phrase: $phrase) {
      id
      title
      description
      publishedDate
      url
      byLine
    }
  }
`;
