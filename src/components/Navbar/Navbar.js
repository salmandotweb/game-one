import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ appNav }) {
  const [show, handleShow] = useState(false);
  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed-top navbar-expand-lg navbar-light ${
          show && "navbar__active"
        }`}
      >
        <div className="container mobile-nav">
          <a className="navbar-brand" href="/">
            <img src="images/navlogo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Events
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/app">
                  App
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Blog
                </a>
              </li>
            </ul>
            <button className="btn" type="submit">
              Collect Wallet <i className="fas fa-user"></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
