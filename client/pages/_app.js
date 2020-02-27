import React from "react";
import ArticleContextProvider from "../context/articleContext";
import AuthContextProvider from "../context/authContext";
import ContextWrapper from "../context/contextWrapper";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";

const MyApp = props => {
  const { Component, pageProps } = props;
  return (
    <AuthContextProvider>
      <ArticleContextProvider>
        <ContextWrapper contextData={props.contextData}>
          <Component {...pageProps} />;
        </ContextWrapper>
      </ArticleContextProvider>
    </AuthContextProvider>
  );
};

export default withApollo(MyApp, { getDataFromTree });
