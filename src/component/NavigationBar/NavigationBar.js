import {
  faAngleDown,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";

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
            <button className="appointment-btn">Make an Appointment</button>
          </div>
        </div>
        {/* Logo and navigation */}

        <nav className="navbar">
          <div className="logo">Logo</div>
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
    </div>
  );
};

export default NavigationBar;
