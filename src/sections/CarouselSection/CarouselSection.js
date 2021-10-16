import React from "react";
import SectionContent from "../../components/SectionContent/SectionContent";
import "./CarouselSection.css";

export default function CarouselSection() {
  return (
    <>
      <SectionContent
        classN="carousel-section-content"
        special="More about us"
        title="DAOBETs App Preview"
      />
      <div className="carousel-section">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              className="dark"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="images/league-screenshot.png"
                class="d-block w-100"
                alt="img"
              />
            </div>
            <div class="carousel-item">
              <img
                src="images/league-screenshot-2.png"
                class="d-block w-100"
                alt="img"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              style={{
                backgroundImage: "none",
              }}
              class="carousel-control-prev-icon"
              aria-hidden="true"
            >
              <i className="fas fa-arrow-circle-left"></i>
            </span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              style={{
                backgroundImage: "none",
              }}
              class="carousel-control-next-icon"
              aria-hidden="true"
            >
              <i className="fas fa-arrow-circle-right"></i>
            </span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
