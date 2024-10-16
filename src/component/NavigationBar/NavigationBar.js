import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import "./NavigationBar.css";

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
            <span className="nav_pnone_number">1-800-1234-567</span>
            <button className="appointment-btn">Make an Appointment</button>
          </div>
        </div>
        {/* Logo and navigation */}
        <nav className="navbar">
          <div className="logo">Logo</div>
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>
          {/* Menu Icon */}
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
