import {
  faAngleDown,
  faBars,
  faTimes,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import logoTwo from "../../accets/logo/logoTwo.jpg";
import logoThree from "../../accets/logo/logoThree.png";
import logoFour from "../../accets/logo/logoFour.jpg";
import logoFive from "../../accets/logo/logoFive.png";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const appointmentBtn = () => {
    const makeAnAppointmentsDiv = document.getElementById(
      "makeAnAppointments_div"
    );
    const getHomeParent = document.getElementById("home_parent");

    makeAnAppointmentsDiv.removeAttribute("hidden", "hidden");
    getHomeParent.className = "overlay";
  };

  const closeModal = () => {
    const makeAnAppointmentsDiv = document.getElementById(
      "makeAnAppointments_div"
    );

    const getHomeParent = document.getElementById("home_parent");

    makeAnAppointmentsDiv.setAttribute("hidden", "hidden");
    getHomeParent.className = "";
  };
  return (
    <div className="nav_parent_div">
      <header className={`nav_header ${isScrolled ? "scrolled" : ""}`}>
        {/* Upper section with clinic text, phone number, and button */}
        <div className="top-bar">
          <div className="clinic-info">
            <span className="nav_welcome">
              Welcome to Our Orthopaedic Clinic Center
            </span>
          </div>
          <div className="contact-info">
            <span className="nav_pnone_number">880174 983 3863</span>
            <button className="appointment-btn" onClick={appointmentBtn}>
              Make an Appointment
            </button>
          </div>
        </div>
        {/* Logo and navigation */}

        <nav className="navbar">
          <div className="logo">
            <img className="logo_two" src={logoTwo} alt="" />
          </div>
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <Link href="#home">HOME</Link>
              </li>
              <li>
                <Link href="#about">ABOUT US</Link>
              </li>

              <li className="dropdown">
                <Link href="#services" className="special">
                  <span>SPECIALTIES</span>
                  <FontAwesomeIcon className="faArrowDown" icon={faAngleDown} />
                </Link>

                <ul className="dropdown-menu">
                  <li>
                    <Link href="#service1">Spine</Link>
                  </li>
                  <li>
                    <Link href="#service2"> Foot & Ankle</Link>
                  </li>
                  <li>
                    <Link href="#service3">Shoulder & Elbow</Link>
                  </li>
                  <li>
                    <Link href="#service3">Hip & knee</Link>
                  </li>
                  <li>
                    <Link href="#service3">Hand & Wrist</Link>
                  </li>
                  <li>
                    <Link href="#service3"> Pain Management</Link>
                  </li>
                  <li>
                    <Link href="#service3">Occupational Medicine</Link>
                  </li>
                  <li>
                    <Link href="#service3">Sports Medicine</Link>
                  </li>
                  <li>
                    <Link href="#service3"> Rheumatology</Link>
                  </li>
                  <li>
                    <Link href="#service3"> Physican Therapy</Link>
                  </li>
                  <li>
                    <Link href="#service3">Occupational Hand Therapy</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="#portfolio">LOCATION</Link>
              </li>
              <li>
                <Link href="#contact">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {!isMenuOpen ? (
              <FontAwesomeIcon icon={faBars} className="hamburger" />
            ) : (
              <FontAwesomeIcon icon={faTimes} className="close-icon" />
            )}
          </div>
        </nav>
      </header>

      <div>
        <div
          className="makeAnAppointments_div"
          id="makeAnAppointments_div"
          hidden
        >
          <div className="make_location_input_div">
            <FontAwesomeIcon
              className="faXmark"
              icon={faXmark}
              onClick={closeModal}
            />
            <h2>Make An Appointments</h2>
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

export default NavigationBar;
