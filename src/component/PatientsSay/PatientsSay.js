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
          <div className="patients_say_cart_text_div">
            <FontAwesomeIcon className="faComment" icon={faComment} />
            <p className="p">
              I am so very thankful to have found Dr. Martine to have a total
              hip replacement at 40 was difficult to understand and digest. But
              Staff did a wonderful job helping me understand my treatment.
            </p>

            <span className="charist">Charish Baill, AUSTRALIA</span>
            <p className="dr_">Dr Martine K. Slippon</p>
          </div>
        </div>
        <div className="patients_say_cart_div_second">
          <h3>Patients Educations Videos</h3>
          <div className="patients_say_cart_text_div">
            <p className="our_orthopadic">
              Our Orthopadic surgon provides educations video to new patient for
              Acknowledgement & Awarness.
            </p>
            <div>
              <div className="video_img">
                <img className="videoImg" src={videoImg} alt="" />
              </div>
              <div className="watch_flex_parent_div">
                <div className="watch_flex_div">
                  <span className="watch_video">WATCH VIDEO</span>
                  <span>
                    <img className="playSay" src={playSay} alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientsSay;
