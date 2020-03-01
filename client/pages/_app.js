import React from "react";
import App from "next/app";
import withApollo from "../lib/withApollo";
import { getDataFromTree } from "@apollo/react-ssr";
import ContextWrapper from "../context/contextWrapper";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
    );
  }
}

export default withApollo(MyApp, { getDataFromTree });
