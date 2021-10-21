import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MatchCard from "../MatchCard/MatchCard";
import "./CardSlider.css";

export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <MatchCard
              league="UEFA Europe League"
              team1="Italy"
              img1="images/italy.png"
              score1="2"
              score2="1"
              team2="Barcelona"
              img2="images/barcelona.png"
            />
          </div>
          <div>
            <MatchCard
              league="Champions League"
              team1="Madrid"
              img1="images/madrid.png"
              score1="0"
              score2="3"
              team2="Juventus"
              img2="images/juventus.png"
            />
          </div>
          <div>
            <MatchCard
              league="UEFA Europe League"
              team1="Italy"
              img1="images/italy.png"
              score1="2"
              score2="1"
              team2="Barcelona"
              img2="images/barcelona.png"
            />
          </div>
          <div>
            <MatchCard
              league="Champions League"
              team1="Madrid"
              img1="images/madrid.png"
              score1="0"
              score2="3"
              team2="Juventus"
              img2="images/juventus.png"
            />
          </div>
          <div>
            <MatchCard
              league="UEFA Europe League"
              team1="Juventus"
              img1="images/united.png"
              score1="2"
              score2="1"
              team2="Italy"
              img2="images/italy.png"
            />
          </div>
          <div>
            <MatchCard
              league="Champions League"
              team1="Madrid"
              img1="images/madrid.png"
              score1="0"
              score2="3"
              team2="Juventus"
              img2="images/juventus.png"
            />
          </div>
          <div>
            <MatchCard
              league="Champions League"
              team1="Madrid"
              img1="images/madrid.png"
              score1="0"
              score2="3"
              team2="Juventus"
              img2="images/juventus.png"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
