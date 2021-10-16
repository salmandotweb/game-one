import React from "react";
import "./InvestCard.css";

export default function InvestCard({ img, title, subTitle, profit }) {
  return (
    <>
      <div class="card invest-card">
        <img src={img} class="card-img" alt="img" />
        <div class="card-body">
          <h5 class="card-title profit">{profit}</h5>
          <h5 class="card-title title">{title}</h5>
          <p class="card-text subtitle">{subTitle}</p>
          <a href="/" class="btn seeAll-btn">
            See All <i className="fas fa-arrow-circle-right"></i>
          </a>
        </div>
      </div>
    </>
  );
}
