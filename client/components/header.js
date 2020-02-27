import React, { useRef, useEffect, useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../context/authContext";

const Header = () => {
  const navListEl = useRef();
  const [isMobile, setIsMobile] = useState(false);
  const { dispatch: authDispatch } = useContext(AuthContext);

  const handleLogout = e => {
    e.preventDefault();
    authDispatch({ type: "LOGOUT_SUCCESS" });
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
          <i className="fas fa-bars js-toggle-off"></i>
        </button>
        <ul className="nav-list" ref={navListEl}>
          <li className="nav-list__item">
            <Link
              href="/"
              // activeClassName="active-link"
            >
              <a className="nav-list__item-link">Home</a>
            </Link>
          </li>
          <li className="nav-list__item">
            <Link
              href="articles"
              // activeClassName="active-link"
            >
              <a className="nav-list__item-link">Articles</a>
            </Link>
          </li>
          <li className="nav-list__item">
            <a href="/" className="nav-list__item-link" onClick={handleLogout}>
              Logout
            </a>
          </li>
          <Link
            href="/login"
            // activeClassName="active-link"
          >
            <a className="nav-list__item-link">Login</a>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
