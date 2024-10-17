import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import NavigationBar from "../NavigationBar/NavigationBar";
import OrthopaedicTreatment from "../OrthopaedicTreatment/OrthopaedicTreatment";
import DrProfile from "../DrProfile/DrProfile";
import PatientsJourney from "../PatientsJourney/PatientsJourney";

const Home = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel></Carousel>
      <OrthopaedicTreatment></OrthopaedicTreatment>
      <DrProfile></DrProfile>
      <PatientsJourney></PatientsJourney>
    </div>
  );
};

export default Home;
