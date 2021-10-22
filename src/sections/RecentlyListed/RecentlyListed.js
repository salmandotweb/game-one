import React, { useState } from "react";
import RecentlyListedCard from "../../components/RecentlyListedCard/RecentlyListedCard";
import "./RecentlyListed.css";

export default function Analytics() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <>
      <div className="recently-listed-container">
        <div className="bloc-tabs upper-listed-tab">
          <button
            className={
              toggleState === 1
                ? "tabs  active-tabs active-listed-tabs"
                : "tabs listed-tabs"
            }
            onClick={() => toggleTab(1)}
          >
            Items Sold
          </button>
          <button
            className={
              toggleState === 2
                ? "tabs  active-tabs active-listed-tabs"
                : "tabs listed-tabs"
            }
            onClick={() => toggleTab(2)}
          >
            Skins
          </button>
          <button
            className={
              toggleState === 3
                ? "tabs  active-tabs active-listed-tabs"
                : "tabs listed-tabs"
            }
            onClick={() => toggleTab(3)}
          >
            Characters
          </button>
          <button
            className={
              toggleState === 4
                ? "tabs  active-tabs active-listed-tabs"
                : "tabs listed-tabs"
            }
            onClick={() => toggleTab(4)}
          >
            Collectables
          </button>
        </div>

        <div className="listed-tabs">
          <div
            className={
              toggleState === 1
                ? "content listed-content  active-content"
                : "content"
            }
          >
            <RecentlyListedCard
              img="images/axie.png"
              id="#000001"
              range="2x"
              price="$306.59"
            />
            <RecentlyListedCard
              img="images/axie-2.png"
              id="#000001"
              range="3x"
              price="$306.59"
            />
            <RecentlyListedCard
              img="images/axie-3.png"
              id="#000001"
              range="2x"
              price="$306.59"
            />
            <RecentlyListedCard
              img="images/axie-4.png"
              id="#000001"
              range="1x"
              price="$306.59"
            />
            <RecentlyListedCard
              img="images/axie-5.png"
              id="#000001"
              range="3x"
              price="$306.59"
            />
          </div>

          <div
            className={
              toggleState === 2
                ? "content listed-content  active-content"
                : "content"
            }
          ></div>

          <div
            className={
              toggleState === 3
                ? "content listed-content  active-content"
                : "content"
            }
          ></div>

          <div
            className={
              toggleState === 4
                ? "content listed-content  active-content"
                : "content"
            }
          ></div>
        </div>
      </div>
    </>
  );
}
