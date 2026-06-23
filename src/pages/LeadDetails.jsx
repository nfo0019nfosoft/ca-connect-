import { useEffect, useState } from "react";
import axios from "axios";
import "./VendorLeads.css";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaBell,
  FaEye,
  FaUserCircle,
  FaRegCommentDots,
  FaFilter,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClipboardList,
  FaStickyNote,
  FaCalendarAlt,
  FaFileAlt,
  FaHistory,
  FaBuilding,
  FaClock,
  FaIdCard,
  FaWallet,
  FaUpload,
  FaSave,
  FaArrowLeft,
  FaCheck,
  

} from "react-icons/fa";

const LeadDetails = () => {

const navigate = useNavigate();
 const { id } = useParams();

const [lead, setLead] = useState(null);
const [vendor, setVendor] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {

  fetchLead();
  fetchVendor();

}, []);






const fetchLead = async () => {

  try {

    const res = await axios.get(
      `https://ca-backend-d9tc.onrender.com/api/enquiries/${id}`
    );

    setLead(res.data);

  } catch (err) {

    console.log(err);

  } finally {

    setLoading(false);

  }

};

const fetchVendor = async () => {

  try {

    const vendorId =
      localStorage.getItem("vendorId");

    const res = await axios.get(
      `https://ca-backend-d9tc.onrender.com/api/vendor/${vendorId}`
    );

    setVendor(res.data.vendor);

  } catch (err) {

    console.log(err);

  }

};

if (loading) {

  return (
    <div className="loading">
      Loading...
    </div>
  );

}

if (!lead) {

  return (
    <div className="loading">
      No Lead Found
    </div>
  );

}
  return (

    <div className="vendor-layout">

      <Sidebar />

      <div className="myleads-container">

        {/* Header */}
<div className="leads-topbar">

  <div className="leads-topbar-left">

    <h1>My Leads</h1>

    <div className="breadcrumb">

      <span>Home</span>

      <span>›</span>

      <span>My Leads</span>

       <span>›</span>

        <span>Lead Details</span>

    </div>

  </div>

  <div className="leads-topbar-right">

    <div className="lead-search-box">

      <FaSearch />

      <input
        type="text"
        placeholder="Search leads..."
      />

      <span className="shortcut-key">
        Ctrl + K
      </span>

    </div>

    <button className="message-btn">

      <FaRegCommentDots />

    </button>

    <button className="notification-btn">

      <FaBell />

    

    </button>

    <div className="vendor-header-profile">

    <img
  src={
    vendor?.photo
      ? `https://ca-backend-d9tc.onrender.com/uploads/${vendor.photo}`
      : "/avatar.png"
  }
  alt=""
/>

      <div>

        <h4>
          {vendor?.fullName}
        </h4>

        <p>
          {vendor?.firmName}
        </p>

      </div>

    </div>

  </div>

</div>
<div className="lead-header-actions">

  <button
    className="back-btn"
    onClick={() => navigate("/vendor-leads")}
  >
    <FaArrowLeft />
    Back to Leads
  </button>

  <button className="convert-btn">
    <FaCheck />
    Mark as Converted
  </button>

  <button className="schedule-btn">
    <FaCalendarAlt />
    Schedule Appointment
  </button>

</div>
        {/* Tabs */}
        <div className="lead-main-content">



<div className="lead-details-page">

  {/* Top Card */}

  <div className="lead-profile-card">

    <div className="lead-profile-left">

      <div className="lead-avatar-circle">
        {lead.fullName?.charAt(0)}
      </div>

      <div>

        <h2>{lead.fullName}</h2>

        <p className="lead-date">
          New Lead • Received on
          {new Date(
            lead.createdAt
          ).toLocaleString()}
        </p>

        <div className="lead-contact-row">

          <span>
            <FaEnvelope />
            {lead.email}
          </span>

          <span>
            <FaPhoneAlt />
            {lead.mobile}
          </span>

        <span>
  <FaMapMarkerAlt />
  {lead.city}, {lead.state}
</span>

        </div>

      </div>

    </div>

    <div className="lead-profile-right">

      <div>

        <small>Budget</small>

        <h4>
          ₹{lead.budgetMin}
          {" - "}
          ₹{lead.budgetMax}
        </h4>

      </div>

      <div>

        <small>Timeline</small>

        <h4>
          {lead.timeline}
        </h4>

      </div>

    </div>

  </div>

  {/* Tabs */}

  <div className="lead-tabs">

    <button className="active">
      <FaClipboardList />
      Overview
    </button>

    <button>
      <FaClipboardList />
      Requirements
    </button>

    <button>
      <FaRegCommentDots />
      Messages
    </button>

    <button>
      <FaStickyNote />
      Notes
    </button>

    <button>
      <FaCalendarAlt />
      Appointments
    </button>

    <button>
      <FaFileAlt />
      Documents
    </button>

    <button>
      <FaHistory />
      Activity Log
    </button>

  </div>

  {/* Lead Information */}

  <div className="lead-info-card">

    <h3>
      Lead Information
    </h3>

    <div className="lead-info-grid">

      <div>

        <small>
          Service Required
        </small>

        <h4>
          {Array.isArray(
            lead.serviceName
          )
            ? lead.serviceName.join(", ")
            : lead.serviceName}
        </h4>

      </div>

      <div>

        <small>
          <FaClock />
          Preferred Contact Time
        </small>

        <h4>
          {lead.preferredTime}
        </h4>

      </div>

      <div>

        <small>
          <FaIdCard />
          PAN
        </small>

        <h4>
          {lead.panNumber}
        </h4>

      </div>

      <div>

        <small>
          Preferred Mode Of Communication
        </small>

        <h4>
          {lead.preferredContact}
        </h4>

      </div>

      <div>

        <small>
          <FaBuilding />
          Company / Business Name
        </small>

        <h4>
          {lead.businessType}
        </h4>

      </div>

      <div>

        <small>
          GST Required
        </small>

        <h4>
          Yes
        </h4>

      </div>

      <div>

        <small>
          <FaWallet />
          Annual Turnover
        </small>

        <h4>
          {lead.annualTurnover}
        </h4>

      </div>

      <div>

        <small>
          Additional Requirements
        </small>

        <h4>
          {lead.requirements}
        </h4>

      </div>

    </div>

  </div>

  {/* Notes */}

  <div className="notes-card">

    <h3>
      Lead Notes (Internal)
    </h3>

    <textarea
      placeholder="Add your notes about this lead..."
    />

    <button className="save-note-btn">

      <FaSave />

      Save Note

    </button>

  </div>

  {/* Attachments */}

  <div className="attachment-card">

    <h3>
      Attachments (0)
    </h3>

    <div className="attachment-box">

      <div>

        <FaFileAlt />

        <p>
          No documents uploaded yet
        </p>

        <small>
          Upload documents shared by the lead
        </small>

      </div>

      <button className="upload-btn">

        <FaUpload />

        Upload Document

      </button>

    </div>

  </div>



  

</div>
        {/* Content */}
<div className="lead-sidebar">

  {/* Lead Status */}
  <div className="sidebar-card">

    <h3>Lead Status</h3>

    <select className="status-select">
      <option>{lead.status || "New"}</option>
      <option>In Progress</option>
      <option>Converted</option>
      <option>Closed</option>
    </select>

    <p className="status-text">
      Update the status of this lead as you move forward.
    </p>

    <div className="status-list">

      <div className="status-item">
        <span className="dot blue"></span>
        <div>
          <h5>New</h5>
          <small>Just received</small>
        </div>
      </div>

      <div className="status-item">
        <span className="dot blue"></span>
        <div>
          <h5>In Progress</h5>
          <small>Contacted the lead</small>
        </div>
      </div>

      <div className="status-item">
        <span className="dot green"></span>
        <div>
          <h5>Converted</h5>
          <small>Lead converted to client</small>
        </div>
      </div>

      <div className="status-item">
        <span className="dot red"></span>
        <div>
          <h5>Closed</h5>
          <small>Not interested / Lost</small>
        </div>
      </div>

    </div>

  </div>

  {/* Lead Activity */}
  <div className="sidebar-card">

    <h3>Lead Activity</h3>

    <div className="activity-item">
      <FaEnvelope />
      <div>
        <h5>Lead received</h5>
        <small>
          {new Date(lead.createdAt).toLocaleString()}
        </small>
      </div>
    </div>

    <div className="activity-item">
      <FaEye />
      <div>
        <h5>Lead viewed your profile</h5>
        <small>
          {new Date(lead.createdAt).toLocaleString()}
        </small>
      </div>
    </div>

    <div className="activity-item">
      <FaEnvelope />
      <div>
        <h5>Email opened</h5>
        <small>
          {new Date(lead.createdAt).toLocaleString()}
        </small>
      </div>
    </div>

    <div className="activity-item">
      <FaRegCommentDots />
      <div>
        <h5>Message sent to lead</h5>
        <small>
          {new Date(lead.createdAt).toLocaleString()}
        </small>
      </div>
    </div>

  </div>

  {/* Quick Actions */}
  <div className="sidebar-card">

    <h3>Quick Actions</h3>

    <button className="quick-btn">
      <FaRegCommentDots />
      Send Message
    </button>

    <button className="quick-btn">
      <FaStickyNote />
      Add Note
    </button>

    <button className="quick-btn">
      <FaUpload />
      Upload Document
    </button>

  </div>

  {/* Need Help */}
  <div className="sidebar-card">

    <div className="help-icon">
      ?
    </div>

    <h4>Need Help?</h4>

    <p>
      If you have any questions or need assistance,
      we're here to help.
    </p>

    <a href="Support">
      Contact Support
    </a>

  </div>

</div>
       

      </div>

    </div>
    </div>

  );

};

export default LeadDetails;