export const initState = {
  isAuth: false,
  user: null,
  token: null
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        isAuth: true,
        user: { ...action.payload },
        token: localStorage.getItem("token")
      };
    case "LOGOUT_SUCCESS":
    case "REGISTER_ERROR":
    case "LOGIN_ERROR":
    case "AUTH_ERROR":
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null
      };
    default:
      return state;
  }
};
