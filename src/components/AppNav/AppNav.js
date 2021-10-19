import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AppNav.css";
import "../Navbar/Navbar.css";
import AppMenu from "../AppMenu/AppMenu";

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
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
      }}
    >
      <nav
        className={`navbar app-nav navbar-expand-lg navbar-light ${
          show && "navbar__active"
        }`}
      >
        <div className="container-fluid mobile-nav">
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
            <button className="btn app-nav-btn" type="submit">
              Login
            </button>
            <button className="btn app-nav-btn" type="submit">
              Register
            </button>
          </div>
        </div>
      </nav>
      <AppMenu />
    </div>
  );
}
