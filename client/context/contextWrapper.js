import React, { useContext, useEffect } from "react";
import { ArticleContext } from "./articleContext";
import { useQuery } from "@apollo/react-hooks";
import { getArticlesQuery } from "../queries/articleQueries";
import { authUserQuery } from "../queries/authQueries";
import { AuthContext } from "./authContext";

const ContextWrapper = ({ children, contextData }) => {
  const { dispatch: articleDispatch } = useContext(ArticleContext);
  const { dispatch: authDispatch } = useContext(AuthContext);
  const { data } = useQuery(getArticlesQuery);
  const { refetch: authUser } = useQuery(authUserQuery, { skip: true });

  useEffect(() => {
    const fetchData = async () => {
      // Get all articles
      articleDispatch({ type: "GET_ARTICLES", payload: data.articles });
      // Check if local storage has token and try to auth
      if (localStorage.getItem("token")) {
        try {
          const { data } = await authUser({
            token: localStorage.getItem("token")
          });

          authDispatch({ type: "AUTH_SUCCESS", payload: data.authUser });
        } catch (err) {
          console.log(err);
        }
      }
    };
    fetchData();
  }, []);

  return <>{children}</>;
};

export default ContextWrapper;
