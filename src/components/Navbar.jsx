import "./Navbar.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setServiceOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <img src={logo} alt="CA Connect" />
        </Link>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/find-ca" onClick={closeMenu}>
              Find CA
            </Link>
          </li>

          <li className={serviceOpen ? "dropdown active" : "dropdown"}>

            <div className="service-nav">

              <Link to="/service" onClick={closeMenu}>
                Services
              </Link>

              <FaChevronDown
                className="down-icon"
                onClick={(e) => {
                  e.preventDefault();
                  setServiceOpen(!serviceOpen);
                }}
              />

            </div>

            <ul className="dropdown-menu">

              <li>
                <Link to="/gst-filing" onClick={closeMenu}>
                  GST Filing
                </Link>
              </li>

              <li>
                <Link to="/income-tax-filing" onClick={closeMenu}>
                  Income Tax Filing
                </Link>
              </li>

              <li>
                <Link to="/company-registration" onClick={closeMenu}>
                  Company Registration
                </Link>
              </li>

              <li>
                <Link to="/roc-filing" onClick={closeMenu}>
                  ROC Filing
                </Link>
              </li>

                <li>
                <Link to="/roc-filing" onClick={closeMenu}>
                  Audit & Assurance
                </Link>
              </li>

                <li>
                <Link to="/roc-filing" onClick={closeMenu}>
                  Bookkeping
                </Link>
              </li>

                <li>
                <Link to="/roc-filing" onClick={closeMenu}>
                 Payroll Services
                </Link>
              </li>

            </ul>

          </li>

          <li>
            <Link to="/ai-assistant" onClick={closeMenu}>
              AI Assistant
            </Link>
          </li>

          <li>
            <Link to="/blogs" onClick={closeMenu}>
              Blogs
            </Link>
          </li>

          <li>
            <Link to="/AboutUs" onClick={closeMenu}>
              About Us
            </Link>
          </li>

          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact Us
            </Link>
          </li>

          <li className="mobile-buttons">

            <Link
              to="/consultation"
              className="consult-btn"
              onClick={closeMenu}
            >
              <FaCalendarAlt />
              Book Consultation
            </Link>

            <Link
              to="/location"
              className="location-badge"
              onClick={closeMenu}
            >
              <FaMapMarkerAlt />
              Location
            </Link>

            <Link
              to="/login"
              className="login-btn"
              onClick={closeMenu}
            >
              Login / Register
            </Link>

          </li>

        </ul>

        <div className="nav-actions">

          <Link to="/consultation" className="consult-btn">
            <FaCalendarAlt />
            Book Consultation
          </Link>

          <Link to="/location" className="location-badge">
            <FaMapMarkerAlt />
            Location
          </Link>

          <Link to="/login" className="login-btn">
            Login / Register
          </Link>

        </div>

        <div
          className="hamburger"
          onClick={() => {
            setMenuOpen(!menuOpen);

            if (menuOpen) {
              setServiceOpen(false);
            }
          }}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;