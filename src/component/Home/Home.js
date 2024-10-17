import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import OrthopaedicTreatment from "../OrthopaedicTreatment/OrthopaedicTreatment";
import DrProfile from "../DrProfile/DrProfile";
import PatientsJourney from "../PatientsJourney/PatientsJourney";
import PatientsSay from "../PatientsSay/PatientsSay";

const Home = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel></Carousel>
      <OrthopaedicTreatment></OrthopaedicTreatment>
      <DrProfile></DrProfile>
      <PatientsJourney></PatientsJourney>
      <PatientsSay></PatientsSay>
    </div>
  );
};

export default Home;
