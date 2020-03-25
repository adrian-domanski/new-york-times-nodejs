import React, { useContext } from "react";
import { AuthContext } from "./authContext";
import { withRouter } from "next/router";
import Login from "../pages/login";

const InitialContextUse = ({ children, router }) => {
  const { authContext } = useContext(AuthContext);
  console.log("Auth: ", authContext);

  if (
    !authContext.isAuth &&
    (router.pathname.includes("/article") ||
      router.pathname.includes("/search"))
  ) {
    if (process.browser) {
      router.push("/login");
    }
    return <Login />;
  }

  return children;
};

export default withRouter(InitialContextUse);
