import React, { useEffect, useState } from "react";
import UserSidebar from "../components/UserSidebar";
import axios from "axios";
import { Link ,useNavigate } from "react-router-dom";
import {
  FaSearch,
  FaBell,
  FaRegCommentDots,
  FaClipboardList,
  FaRegClock,
  FaHourglassHalf,
  FaCheckCircle,
  FaPlus
} from "react-icons/fa";
import "./UserEnquiry.css";

function UserEnquiry() {

  const navigate = useNavigate();

  // ================= User =================
  const [user, setUser] = useState({});

  // ================= Enquiries =================
  const [enquiries, setEnquiries] = useState([]);

  // ================= Active Tab =================
  const [activeTab, setActiveTab] = useState("all");

  // ================= Stats =================
  const [stats, setStats] = useState({
    all: 0,
    active: 0,
    pending: 0,
    closed: 0,
  });

  useEffect(() => {
    fetchUser();
    fetchEnquiries();
  }, []);

  // ================= User Profile =================
  const fetchUser = async () => {
    try {

      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data.user);

    } catch (err) {
      console.log(err);
    }
  };

  // ================= Enquiries =================
 const fetchEnquiries = async () => {
  try {

    const storedUser = JSON.parse(
      localStorage.getItem("user")
    );

    if (!storedUser?._id) return;

    const token = localStorage.getItem("token");

    const res = await axios.get(
      `http://localhost:5000/api/enquiries/user/${storedUser._id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = res.data.enquiries || [];

    setEnquiries(data);

    setStats({
      all: data.length,

      active: data.filter(
        item =>
          item.status === "contacted" ||
          item.status === "qualified"
      ).length,

      pending: data.filter(
        item =>
          item.status === "new"
      ).length,

      closed: data.filter(
        item =>
          item.status === "converted" ||
          item.status === "lost"
      ).length,
    });

  } catch (err) {

    console.log(err);

  }
};
  // ================= Filter =================
 const filteredEnquiries =
  activeTab === "all"
    ? enquiries
    : activeTab === "active"
    ? enquiries.filter(
        item =>
          item.status === "contacted" ||
          item.status === "qualified"
      )
    : activeTab === "pending"
    ? enquiries.filter(
        item =>
          item.status === "new"
      )
    : enquiries.filter(
        item =>
          item.status === "converted" ||
          item.status === "lost"
      );

  return (

    <>
   <UserSidebar />
      <div className="userenquiry-header">

        <div className="userenquiry-left">

          <h1>My Enquiries</h1>

          <p>
            Manage and track all your enquiries in one place
          </p>

        </div>

        <div className="userenquiry-right">

          <div className="userenquiry-search">

            <FaSearch className="userenquiry-search-icon"/>

            <input
              type="text"
              placeholder="Search anything..."
            />

            <span>Ctrl + K</span>

          </div>

          <button className="userenquiry-icon">

            <FaRegCommentDots />

          </button>

          <button className="userenquiry-icon notification">

            <FaBell />

           

          </button>

          <div className="userenquiry-user">

            <img
              src={
                user.profileImage
                  ? `http://localhost:5000${user.profileImage}`
                  : "/avatar.png"
              }
              alt=""
            />

            <div>

              <h4>{user.name}</h4>

              <p>Business User</p>

            </div>

          </div>

        </div>

      </div>







<div className="userenquiry-tabs-wrapper">

  <div className="userenquiry-tabs">

    <button
      type="button"
      className={`userenquiry-tab ${activeTab === "all" ? "active" : ""}`}
      onClick={() => setActiveTab("all")}
    >
      <FaClipboardList className="userenquiry-tab-icon" />

      <span className="userenquiry-tab-text">
        All Enquiries
      </span>

      <span className="userenquiry-count">
        {stats.all}
      </span>
    </button>

    <button
      type="button"
      className={`userenquiry-tab ${activeTab === "active" ? "active" : ""}`}
      onClick={() => setActiveTab("active")}
    >
      <FaRegClock className="userenquiry-tab-icon" />

      <span className="userenquiry-tab-text">
        Active Enquiries
      </span>

      <span className="userenquiry-count">
        {stats.active}
      </span>
    </button>

    <button
      type="button"
      className={`userenquiry-tab ${activeTab === "pending" ? "active" : ""}`}
      onClick={() => setActiveTab("pending")}
    >
      <FaHourglassHalf className="userenquiry-tab-icon" />

      <span className="userenquiry-tab-text">
        Pending Responses
      </span>

      <span className="userenquiry-count">
        {stats.pending}
      </span>
    </button>

    <button
      type="button"
      className={`userenquiry-tab ${activeTab === "closed" ? "active" : ""}`}
      onClick={() => setActiveTab("closed")}
    >
      <FaCheckCircle className="userenquiry-tab-icon" />

      <span className="userenquiry-tab-text">
        Closed Enquiries
      </span>

      <span className="userenquiry-count">
        {stats.closed}
      </span>
    </button>

  </div>

  <button
    type="button"
    className="userenquiry-new-btn"
    onClick={() => navigate("/new-enquiry")}
  >
    <FaPlus />
    <span>New Enquiry</span>
  </button>

</div>




<div className="userenquiry-container">

  {/* LEFT SIDE */}
  <div className="userenquiry-left">

    {/* Filters */}
    <div className="userenquiry-filters">

      <div className="filter-group">
        <label>Search Enquiries</label>
        <input
          type="text"
          placeholder="Search by subject, service or ID..."
        />
      </div>

      <div className="filter-group">
        <label>Service Category</label>
        <select>
          <option>All Categories</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Status</label>
        <select>
          <option>All Status</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Date Range</label>
        <input type="date" />
      </div>

      <button className="filter-btn">
        Filters
      </button>

    </div>

    {/* Table */}
    <div className="userenquiry-table-card">

      <table className="userenquiry-table">

        <thead>
          <tr>
            <th>Enquiry ID</th>
            <th>Subject</th>
            <th>Service Category</th>
            <th>Status</th>
            <th>Last Response</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {filteredEnquiries.map((item) => (

            <tr key={item._id}>

              <td>#{item._id.slice(-8)}</td>

              <td>
                <strong>{item.requirements}</strong>
              </td>

              <td>
                {item.serviceName?.join(", ")}
              </td>

              <td>
                {item.status}
              </td>

              <td>
                {item.vendorId?.fullName}
              </td>

              <td>
                {new Date(
                  item.createdAt
                ).toLocaleDateString()}
              </td>

              <td>
                View
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

  {/* RIGHT SIDE */}
  <div className="userenquiry-rightpanel">

    {/* Overview */}
    <div className="overview-card">

      <h3>Enquiries Overview</h3>

      <div className="overview-grid">

        <div className="overview-box">
          <h2>{stats.all}</h2>
          <p>Total Enquiries</p>
        </div>

        <div className="overview-box">
          <h2>{stats.active}</h2>
          <p>Active Enquiries</p>
        </div>

        <div className="overview-box">
          <h2>{stats.pending}</h2>
          <p>Pending Responses</p>
        </div>

        <div className="overview-box">
          <h2>{stats.closed}</h2>
          <p>Closed Enquiries</p>
        </div>

      </div>

    </div>

    {/* Quick Actions */}
    <div className="quick-actions">

      <h3>Quick Actions</h3>

      <button>New Enquiry</button>
      <button>Check Enquiry Status</button>
      <button>Browse Services</button>
      <button>Schedule Appointment</button>

    </div>

    {/* Help */}
    <div className="help-card">

      <h3>Need Help?</h3>

      <p>
        Our support team is here to assist you.
      </p>

     
        <Link
       to="/support"
       className="usersavedca-help-btn"
     >
       Contact Support
     </Link>

    </div>

  </div>

</div>
















    </>

  );
}

export default UserEnquiry;