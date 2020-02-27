import React, { useState, useContext } from "react";
import Layout from "../components/layout";
import { useQuery } from "@apollo/react-hooks";
import { loginQuery } from "../queries/authQueries";
import { AuthContext } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("john123");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [alert, setAlert] = useState("");
  const { refetch: login } = useQuery(loginQuery, { skip: true });
  const { authContext, dispatch: authDispatch } = useContext(AuthContext);

  const handleValidateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      return setEmailError("Email must have @ and .");
    }
    // No error
    setEmailError("");
  };

  const handleValidatePassword = password => {
    if (password.length < 3) {
      return setPasswordError("Password must have at least 3 chars");
    }

    // No error
    setPasswordError("");
  };

  const showAlert = msg => {
    setAlert(msg);

    // Clear alert
    setTimeout(() => {
      setAlert("");
    }, 5000);
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "email":
        handleValidateEmail(value);
        return setEmail(value);
      case "password":
        handleValidatePassword(value);
        return setPassword(value);
      default:
        return null;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await login({ password, email });
      authDispatch({ type: "LOGIN_SUCCESS", payload: data.login });
    } catch (err) {
      if (err.graphQLErrors) {
        showAlert(err.graphQLErrors[0].message);
      } else {
        console.log(err);
      }
    }
  };

  return (
    <Layout>
      <div className="login-page container">
        <div className="login-page-container">
          <h1 className="login-page__title">Log in</h1>
          <div className="login-page__info">
            To begin your journey with the New York Times Articles, please
            authenticate yourself.
          </div>
          <form
            onSubmit={e => {
              handleSubmit(e);
            }}
            className="login-page__form">
            {alert ? (
              <div className="login-alert">
                {alert}
                <button onClick={() => setAlert("")} className="alert-close">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            ) : null}
            <div className="form-control">
              <div className={`input-error ${emailError ? "active" : ""}`}>
                {emailError}
              </div>
              <input
                type="email"
                name="email"
                className="login-form__input"
                value={email}
                onChange={handleChange}
                placeholder="Email..."
              />
            </div>
            <div className="form-control">
              <div className={`input-error ${passwordError ? "active" : ""}`}>
                {passwordError}
              </div>
              <input
                type="password"
                name="password"
                value={password}
                className="login-form__input"
                onChange={handleChange}
                placeholder="Password..."
              />
            </div>

            <input
              type="submit"
              disabled={passwordError || emailError ? true : false}
              className="btn btn--submit"
              value="Log In"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
