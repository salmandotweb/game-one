import React from "react";
import { Link } from "react-router-dom";
import "./AppMenu.css";

export default function AppMenu() {
  return (
    <>
      <nav class="navbar app-menu navbar-expand-lg w-100">
        <div class="container-fluid d-flex align-items-center justify-content-start">
          <Link class="navbar-brand home-link" to="/app">
            <i className="fas fa-home"></i> Home
          </Link>
          <div class="navbar-nav d-flex align-items-center justify-content-center flex-row">
            <a
              class="nav-link nav-menu-link active"
              aria-current="page"
              href="/"
            >
              Soccer
            </a>
            <a class="nav-link nav-menu-link" href="/">
              Basketball
            </a>
            <a class="nav-link nav-menu-link" href="/">
              Football
            </a>
            <a class="nav-link nav-menu-link" href="/">
              Boxing
            </a>
            <a class="nav-link nav-menu-link" href="/">
              Golf
            </a>
            <a class="nav-link nav-menu-link" href="/">
              Horse Racing
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
