import React from "react";
import "./PatientsJourney.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";

const PatientsJourney = () => {
  return (
    <div className="patients_journey_parent_div">
      <div className="orthopaedic_text_div">
        <h2>Orthopaedic Patients Journey</h2>
        <p>
          Latest medical technology with the state of art medical facility to
          provide his patients the best possible outcome.
        </p>
      </div>
      <div className="patients_journey_grid_div">
        <div className="patients_journey_cart_div">
          <div>
            <FontAwesomeIcon className="faStethoscope" icon={faStethoscope} />

            <h3>CONSULTATION</h3>
            <p>Medical History</p>
            <p>Physical Examination</p>
            <p>X-rays</p>
            <p> Other Tests</p>
          </div>
          <div>
            <p className="patients_number">
              <span>1</span>
            </p>
          </div>
        </div>
        <div className="patients_journey_cart_div">
          <div>
            <FontAwesomeIcon className="faStethoscope" icon={faStethoscope} />

            <h3>CONSULTATION</h3>
            <p>Medical History</p>
            <p>Physical Examination</p>
            <p>X-rays</p>
            <p> Other Tests</p>
          </div>
          <div>
            <p className="patients_number">
              <span>2</span>
            </p>
          </div>
        </div>
        <div className="patients_journey_cart_div">
          <div>
            <FontAwesomeIcon className="faStethoscope" icon={faStethoscope} />

            <h3>CONSULTATION</h3>
            <p>Medical History</p>
            <p>Physical Examination</p>
            <p>X-rays</p>
            <p> Other Tests</p>
          </div>
          <div>
            <p className="patients_number">
              <span>3</span>
            </p>
          </div>
        </div>
        <div className="patients_journey_cart_div">
          <div>
            <FontAwesomeIcon className="faStethoscope" icon={faStethoscope} />

            <h3>CONSULTATION</h3>
            <p>Medical History</p>
            <p>Physical Examination</p>
            <p>X-rays</p>
            <p> Other Tests</p>
          </div>
          <div>
            <p className="patients_number">
              <span>4</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsJourney;
