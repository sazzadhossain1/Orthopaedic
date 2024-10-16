import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import NavigationBar from "../NavigationBar/NavigationBar";
import OrthopaedicTreatment from "../OrthopaedicTreatment/OrthopaedicTreatment";

const Home = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel></Carousel>
      <OrthopaedicTreatment></OrthopaedicTreatment>
    </div>
  );
};

export default Home;
