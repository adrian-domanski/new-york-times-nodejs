import React, { createContext, useReducer } from "react";
import { initState, authReducer } from "./reducers/authReducer";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [authContext, dispatch] = useReducer(authReducer, initState);
  return (
    <AuthContext.Provider
      value={{ authContext: { ...authContext, ...props.ssrValues }, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
