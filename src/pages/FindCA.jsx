import { useEffect, useState } from "react";
import axios from "axios";
import "./FindCA.css";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaFilter,
  FaStar,
  FaMapMarkerAlt,
  FaBuilding,
  FaUserCheck,
  FaCalendarCheck,
  FaChevronDown,
  FaEye,
  FaBalanceScale,
  FaShieldAlt,
  FaUserShield,
  FaHeadset,
  FaLock
} from "react-icons/fa";
function FindCA() {
  const [vendors, setVendors] = useState([]);
  const [filteredVendors, setFilteredVendors] = useState([]);

  const [search, setSearch] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState("");
  const [businessType, setBusinessType] = useState("");
  const navigate = useNavigate();

const [availability, setAvailability] = useState("");
const [experienceFilter, setExperienceFilter] = useState("");
const [feeFilter, setFeeFilter] = useState("");
const [ratingFilter, setRatingFilter] = useState("");

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = async () => {
    try {
      const res = await axios.get(
        "https://ca-backend-d9tc.onrender.com/api/vendor"
      );

      setVendors(res.data);
      setFilteredVendors(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = () => {
    let data = [...vendors];

    if (search) {
      data = data.filter(
        (vendor) =>
          vendor.fullName
            ?.toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    if (city) {
      data = data.filter(
        (vendor) => vendor.city === city
      );
    }

    if (businessType) {
      data = data.filter(
        (vendor) =>
          vendor.businessType ===
          businessType
      );
    }

    if (service) {
      data = data.filter((vendor) =>
        vendor.services?.some(
          (s) =>
            s.serviceName === service
        )
      );
    }

    setFilteredVendors(data);
  };

  return (
    <div className="findca-page">

      {/* BREADCRUMB */}

      <div className="breadcrumb">
        Home &gt; Services &gt;
        Income Tax Services &gt;
        CA Professionals in Mumbai
      </div>

      {/* TITLE */}

      <div className="page-header">
        <h1>
          CA Professionals for
          <span>
            Income Tax Services in Mumbai
          </span>
        </h1>

        <p>
          Compare profiles and choose
          the right CA for your needs.
        </p>
      </div>

      {/* SEARCH BOX */}

      <div className="search-card">

        <div className="field">
          <label>
            Find a CA / Firm
          </label>

          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />
        </div>

        <div className="field">
          <label>
            Select Service
          </label>

          <select
            value={service}
            onChange={(e) =>
              setService(
                e.target.value
              )
            }
          >
            <option value="">
              All Services
            </option>

            {[
              ...new Set(
                vendors.flatMap(
                  (v) =>
                    v.services?.map(
                      (s) =>
                        s.serviceName
                    ) || []
                )
              )
            ].map((service) => (
              <option
                key={service}
                value={service}
              >
                {service}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>
            Select City
          </label>

          <select
            value={city}
            onChange={(e) =>
              setCity(
                e.target.value
              )
            }
          >
            <option value="">
              All Cities
            </option>

            {[
              ...new Set(
                vendors.map(
                  (v) => v.city
                )
              )
            ].map((city) => (
              <option
                key={city}
                value={city}
              >
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>
            Business Type
          </label>

          <select
            value={businessType}
            onChange={(e) =>
              setBusinessType(
                e.target.value
              )
            }
          >
            <option value="">
              All Types
            </option>

            <option value="Individual">
              Individual
            </option>

            <option value="Firm">
              Firm
            </option>
          </select>
        </div>

        <button
          className="search-btn"
          onClick={handleSearch}
        >
          Search
        </button>

      </div>

      {/* FILTERS */}

<div className="filter-row">

  <button className="filter-chip">
    <FaFilter />
    <span>Filters</span>
  </button>

  <div className="filter-chip">

    <FaCalendarCheck />

    <select
      value={availability}
      onChange={(e) =>
        setAvailability(
          e.target.value
        )
      }
    >
      <option value="">
        Availability
      </option>

      <option value="today">
        Available Today
      </option>

      <option value="tomorrow">
        Available Tomorrow
      </option>

      <option value="week">
        This Week
      </option>
    </select>

  </div>

  <div className="filter-chip">

    <FaUserCheck />

    <select
      value={experienceFilter}
      onChange={(e) =>
        setExperienceFilter(
          e.target.value
        )
      }
    >
      <option value="">
        Experience
      </option>

      <option value="5">
        Above 5 Years
      </option>

      <option value="10">
        Above 10 Years
      </option>

      <option value="15">
        Above 15 Years
      </option>

      <option value="20">
        Above 20 Years
      </option>
    </select>

  </div>

  <div className="filter-chip">

    <FaStar />

    <select
      value={ratingFilter}
      onChange={(e) =>
        setRatingFilter(
          e.target.value
        )
      }
    >
      <option value="">
        Rating
      </option>

      <option value="5">
        5 Stars
      </option>

      <option value="4">
        4+ Stars
      </option>

      <option value="3">
        3+ Stars
      </option>
    </select>

  </div>

  <div className="filter-chip">

    <FaBalanceScale />

    <select
      value={feeFilter}
      onChange={(e) =>
        setFeeFilter(
          e.target.value
        )
      }
    >
      <option value="">
        Fees
      </option>

      <option value="1000">
        Below ₹1000
      </option>

      <option value="5000">
        Below ₹5000
      </option>

      <option value="10000">
        Below ₹10000
      </option>
    </select>

  </div>

</div>

      {/* COUNT */}

      <div className="results-row">

        <p>
          {
            filteredVendors.length
          }{" "}
          CA Professionals
          Found
        </p>

        <span>
          Clear All
        </span>

      </div>


   {/* VENDORS */}

<div className="vendors-list">

  {filteredVendors.map((vendor) => {

    const price =
      vendor.services?.[0]?.price || 0;

    const pricing =
      price <= 1000
        ? "Affordable Pricing"
        : price <= 5000
        ? "Moderate Pricing"
        : "Premium Pricing";

    const services =
      vendor.services?.length > 0
        ? vendor.services
            .slice(0, 3)
            .map(
              (service) =>
                service.serviceName
            )
            .join(", ")
        : "CA Services";

    return (

      <div
        className="vendor-card"
        key={vendor._id}
      >

        {/* LEFT */}

        <div className="vendor-left">

          <div className="vendor-image">

            <img
              src={
                vendor.photo
                  ? `https://ca-backend-d9tc.onrender.com/uploads/${vendor.photo}`
                  : "/avatar.png"
              }
              alt={vendor.fullName}
              className="vendor-img"
            />

            {vendor.isVerified && (
              <span className="online-dot">
                ✓
              </span>
            )}

          </div>

          <div className="vendor-content">

            {/* NAME */}

            <div className="vendor-top">

              <h3>
                {vendor.fullName}
              </h3>

              {vendor.isVerified && (
                <FaCheckCircle className="verified-icon" />
              )}

            </div>

            {/* SERVICES */}

            <p className="service-name">
              {services}
            </p>

            {/* STATS */}

            <div className="vendor-stats">

              <span>
                <FaStar />
                4.8
                <small>
                  (128 Reviews)
                </small>
              </span>

              <span>
                {vendor.experience || 0}
                + Years Exp.
              </span>

              <span>
                98% On-Time
              </span>

            </div>

            {/* TAGS */}

            <div className="vendor-tags">

              {vendor.isVerified && (
                <span className="verified-tag">
                  Verified CA
                </span>
              )}

              <span className="pricing-tag">
                {pricing}
              </span>

              <span className="available-tag">
                {vendor.available
                  ? "Available Today"
                  : "Available Tomorrow"}
              </span>

            </div>

            {/* LOCATION */}

            <div className="vendor-location">

              <span>
                <FaMapMarkerAlt />
                {vendor.city || "Mumbai"}
              </span>

              <span>
                <FaBuilding />
                Works at{" "}
                {vendor.firmName ||
                  "Independent Practice"}
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT BUTTONS */}

        <div className="vendor-actions">
<button
  className="profile-btn"
  onClick={() =>
    navigate(`/vendor/${vendor._id}`)
  }
>
  Enquire
</button>

<button
  className="consult-btn"
  onClick={() =>
    navigate(`/vendor/${vendor._id}`)
  }
>
  Book Consultation
</button>

         

        </div>

      </div>

    );

  })}

</div>
      {/* BOTTOM FEATURES */}

  
<div className="ca-features-row">

  <div className="ca-feature-box">
    <FaShieldAlt className="ca-feature-icon" />

    <div className="ca-feature-content">
      <h4>Verified Professionals</h4>
      <p>Background verified CAs</p>
    </div>
  </div>

  <div className="ca-feature-box">
    <FaUserShield className="ca-feature-icon" />

    <div className="ca-feature-content">
      <h4>Transparent Pricing</h4>
      <p>No hidden charges</p>
    </div>
  </div>

  <div className="ca-feature-box">
    <FaHeadset className="ca-feature-icon" />

    <div className="ca-feature-content">
      <h4>24/7 Support</h4>
      <p>We're here to help</p>
    </div>
  </div>

  <div className="ca-feature-box">
    <FaLock className="ca-feature-icon" />

    <div className="ca-feature-content">
      <h4>100% Secure</h4>
      <p>Your data is safe</p>
    </div>
  </div>

</div>
    </div>
  );
}

export default FindCA;