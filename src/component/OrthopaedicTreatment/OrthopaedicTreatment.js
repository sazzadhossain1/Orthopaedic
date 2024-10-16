import React from "react";
import "./OrthopaedicTreatment.css";
import humanHip from "../../accets/humanHip/humanHip.png";
import { Link } from "react-router-dom";
const OrthopaedicTreatment = () => {
  return (
    <div className="orthopaedicTreatment_parent_div">
      <h1 className="orthopaedicTreatment_h1">
        A wide range of Orthopaedic Treatment
      </h1>
      <p className="orthopaedicTreatment_p">
        We are specializes in treatment of Hip, Knee, Shoulder and Regenerative
        Medicine. Latest medical technology with the state of art medical
        facility to provide his patients the best possible outcome.
      </p>

      <div className="orthopaedicTreatment_icon_grid_div">
        <div>
          <div className="orthopadic_icon_img_div">
            <img className="orthopaedicTreatment_icon" src={humanHip} alt="" />
          </div>
          <h4 className="orthopaedic_cart_title">Hip Surgery</h4>
        </div>
        <div>
          <div className="orthopadic_icon_img_div">
            <img className="orthopaedicTreatment_icon" src={humanHip} alt="" />
          </div>
          <h4 className="orthopaedic_cart_title">Hip Surgery</h4>
        </div>
        <div>
          <div className="orthopadic_icon_img_div">
            <img className="orthopaedicTreatment_icon" src={humanHip} alt="" />
          </div>
          <h4 className="orthopaedic_cart_title">Hip Surgery</h4>
        </div>
        <div>
          <div className="orthopadic_icon_img_div">
            <img className="orthopaedicTreatment_icon" src={humanHip} alt="" />
          </div>
          <h4 className="orthopaedic_cart_title">Hip Surgery</h4>
        </div>
        <div>
          <div className="orthopadic_icon_img_div">
            <img className="orthopaedicTreatment_icon" src={humanHip} alt="" />
          </div>
          <h4 className="orthopaedic_cart_title">Hip Surgery</h4>
        </div>
        <div>
          <div className="orthopadic_icon_img_div">
            <img className="orthopaedicTreatment_icon" src={humanHip} alt="" />
          </div>
          <h4 className="orthopaedic_cart_title">Hip Surgery</h4>
        </div>
      </div>
      <Link>
        <button className="orthopaedic_view_btn">VIEW SERVICES</button>
      </Link>
    </div>
  );
};

export default OrthopaedicTreatment;
