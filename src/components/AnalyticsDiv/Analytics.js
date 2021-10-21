import React, { useState } from "react";
import StatsContainer from "../StatsContainer/StatsContainer";
import "./Analytics.css";

export default function Analytics() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className="analytics-container">
      <div className="bloc-tabs upper-tab">
        <button
          className={
            toggleState === 1
              ? "tabs  active-tabs active-market-tabs"
              : "tabs market-tabs"
          }
          onClick={() => toggleTab(1)}
        >
          Last 24h
        </button>
        <button
          className={
            toggleState === 2
              ? "tabs  active-tabs active-market-tabs"
              : "tabs market-tabs"
          }
          onClick={() => toggleTab(2)}
        >
          7 days
        </button>
        <button
          className={
            toggleState === 3
              ? "tabs  active-tabs active-market-tabs"
              : "tabs market-tabs"
          }
          onClick={() => toggleTab(3)}
        >
          30 days
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={
            toggleState === 1
              ? "content market-content  active-content"
              : "content"
          }
        >
          <StatsContainer title="Total Sale" price="62,426" />
          <StatsContainer title="Total Volume" price="3,985.2" />
          <StatsContainer title="Items Sold" price="60,402" />
        </div>

        <div
          className={
            toggleState === 2
              ? "content market-content  active-content"
              : "content"
          }
        >
          <StatsContainer title="Total Sale" price="431,788" />
          <StatsContainer title="Total Volume" price="31,463.4" />
          <StatsContainer title="Items Sold" price="431,465" />
        </div>

        <div
          className={
            toggleState === 3
              ? "content market-content  active-content"
              : "content"
          }
        >
          <StatsContainer title="Total Sale" price="1,965,913" />
          <StatsContainer title="Total Volume" price="155,790.6" />
          <StatsContainer title="Items Sold" price="1,963,815" />
        </div>
      </div>
    </div>
  );
}
