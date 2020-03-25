import React, { useRef, useEffect, useState, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import { AuthContext } from "../context/authContext";
import { useRouter } from "next/router";

const Header = () => {
  const navListEl = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const {
    authContext: { isAuth },
    dispatch: authDispatch
  } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = e => {
    e.preventDefault();
    authDispatch({ type: "LOGOUT_SUCCESS" });
    router.push("/");
  };

  useEffect(() => {
    if (isMobile) {
      navListEl.current.classList.add("mobile-active");
    } else {
      navListEl.current.classList.remove("mobile-active");
    }
  }, [isMobile]);

  useEffect(() => {
    const closeMobileOnClickOff = e => {
      if (isMobile && !e.target.classList.contains("js-toggle-off")) {
        setIsMobile(false);
      }
    };
    document.body.addEventListener("click", closeMobileOnClickOff);
    return () =>
      document.body.removeEventListener("click", closeMobileOnClickOff);
  });

  return (
    <>
      <Head>
        <title>NYT | Articles</title>
        <meta
          name="description"
          content="All news available in one place. It's always a good idea to be up to date. New York Times Articles (NYT Articles) provides you the best content every single day..."
        />
      </Head>
      <header className="l-header">
        <nav className="nav">
          <div className="nav-logo">
            <Link href="/">
              <a className="link-reset">
                <h1 className="nav-logo__title">NYT Articles</h1>
              </a>
            </Link>
          </div>
          <button
            className="nav-toggler js-toggle-off"
            onClick={() => setIsMobile(!isMobile)}>
            <i className="fas fa-bars js-toggle-off" aria-hidden={true}></i>
          </button>
          <ul className="nav-list" ref={navListEl}>
            <li className="nav-list__item">
              <Link href="/">
                <a
                  className={`nav-list__item-link ${
                    router.pathname === "/" ? "active-link" : ""
                  }`}>
                  Home
                </a>
              </Link>
            </li>
            {isAuth ? (
              <>
                <li className="nav-list__item">
                  <Link href="/search">
                    <a
                      className={`nav-list__item-link ${
                        router.pathname === "/search" ? "active-link" : ""
                      }`}>
                      Search
                    </a>
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link href="/articles">
                    <a
                      className={`nav-list__item-link ${
                        router.pathname === "/articles" ? "active-link" : ""
                      }`}>
                      Articles
                    </a>
                  </Link>
                </li>
                <li className="nav-list__item">
                  <a
                    href="/"
                    className="nav-list__item-link"
                    onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-list__item">
                  <Link href="/login">
                    <a
                      className={`nav-list__item-link ${
                        router.pathname === "/login" ? "active-link" : ""
                      }`}>
                      Login
                    </a>
                  </Link>
                </li>
                <li className="nav-list__item">
                  <Link href="/register">
                    <a
                      className={`nav-list__item-link ${
                        router.pathname === "/register" ? "active-link" : ""
                      }`}>
                      Register
                    </a>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
