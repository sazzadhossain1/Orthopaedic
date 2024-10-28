import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import OrthopaedicTreatment from "../OrthopaedicTreatment/OrthopaedicTreatment";
import DrProfile from "../DrProfile/DrProfile";
import PatientsJourney from "../PatientsJourney/PatientsJourney";
import PatientsSay from "../PatientsSay/PatientsSay";
import Location from "../Location/Location";

const Home = () => {
  return (
    <div className="" id="home_parent">
      <div className="carousel-wrapper">
        <Carousel></Carousel>
        <OrthopaedicTreatment></OrthopaedicTreatment>
        <DrProfile></DrProfile>
        <PatientsJourney></PatientsJourney>
        <PatientsSay></PatientsSay>
        <Location></Location>
      </div>
    </div>
  );
};

export default Home;
