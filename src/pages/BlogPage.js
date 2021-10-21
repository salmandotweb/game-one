import React from "react";
import AppNav from "../components/AppNav/AppNav";
import Blog from "../components/Blog/Blog";
import "../components/Blog/Blog.css";

export default function BlogPage() {
  return (
    <div>
      <div style={{ height: "4rem" }}>
        <AppNav />
      </div>
      <Blog />
    </div>
  );
}
