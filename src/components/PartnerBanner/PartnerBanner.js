import React from "react";
import "./PartnerBanner.css";

export default function PartnerBanner() {
  return (
    <div
      className="partner-banner"
      style={{
        background: "url(images/hero-bg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>Our Partners</h1>
      <div className="logos">
        <div className="partner-logo">
          <img src="images/partner-1.png" alt="logo" />
        </div>
        <div className="partner-logo">
          <img src="images/partner-2.png" alt="logo" />
        </div>
        <div className="partner-logo">
          <img src="images/partner-3.png" alt="logo" />
        </div>
        <div className="partner-logo">
          <img src="images/partner-4.png" alt="logo" />
        </div>
        <div className="partner-logo">
          <img src="images/partner-5.png" alt="logo" />
        </div>
      </div>
    </div>
  );
}
