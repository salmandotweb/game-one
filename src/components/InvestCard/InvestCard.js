import React from "react";
import "./InvestCard.css";

export default function InvestCard({ img, subTitle }) {
  return (
    <>
      <div class="card invest-card" data-aos="fade-up">
        <img src={img} class="avatar" alt="img" />
        <div class="card-body">
          <p class="card-text subtitle">{subTitle}</p>
        </div>
      </div>
    </>
  );
}
