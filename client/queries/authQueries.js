import gql from "graphql-tag";

export const loginQuery = gql`
  query($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        id
        email
      }
      token
    }
  }
`;

export const authUserQuery = gql`
  query($token: String!) {
    authUser(token: $token) {
      email
      password
      id
    }
  }
`;

export const registerMutation = gql`
  mutation($email: String!, $password: String!) {
    register(email: $email, password: $password) {
      user {
        email
        id
      }
      token
    }
  }
`;
