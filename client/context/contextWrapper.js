import { useQuery } from "@apollo/react-hooks";
import { getArticlesQuery } from "../queries/articleQueries";
import AuthContextProvider from "./authContext";
import ArticleContextProvider from "./articleContext";

function ContextWrapper({ children }) {
  const { data: articleData, loading: articleLoading } = useQuery(
    getArticlesQuery
  );

  const articles = !articleLoading ? articleData.articles : [];

  return (
    <AuthContextProvider>
      <ArticleContextProvider ssrValues={{ articles }}>
        {children}
      </ArticleContextProvider>
    </AuthContextProvider>
  );
}

export default ContextWrapper;
