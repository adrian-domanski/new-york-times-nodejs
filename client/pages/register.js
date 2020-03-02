import React, { useState, useContext, useEffect } from "react";
import Layout from "../components/layout";
import { useMutation } from "@apollo/react-hooks";
import { registerMutation } from "../queries/authQueries";
import { AuthContext } from "../context/authContext";
import { useRouter } from "next/router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [alert, setAlert] = useState("");
  const [alertTimeOut, setAlertTimeOut] = useState();
  const [register] = useMutation(registerMutation);
  const {
    authContext: { isAuth },
    dispatch: authDispatch
  } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (isAuth) {
      router.push("/articles");
    }
  }, [isAuth]);

  // Clear timeout after unmount
  useEffect(() => {
    return () => clearTimeout(alertTimeOut);
  });

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
    setAlertTimeOut(
      setTimeout(() => {
        setAlert("");
      }, 5000)
    );
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
      const { data } = await register({ variables: { email, password } });
      authDispatch({ type: "REGISTER_SUCCESS", payload: data.register });
      console.log(data);
    } catch (err) {
      authDispatch({ type: "REGISTER_ERROR" });
      if (err.graphQLErrors.length) {
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
          <h1 className="login-page__title">Register</h1>
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
              value="Create Account"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
