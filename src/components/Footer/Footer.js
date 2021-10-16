import React from "react";
import NewsLetter from "../NewsLetter/NewsLetter";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <NewsLetter />
      <div className="copyright">
        <p> &copy; CopyRight All right reserved & designed by DAOBETs</p>
        <div className="links">
          <a href="/"><i className="fab fa-twitter"></i></a>
          <a href="/"><i className="fab fa-medium"></i></a>
        </div>
      </div>
    </footer>
  );
}
