import { useQuery } from "@apollo/react-hooks";
import { getArticlesQuery } from "../queries/articleQueries";
import { authUserQuery } from "../queries/authQueries";
import ArticleContextProvider from "./articleContext";
import { useEffect, useContext } from "react";
import { AuthContext } from "./authContext";

function ContextWrapper({ children }) {
  const { dispatch: authDispatch } = useContext(AuthContext);
  const { data: articleData, loading: articleLoading } = useQuery(
    getArticlesQuery
  );

  const { refetch: authUser } = useQuery(authUserQuery, { skip: true });

  useEffect(() => {
    const fetchAuth = async () => {
      try {
        authDispatch({ type: "SET_LOADING" });
        const token = localStorage.getItem("token");
        if (!token) throw Error("No token provided - auth fail");
        const { data } = await authUser({ token });
        authDispatch({ type: "AUTH_SUCCESS", payload: data.authUser });
      } catch (err) {
        authDispatch({ type: "AUTH_ERROR" });
        console.log(err.message);
      }
    };

    fetchAuth();
  }, []);

  const articles = !articleLoading ? articleData.articles : [];

  return (
    <ArticleContextProvider ssrValues={{ articles }}>
      {children}
    </ArticleContextProvider>
  );
}

export default ContextWrapper;
