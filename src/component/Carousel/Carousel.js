import React, { useState } from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import slideOne from "../../accets/carouselPhoto/slider-1.jpg";
import slideTwo from "../../accets/carouselPhoto/slider-2.jpg";
import slideThree from "../../accets/carouselPhoto/slider-3.jpg";
import NavigationBar from "../NavigationBar/NavigationBar";

const Carousel = () => {
  // Photos array with images and associated text
  const photos = [
    {
      src: slideOne,
      text: "Photo 1 Description",
    },
    {
      src: slideTwo,
      text: "Photo 2 Description",
    },
    {
      src: slideThree,
      text: "Photo 3 Description",
    },
  ];

  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Handle right arrow click
  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle left arrow click
  const goToPrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <NavigationBar></NavigationBar>
      <div className="carousel-container">
        {/* Left Arrow Button */}
        <button className="arrow-button left" onClick={goToPrevPhoto}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Carousel Photo */}
        <div className="carousel-photo">
          <img src={photos[currentPhotoIndex].src} alt="carousel" />
          {/* <div className="carousel-text">{photos[currentPhotoIndex].text}</div> */}
        </div>

        {/* Right Arrow Button */}
        <button className="arrow-button right" onClick={goToNextPhoto}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
