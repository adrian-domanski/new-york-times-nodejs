import { useQuery } from "@apollo/react-hooks";
import { getArticlesQuery } from "../queries/articleQueries";
import { authUserQuery } from "../queries/authQueries";
import ArticleContextProvider from "./articleContext";
import AuthContextProvider from "./authContext";
import InitialContextUse from "./InitialContextUse";

function ContextWrapper({ children, cookie }) {
  const { data: articleData, loading: articleLoading } = useQuery(
    getArticlesQuery
  );

  const { data: authData, loading: authLoading, error: authError } = useQuery(authUserQuery, {
    skip: !cookie.toString(),
    variables: { token: cookie.toString() || "" }
  });

  let authSsrData = {};

  if (!authLoading && !authError && authData && authData.authUser) {
    authSsrData = {
      token: authData.authUser.token || null,
      user: { email: authData.authUser.user.email },
      isAuth: true
    };
  }
  const articles = !articleLoading ? articleData.articles : [];

  return (
    <AuthContextProvider ssrValues={authSsrData}>
      <ArticleContextProvider ssrValues={{ articles }}>
        <InitialContextUse>{children}</InitialContextUse>
      </ArticleContextProvider>
    </AuthContextProvider>
  );
}

export default ContextWrapper;
