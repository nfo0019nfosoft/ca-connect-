import "./Navbar.css";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaCalendarAlt,
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

        {/* Logo */}
        <a href="/" className="logo">
          <img src={logo} alt="CA Connect" />
        </a>

        {/* Navigation */}
        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>
            <a
              href="/"
              className="active-link"
              onClick={closeMenu}
            >
              Home
            </a>
          </li>

          <li>
            <a href="/" onClick={closeMenu}>
              Find CA
            </a>
          </li>

          {/* Services Dropdown */}
          <li className={serviceOpen ? "dropdown active" : "dropdown"}>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setServiceOpen(!serviceOpen);
              }}
            >
              Services
              <FaChevronDown className="down-icon" />
            </a>

            <ul className="dropdown-menu">

              <li>
                <a href="/" onClick={closeMenu}>
                  GST Filing
                </a>
              </li>

              <li>
                <a href="/" onClick={closeMenu}>
                  Income Tax
                </a>
              </li>

              <li>
                <a href="/" onClick={closeMenu}>
                  Company Registration
                </a>
              </li>

            </ul>

          </li>

          <li>
            <a href="/" onClick={closeMenu}>
              AI Assistant
            </a>
          </li>

          <li>
            <a href="/" onClick={closeMenu}>
              Blogs
            </a>
          </li>

          <li>
            <a href="/" onClick={closeMenu}>
              About Us
            </a>
          </li>

          <li>
            <a href="/" onClick={closeMenu}>
              Contact Us
            </a>
          </li>

          {/* Mobile Buttons */}
          <li className="mobile-buttons">

            <a
              href="/"
              className="consult-btn"
              onClick={closeMenu}
            >
              <FaCalendarAlt />
              Book Consultation
            </a>

          <Link
  to="/login"
  className="login-btn"
  onClick={closeMenu}
>
  Login / Register
</Link>

          </li>

        </ul>

        {/* Desktop Buttons */}
        <div className="nav-actions">

          <a href="/" className="consult-btn">
            <FaCalendarAlt />
            Book Consultation
          </a>

          <a href="/" className="login-btn">
            Login / Register
          </a>

        </div>

        {/* Mobile Hamburger */}
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