import React from "react";
import ArticleContextProvider from "../context/articleContext";
import AuthContextProvider from "../context/authContext";
import ContextWrapper from "../context/contextWrapper";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import App from "next/app";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AuthContextProvider>
        <ArticleContextProvider>
          <ContextWrapper contextData={this.props.contextData}>
            <Component {...pageProps} />;
          </ContextWrapper>
        </ArticleContextProvider>
      </AuthContextProvider>
    );
  }
}

export default withApollo(MyApp, { getDataFromTree });
