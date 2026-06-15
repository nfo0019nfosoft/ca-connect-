import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaBars,
  FaTachometerAlt,
  FaUser,
  FaClipboardList,
  FaCalendarAlt,
  FaCreditCard,
  FaCog,
  FaHeadset,
  FaSignOutAlt,
  FaCrown,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <>
      <button
        className="mobile-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FaBars />
      </button>

      <aside
        className={
          menuOpen
            ? "sidebar active"
            : "sidebar"
        }
      >
        {/* Logo */}
      <div className="sidebar-logo">
  <img
    src={logo}
    alt="CA Connect"
    className="sidebar-logo-img"
  />
</div>

        {/* Menu */}
        <ul className="sidebar-menu">

          <li>
            <Link to="/dashboard">
              <FaTachometerAlt />
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/vendor-profile"
              className="active"
            >
              <FaUser />
             Vendor Profile
            </Link>
          </li>

          <li>
            <Link to="/leads">
              <FaClipboardList />
              My Leads
            </Link>
          </li>

          <li>
            <Link to="/appointments">
              <FaCalendarAlt />
              Appointments
            </Link>
          </li>

          <li>
            <Link to="/subscription">
              <FaCreditCard />
              Subscription
            </Link>
          </li>

          <li>
            <Link to="/settings">
              <FaCog />
              Settings
            </Link>
          </li>

          <li>
            <Link to="/support">
              <FaHeadset />
              Help & Support
            </Link>
          </li>

        </ul>

        {/* Upgrade Card */}
        <div className="upgrade-card">
          <FaCrown className="crown-icon" />

          <h4>Upgrade Your Plan</h4>

          <p>
            Unlock more features and
            grow your business.
          </p>

          <Link
            to="/subscription"
            className="upgrade-btn"
          >
            Upgrade Now
          </Link>
        </div>

        {/* Logout */}
        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          <FaSignOutAlt />
          Logout
        </button>
      </aside>
    </>
  );
}

export default Sidebar;