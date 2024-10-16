import React from "react";
import "./DrProfile.css";
import drPrifilePhoto from "../../accets/drPrifilePhoto/drPrifilePhoto.jpg";
const DrProfile = () => {
  return (
    <div className="dr_profile_parent_div">
      <div className="dr_prifile_grid_div">
        <div>
          <img src={drPrifilePhoto} alt="" />
        </div>

        <div className="dr_profile_name_div">
          <h1>Martine K. Slippon, MD.</h1>
          <h3>
            Dr. Martine K. Philippon is a partner at Orthopedic Clinic one of
            the world's leading orthopaedic surgeons.
          </h3>
          <p>
            He has treated close to 500 Professional and Olympic athletes
            successfully. Dr.Martine is a Master Instructor with the Arthroscopy
            Associationof Australia.
          </p>
          <button>VIEW PROFILE</button>
        </div>

        <div className="dr_prifile_achivment_div">
          <div>
            <img src="" alt="" />
            <div>
              <h3 className="ACHIVMENT">ACHIVMENT</h3>
              <p>Treated 500 Professional & Olympic althletes successfully</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <h3 className="ACHIVMENT">ACHIVMENT</h3>
              <p>Treated 500 Professional & Olympic althletes successfully</p>
            </div>
          </div>
          <div>
            <img src="" alt="" />
            <div>
              <h3 className="ACHIVMENT">ACHIVMENT</h3>
              <p>Treated 500 Professional & Olympic althletes successfully</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrProfile;
