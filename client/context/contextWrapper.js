import { useQuery } from "@apollo/react-hooks";
import { getArticlesQuery } from "../queries/articleQueries";
import { authUserQuery } from "../queries/authQueries";
import ArticleContextProvider from "./articleContext";
import { useEffect, useContext } from "react";
import { AuthContext } from "./authContext";

function ContextWrapper({ children, cookie }) {
  const { dispatch: authDispatch } = useContext(AuthContext);
  const { data: articleData, loading: articleLoading } = useQuery(
    getArticlesQuery
  );

  const { data: authData, loading: authLoading } = useQuery(authUserQuery, {
    variables: { token: cookie.toString() }
  });

  console.log(authData);

  useEffect(() => {
    if (!authLoading) {
      if (authData && authData.authUser) {
        authDispatch({ type: "AUTH_SUCCESS", payload: authData.authUser });
      } else {
        authDispatch({ type: "AUTH_ERROR" });
      }
    }
  }, [authLoading]);

  const articles = !articleLoading ? articleData.articles : [];

  return (
    <ArticleContextProvider ssrValues={{ articles }}>
      {children}
    </ArticleContextProvider>
  );
}

export default ContextWrapper;
