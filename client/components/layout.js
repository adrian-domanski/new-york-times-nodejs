import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";

const Layout = ({ children }) => {
  return (
    <div className="l-page-grid">
      <Header />
      <main className="l-main-page-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
