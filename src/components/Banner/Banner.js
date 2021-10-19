import React from "react";
import "./Banner.css";

export default function Banner() {
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: "url(images/hero-bg.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <h1 data-aos="fade-left">Have any question please feel free!</h1>
        <button className="btn askBtn" data-aos="fade-right">
          Ask Now
        </button>
      </div>
    </>
  );
}
