import React from "react";
import AppNav from "../components/AppNav/AppNav";
import AppLeftSection from "../sections/AppLeftSection/AppLeftSection";
import AppRightSection from "../sections/AppRightSection/AppRightSection";
import AppMenu from "../components/AppMenu/AppMenu";
import "./AppPage.css";

export default function AppPage() {
  return (
    <div className="app-container">
      <AppNav />
      <AppMenu />
      <div className="app-section">
        <AppLeftSection />
        <AppRightSection />
      </div>
    </div>
  );
}
