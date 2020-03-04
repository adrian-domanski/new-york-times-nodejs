export const initState = {
  isAuth: false,
  user: null,
  token: null,
  isLoading: false
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "REGISTER_SUCCESS":
    case "LOGIN_SUCCESS":
      const now = new Date();
      now.setHours(now.getHours() + 1);
      document.cookie = `token=${
        action.payload.token
      }; path=/; expires=${now.toUTCString()}`;
      return {
        ...state,
        isAuth: true,
        user: action.payload.user,
        token: action.payload.token,
        isLoading: false
      };
    case "AUTH_SUCCESS":
      return {
        ...state,
        isAuth: true,
        user: { ...action.payload },
        token: localStorage.getItem("token"),
        isLoading: false
      };
    case "LOGOUT_SUCCESS":
    case "REGISTER_ERROR":
    case "LOGIN_ERROR":
    case "AUTH_ERROR":
      document.cookie = `token=""; path=/; expires=${new Date().toUTCString()}`;
      return {
        ...state,
        isAuth: false,
        user: null,
        token: null,
        isLoading: false
      };
    default:
      return state;
  }
};
