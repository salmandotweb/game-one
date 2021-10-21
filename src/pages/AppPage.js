import React from "react";
import AppNav from "../components/AppNav/AppNav";
import AppMenu from "../components/AppMenu/AppMenu";
import AppLeftSection from "../sections/AppLeftSection/AppLeftSection";
import AppRightSection from "../sections/AppRightSection/AppRightSection";
import "./AppPage.css";

export default function AppPage() {
  return (
    <div className="app-container">
      <div
        style={{
          height: "8rem",
        }}
      >
        <AppNav />
        <div
          style={{
            height: "4.5rem",
          }}
        >
          <AppMenu />
        </div>
      </div>
      <div className="app-section">
        <AppLeftSection />
        <AppRightSection />
      </div>
    </div>
  );
}
