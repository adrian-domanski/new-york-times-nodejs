import React, { createContext, useReducer } from "react";
import { articleReducer, initState } from "./reducers/articleReducer";

export const ArticleContext = createContext();

const ArticleContextProvider = props => {
  const [articleContext, dispatch] = useReducer(articleReducer, initState);
  return (
    <ArticleContext.Provider value={{ articleContext, dispatch }}>
      {props.children}
    </ArticleContext.Provider>
  );
};

export default ArticleContextProvider;
