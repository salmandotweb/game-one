import React from "react";
import "./FeatureCard.css";

export default function FeatureCard({ img, title, subtitle }) {
  return (
    <div class="card feature-card">
      <img src={img} class="card-img" alt="img" />
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{subtitle}</p>
      </div>
    </div>
  );
}
