import {
  faFacebook,
  faGoogle,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";
import logo from "../../accets/logo/logo.png";

const Footer = () => {
  return (
    <div className="footer_parent_div">
      <div className="footer_child_div">
        <div>
          <div className="footer_logo_div">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum
              purus non graviduis congue arcu. Cras tincidunt voluLorem ipsum
              dolor sit amet, consectetur adipisnon graviduis cotempor.Donec
              dictum purus non graviduis congue arcu. Cras tincidunt volutpat
              magna ut tempor.
            </p>
          </div>

          {/*  */}

          <div className="footer_location_grid_div">
            <div className="footer_icon_flex_div">
              <FontAwesomeIcon className="faLocation" icon={faLocationDot} />
              <div>
                <p>Orthopaedic Clinic,</p>
                <p> Zeppelinstr 53 3970 SYDNEY </p>
                <p>NSW</p>
              </div>
            </div>
            <div className="footer_icon_flex_div">
              <FontAwesomeIcon className="faLocation" icon={faLocationDot} />
              <div>
                <p>Orthopaedic Clinic,</p>
                <p> Zeppelinstr 53 3970 SYDNEY </p>
                <p>NSW</p>
              </div>
            </div>
            <div className="footer_icon_flex_div">
              <FontAwesomeIcon className="faLocation" icon={faLocationDot} />
              <div>
                <p>Orthopaedic Clinic,</p>
                <p> Zeppelinstr 53 3970 SYDNEY </p>
                <p>NSW</p>
              </div>
            </div>
            <div className="_media_div">
              <FontAwesomeIcon
                className="footer_media_icon"
                icon={faFacebook}
              />
              <FontAwesomeIcon className="footer_media_icon" icon={faTwitter} />
              <FontAwesomeIcon className="footer_media_icon" icon={faGoogle} />
              <FontAwesomeIcon
                className="footer_media_icon"
                icon={faLinkedin}
              />
              <FontAwesomeIcon className="footer_media_icon" icon={faYoutube} />
            </div>
          </div>
        </div>
        <div className="footer_blank_div"></div>
        <div className="footer_down_site">
          <div>
            <h2>Lorem, ipsum.</h2>
            <p>Who we are</p>
            <p>Patient Story</p>
            <p>FAQ</p>
            <p>Blog</p>
            <p>Appointments</p>
          </div>
          <div>
            <h2>Lorem, ipsum.</h2>
            <p>Who we are</p>
            <p>Patient Story</p>
            <p>FAQ</p>
            <p>Blog</p>
            <p>Appointments</p>
          </div>
          <div>
            <h2>Subscribe the newsletter</h2>
            <p>
              Subscribe to our newsletter and stay updated on the latest news.
              We will keep you informed about special offers.
            </p>
            <div class="subscribe-container">
              <input
                type="email"
                placeholder="Write Email Address"
                class="subscribe-input"
              />
              <button class="subscribe-button">SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <small className="small">
          2017-2018 © Orthopaedic Surgery & Sports
        </small>
      </div>
    </div>
  );
};

export default Footer;
