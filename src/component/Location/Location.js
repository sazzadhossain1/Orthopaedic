import React from "react";
import "./Location.css";
import map from "../../accets/map/map.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <div cla>
      <div className="location_parent_div">
        <div className="location_img_div">
          <h2>Locations & Directions</h2>
          <img className="map_img" src={map} alt="" />
        </div>

        {/*  */}
        <div className="patients_resources_div">
          <h2>Patient Resources</h2>
          <div className="location_icon_div">
            <FontAwesomeIcon className="faBook" icon={faBook} />
            <p>PATIENT'S FORM</p>
          </div>
          <div className="location_icon_div margit_top">
            <FontAwesomeIcon className="faBook" icon={faBook} />
            <p>YOUR FIRST VISIT</p>
          </div>
          <div className="location_icon_div margit_top">
            <FontAwesomeIcon className="faBook" icon={faBook} />
            <p>INSTRUCTION AAFTER OP</p>
          </div>
          <div className="location_icon_div margit_top">
            <FontAwesomeIcon className="faBook" icon={faBook} />
            <p>PATIENT'S EDUCATIONS</p>
          </div>
        </div>
        {/*  */}

        <div className="BookAnAppointments_div">
          <h2>Book An Appointments</h2>
          <div className="location_input_div">
            <input type="text" placeholder="Namer" /> <br />
            <input type="email" name="" id="" placeholder="Email" />
            <br />
            <input type="number" name="" id="" placeholder="Phone" />
            <br />
            <select name="" id="">
              <option value="">Hip Surgery</option>
            </select>
            <br />
            <input type="date" name="" id="" placeholder="Date" />
            <button className="confirm">
              <Link> CONFIRM MY APPOINTMENT</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
