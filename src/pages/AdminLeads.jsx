import { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminLeads.css";

import {
  FaUsers,
  FaUserPlus,
  FaUserCheck,
  FaCheckCircle,
  FaTimesCircle,
  FaChartLine,
  FaCalendarAlt,
  FaBell,
  FaPlus
} from "react-icons/fa";

function AdminLeads() {

  const [dashboard, setDashboard] = useState({});

  const [stats, setStats] = useState({
    totalLeads: 0,
    totalLeadsGrowth: 0,
    newLeads: 0,
    newLeadsGrowth: 0,
    assignedLeads: 0,
    assignedGrowth: 0,
    convertedLeads: 0,
    convertedGrowth: 0,
    lostLeads: 0,
    lostGrowth: 0,
    conversionRate: 0,
    rateGrowth: 0
  });

  const [startDate, setStartDate] = useState("2024-05-16");
  const [endDate, setEndDate] = useState("2024-05-22");

  useEffect(() => {

    fetchDashboard();

  }, [startDate, endDate]);


  const fetchDashboard = async () => {

    try {

      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/admin/lead-stats`,
        {
          params: {
            startDate,
            endDate
          }
        }
      );

      if (res.data.success) {

        setDashboard(res.data.dashboard);

        setStats(res.data.stats);

      }

    }

    catch (err) {

      console.log(err);

    }

  };


  const handleLogout = () => {

    localStorage.removeItem("token");

    window.location.href = "/admin-login";

  };


  return (

    <div className="admin-layout">

      <AdminSidebar />

      <div className="admin-main-content">

        <div className="admin-leads-page">


          {/* HEADER */}

          <div className="admin-leads-header">

            <div className="admin-leads-heading">

              <h1>
                Lead Management
              </h1>

              <p>
                Capture, track and convert leads across the platform.
              </p>

            </div>


            <div className="admin-leads-actions">


              <div className="admin-leads-date-picker">

                <FaCalendarAlt />

                <input
                  type="date"
                  value={startDate}
                  onChange={(e) =>
                    setStartDate(e.target.value)
                  }
                />

                <span>
                  -
                </span>

                <input
                  type="date"
                  value={endDate}
                  onChange={(e) =>
                    setEndDate(e.target.value)
                  }
                />

              </div>


              <button className="admin-leads-add-btn">

                <FaPlus />

                Add Lead

              </button>


              <div className="admin-leads-notification">

                <FaBell />

                <span>

                  {dashboard.notificationCount || 0}

                </span>

              </div>


              <div
                className="admin-leads-profile"
                onClick={handleLogout}
              >

                <img
                  src={
                    dashboard.adminPhoto ||
                    "/avatar.png"
                  }
                  alt=""
                />

                <div>

                  <h4>

                    {dashboard.adminName ||
                      "Super Admin"}

                  </h4>

                  <p>

                    {dashboard.adminRole ||
                      "Admin"}

                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* CARDS */}

          <div className="admin-leads-overview-cards">


            <div className="admin-leads-overview-card">

              <div className="admin-leads-card-icon leads-purple">
                <FaUsers />
              </div>

              <div>

                <h6>Total Leads</h6>

                <h2>
                  {stats.totalLeads}
                </h2>

                <p className="up-growth">
                  ↑ {stats.totalLeadsGrowth}% vs last week
                </p>

              </div>

            </div>


            <div className="admin-leads-overview-card">

              <div className="admin-leads-card-icon leads-green">
                <FaUserPlus />
              </div>

              <div>

                <h6>New Leads</h6>

                <h2>
                  {stats.newLeads}
                </h2>

                <p className="up-growth">
                  ↑ {stats.newLeadsGrowth}% vs last week
                </p>

              </div>

            </div>


            <div className="admin-leads-overview-card">

              <div className="admin-leads-card-icon leads-orange">
                <FaUserCheck />
              </div>

              <div>

                <h6>Assigned Leads</h6>

                <h2>
                  {stats.assignedLeads}
                </h2>

                <p className="up-growth">
                  ↑ {stats.assignedGrowth}% vs last week
                </p>

              </div>

            </div>


            <div className="admin-leads-overview-card">

              <div className="admin-leads-card-icon leads-teal">
                <FaCheckCircle />
              </div>

              <div>

                <h6>Converted Leads</h6>

                <h2>
                  {stats.convertedLeads}
                </h2>

                <p className="up-growth">
                  ↑ {stats.convertedGrowth}% vs last week
                </p>

              </div>

            </div>


            <div className="admin-leads-overview-card">

              <div className="admin-leads-card-icon leads-red">
                <FaTimesCircle />
              </div>

              <div>

                <h6>Lost Leads</h6>

                <h2>
                  {stats.lostLeads}
                </h2>

                <p className="down-growth">
                  ↓ {stats.lostGrowth}% vs last week
                </p>

              </div>

            </div>


            <div className="admin-leads-overview-card">

              <div className="admin-leads-card-icon leads-blue">
                <FaChartLine />
              </div>

              <div>

                <h6>Conversion Rate</h6>

                <h2>
                  {stats.conversionRate}%
                </h2>

                <p className="up-growth">
                  ↑ {stats.rateGrowth}% vs last week
                </p>

              </div>

            </div>

          </div>

        </div>




<div className="admin-leads-filter-section">

  <div className="admin-leads-search-box">

    <input
      type="text"
      placeholder="Search by name, email, phone or company..."
    />

  </div>


  <div className="admin-leads-filter-box">

    <label>Lead Status</label>

    <select>

      <option>All Status</option>
      <option>New</option>
      <option>Assigned</option>
      <option>Converted</option>
      <option>Lost</option>

    </select>

  </div>


  <div className="admin-leads-filter-box">

    <label>Source</label>

    <select>

      <option>All Sources</option>
      <option>Website</option>
      <option>Whatsapp</option>
      <option>Referral</option>

    </select>

  </div>


  <div className="admin-leads-filter-box">

    <label>Assigned To</label>

    <select>

      <option>All Users</option>
      <option>Admin</option>
      <option>Vendor</option>

    </select>

  </div>


  <div className="admin-leads-filter-box">

    <label>Region</label>

    <select>

      <option>All Regions</option>
      <option>North</option>
      <option>South</option>
      <option>East</option>
      <option>West</option>

    </select>

  </div>


  <div className="admin-leads-filter-box">

    <label>Created Date</label>

    <input
      type="date"
    />

  </div>


  <button className="admin-leads-apply-btn">

    Apply Filter

  </button>


  <button className="admin-leads-reset-btn">

    Reset

  </button>


  <button className="admin-leads-more-btn">

    More Filters

  </button>

</div>

















      </div>

    </div>

  );

}

export default AdminLeads;