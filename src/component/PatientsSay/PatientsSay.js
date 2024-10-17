import React from "react";
import "./PatientsSay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import videoImg from "../../accets/patientsSay/video-img.jpg";
import playSay from "../../accets/patientsSay/play-sign.png";

const PatientsSay = () => {
  return (
    <div className="patients_say_parent_div">
      <div className="patients_say_grid_div">
        <div className="patients_say_cart_div_first">
          <h3>Patients, What say about us</h3>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <p>
              I am so very thankful to have found Dr. Martine to have a total
              hip replacement at 40 was difficult to understand and digest. But
              Staff did a wonderful job helping me understand my treatment.
            </p>

            <span>Charish Baill,</span>
            <p>Dr Martine K. Slippon</p>
          </div>
        </div>
        <div className="patients_say_cart_div_second">
          <h3>Patients Educations Videos</h3>
          <div>
            <p>
              Our Orthopadic surgon provides educations video to new patient for
              Acknowledgement & Awarness.
            </p>
            <div>
              <div>
                <img src={videoImg} alt="" />
              </div>
              <p>
                <span>WATCH VIDEO</span>
                <span>
                  <img src={playSay} alt="" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsSay;
