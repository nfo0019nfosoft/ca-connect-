import React, {
  useEffect,
  useState
} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PhoneInputModule from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInput = PhoneInputModule.default || PhoneInputModule;

import {
  FaUser,
  FaFileAlt,
  FaBriefcase,
  FaTag,
  FaEye,
  FaCreditCard,
  FaSearch,
  FaBell,
  FaComments,
  FaCheckCircle
} from "react-icons/fa";

import Sidebar from "../components/Sidebar";
import "./VendorProfile.css";

function VendorProfile() {

  const [vendor, setVendor] =
    useState({});
const [steps, setSteps] = useState({
  profile: false,
  firm: false,
  kyc: false,
  services: false,
  pricing: false,
  preview: false,
  payment: false,
});

const totalSteps = 7;

const completedSteps = [
  steps.profile,
  steps.firm,
  steps.kyc,
  steps.services,
  steps.pricing,
  steps.preview,
  steps.payment,
].filter(Boolean).length;

const percentage = Math.round(
  (completedSteps / totalSteps) * 100
);

//   useEffect(() => {
//     fetchProfile();
//   }, []);
useEffect(() => {

  const token =
    localStorage.getItem("token");

  console.log("TOKEN =", token);

  fetchProfile();

}, []);
  const fetchProfile =
    async () => {

      try {

        const token =
          localStorage.getItem(
            "token"
          );

      const res =
  await axios.get(
    "http://localhost:5000/api/vendor/profile",
    {
      headers: {
        Authorization:
          `Bearer ${token}`
      }
    }
  );

        const data =
          res.data.vendor;

        setVendor(data);

        setSteps({
          profile:
            !!data.fullName &&
            !!data.email &&
            !!data.mobile,

          firm:
            !!data.firmName &&
            !!data.gstNumber,

          kyc:
            !!data.kyc
              ?.panCard,

          services:
            data.services
              ?.length > 0,

          pricing:
            true,

          preview:
            !!data.photo,

          payment:
            !!data
              .bankDetails
              ?.accountNumber
        });

      } catch (error) {
        console.log(error);
      }
    };

  const handleChange = (
    e
  ) => {

    setVendor({
      ...vendor,
      [e.target.name]:
        e.target.value
    });

  };
  const saveProfile = async () => {

  try {

    const token =
      localStorage.getItem("token");

  await axios.put(
  "http://localhost:5000/api/vendor/profile",
  vendor,
  {
    headers: {
      Authorization:
        `Bearer ${token}`
    }
  }
);

    alert(
      "Profile Updated Successfully"
    );

    fetchProfile();

  } catch (error) {

    console.log(error);

    alert(
      "Update Failed"
    );
  }

};

  return (
    <div className="profile-layout">

      <Sidebar />

      <div className="profile-content">

        {/* Header */}

        <div className="top-header">

          <div>

            <h2>
              My Profile
            </h2>

            <p>
              Home /
              My Profile /
              Profile Information
            </p>

          </div>

          <div className="header-right">

            <div className="search-box">

              <FaSearch />

              <input
                type="text"
                placeholder="Search anything..."
              />

            </div>

            <FaComments className="icon" />

            <FaBell className="icon" />

            <div className="vendor-info">

              <img
                src={
                  vendor.photo ||
                  "/avatar.png"
                }
                alt=""
              />

              <div>

                <h4>
                  {
                    vendor.fullName
                  }
                </h4>

                <p>
                  {
                    vendor.firmName
                  }
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Tabs */}

     <div className="profile-tabs">

  <Link
    to="/vendor-profile"
    className="tab-link active"
  >
    <FaUser />
    Profile Information
  </Link>

  <Link
    to="/vendor-kyc"
    className="tab-link"
  >
    <FaFileAlt />
    KYC Verification
  </Link>

  <Link
    to="/vendor-services"
    className="tab-link"
  >
    <FaBriefcase />
    Services Offered
  </Link>

  <Link
    to="/vendor-pricing"
    className="tab-link"
  >
    <FaTag />
    Pricing & Packages
  </Link>

  <Link
    to="/vendor-preview"
    className="tab-link"
  >
    <FaEye />
    Public Profile Preview
  </Link>

  <Link
    to="/vendor-payment"
    className="tab-link"
  >
    <FaCreditCard />
    Payment Details
  </Link>

</div>
        <div className="profile-wrapper">

          {/* LEFT */}

          <div className="profile-main">

            <div className="profile-card">

              <h3>
                Profile Information
              </h3>

              <p>
                Manage your
                personal details
              </p>

              <div className="profile-section">

                <div className="profile-image">

                  <img
                    src={
                      vendor.photo ||
                      "/avatar.png"
                    }
                    alt=""
                  />

                  <button>
                    Change
                    Photo
                  </button>

                </div>

                <div className="form-area">

                  <div className="form-grid">

                    <input
                      name="fullName"
                      value={
                        vendor.fullName ||
                        ""
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Full Name"
                    />

                    <input
                      name="email"
                      value={
                        vendor.email ||
                        ""
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Email"
                    />

                    <input
                      name="mobile"
                      value={
                        vendor.mobile ||
                        ""
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Mobile"
                    />

                    <input
                      name="designation"
                      value={
                        vendor.designation ||
                        ""
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Designation"
                    />

                    <input
                      name="experience"
                      value={
                        vendor.experience ||
                        ""
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Experience"
                    />

                    <input
                      name="qualification"
                      value={
                        vendor.qualification ||
                        ""
                      }
                      onChange={
                        handleChange
                      }
                      placeholder="Qualification"
                    />

                  </div>

                  <textarea
                    name="about"
                    value={
                      vendor.about ||
                      ""
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="About You"
                  />

                </div>

              </div>
<div className="firm-card">

  <h3>Firm Details</h3>
  <p>Provide your firm or professional details.</p>

  <div className="profile-type-wrapper">

    <label className="type-card">
      <input
        type="radio"
        name="profileType"
        value="individual"
        checked={vendor.profileType === "individual"}
        onChange={handleChange}
      />
      <div>
        <h4>Individual (CA)</h4>
        <p>You are practicing as an individual</p>
      </div>
    </label>

    <label className="type-card">
      <input
        type="radio"
        name="profileType"
        value="firm"
        checked={vendor.profileType === "firm"}
        onChange={handleChange}
      />
      <div>
        <h4>Firm</h4>
        <p>You are practicing as a firm</p>
      </div>
    </label>

  </div>

  {/* =========================
      INDIVIDUAL SECTION
  ========================= */}

  {vendor.profileType !== "firm" && (

    <div className="firm-grid">

      <input
        name="caNumber"
        value={vendor.caNumber || ""}
        onChange={handleChange}
        placeholder="CA Number"
      />

      <input
        name="membershipNumber"
        value={vendor.membershipNumber || ""}
        onChange={handleChange}
        placeholder="Membership Number"
      />

    <PhoneInput
  country={"in"}
  enableSearch
  value={vendor.officeMobile || ""}
  onChange={(value, data) => {
    setVendor({
      ...vendor,
      officeMobile: value,
      officeCountryCode: data?.dialCode
        ? `+${data.dialCode}`
        : "+91",
      country: data?.name || "",
    });
  }}
/>

      <input
        name="addressLine1"
        value={vendor.addressLine1 || ""}
        onChange={handleChange}
        placeholder="Address Line 1"
      />

      <input
        name="addressLine2"
        value={vendor.addressLine2 || ""}
        onChange={handleChange}
        placeholder="Address Line 2"
      />

      <input
        name="country"
        value={vendor.country || ""}
        onChange={handleChange}
        placeholder="Country"
      />

      <input
        name="state"
        value={vendor.state || ""}
        onChange={handleChange}
        placeholder="State"
      />

      <input
        name="city"
        value={vendor.city || ""}
        onChange={handleChange}
        placeholder="City"
      />

      <input
        name="pincode"
        value={vendor.pincode || ""}
        onChange={handleChange}
        placeholder="Pincode"
      />

    </div>

  )}

  {/* =========================
      FIRM SECTION
  ========================= */}

  {vendor.profileType === "firm" && (

    <div className="firm-type-box">

      <h4>Firm Information</h4>

      <div className="firm-grid">

        <input
          name="firmName"
          value={vendor.firmName || ""}
          onChange={handleChange}
          placeholder="Firm Name"
        />

        <input
          name="firmRegistrationNo"
          value={vendor.firmRegistrationNo || ""}
          onChange={handleChange}
          placeholder="Firm Registration No"
        />

        <select
          name="firmType"
          value={vendor.firmType || ""}
          onChange={handleChange}
        >
          <option value="">
            Select Firm Type
          </option>
          <option value="Proprietorship">
            Proprietorship
          </option>
          <option value="Partnership">
            Partnership
          </option>
          <option value="LLP">
            LLP
          </option>
          <option value="Private Limited">
            Private Limited
          </option>
        </select>

        <input
          type="date"
          name="establishedOn"
          value={
            vendor.establishedOn
              ? vendor.establishedOn.slice(0, 10)
              : ""
          }
          onChange={handleChange}
        />

        <input
          name="gstNumber"
          value={vendor.gstNumber || ""}
          onChange={handleChange}
          placeholder="GST Number"
        />

        <input
          name="panNumber"
          value={vendor.panNumber || ""}
          onChange={handleChange}
          placeholder="PAN Number"
        />

        <input
          name="addressLine1"
          value={vendor.addressLine1 || ""}
          onChange={handleChange}
          placeholder="Address Line 1"
        />

        <input
          name="addressLine2"
          value={vendor.addressLine2 || ""}
          onChange={handleChange}
          placeholder="Address Line 2"
        />

        <input
          name="country"
          value={vendor.country || ""}
          onChange={handleChange}
          placeholder="Country"
        />

        <input
          name="state"
          value={vendor.state || ""}
          onChange={handleChange}
          placeholder="State"
        />

        <input
          name="city"
          value={vendor.city || ""}
          onChange={handleChange}
          placeholder="City"
        />

        <input
          name="pincode"
          value={vendor.pincode || ""}
          onChange={handleChange}
          placeholder="Pincode"
        />

        <input
          name="landmark"
          value={vendor.landmark || ""}
          onChange={handleChange}
          placeholder="Landmark"
        />

       <PhoneInput
  country={"in"}
  enableSearch
  value={vendor.officeMobile || ""}
  onChange={(value, data) => {
    setVendor({
      ...vendor,
      officeMobile: value,
      officeCountryCode: data?.dialCode
        ? `+${data.dialCode}`
        : "+91",
      country: data?.name || "",
    });
  }}
/>

        <input
          name="officeEmail"
          value={vendor.officeEmail || ""}
          onChange={handleChange}
          placeholder="Email Address"
        />

        <input
          name="website"
          value={vendor.website || ""}
          onChange={handleChange}
          placeholder="Website"
        />

      </div>

    </div>

  )}

  <button
    className="save-btn"
    onClick={saveProfile}
  >
    Save Changes
  </button>

</div>

            </div>

          </div>
          

          {/* RIGHT */}

<div className="completion-card">

  <h3>Profile Completion</h3>

  <div className="completion-top">

    <div className="progress-circle">
      {percentage}%
    </div>

    <div className="progress-text">
      <p>
        Complete your profile to get
        more leads and visibility.
      </p>

      <a href="#">
        View Profile
      </a>
    </div>

  </div>

  <div className="steps-list">

    <div className="step-item">
      <span
        className={`step-dot ${
          steps.profile ? "active" : ""
        }`}
      ></span>

      <span className="step-label">
        Profile Information
      </span>

      {steps.profile ? (
        <FaCheckCircle className="green" />
      ) : (
        <div className="empty-circle"></div>
      )}
    </div>

    <div className="step-item">
      <span
        className={`step-dot ${
          steps.firm ? "active" : ""
        }`}
      ></span>

      <span className="step-label">
        Firm Details
      </span>

      {steps.firm ? (
        <FaCheckCircle className="green" />
      ) : (
        <div className="empty-circle"></div>
      )}
    </div>

    <div className="step-item">
      <span
        className={`step-dot ${
          steps.kyc ? "active" : ""
        }`}
      ></span>

      <span className="step-label">
        KYC Verification
      </span>

      {steps.kyc ? (
        <FaCheckCircle className="green" />
      ) : (
        <div className="empty-circle"></div>
      )}
    </div>

    <div className="step-item">
      <span
        className={`step-dot ${
          steps.services ? "active" : ""
        }`}
      ></span>

      <span className="step-label">
        Services Offered
      </span>

      {steps.services ? (
        <FaCheckCircle className="green" />
      ) : (
        <div className="empty-circle"></div>
      )}
    </div>

    <div className="step-item">
      <span
        className={`step-dot ${
          steps.pricing ? "active" : ""
        }`}
      ></span>

      <span className="step-label">
        Pricing & Packages
      </span>

      {steps.pricing ? (
        <FaCheckCircle className="green" />
      ) : (
        <div className="empty-circle"></div>
      )}
    </div>

    <div className="step-item">
      <span
        className={`step-dot ${
          steps.preview ? "active" : ""
        }`}
      ></span>

      <span className="step-label">
        Public Profile Preview
      </span>

      {steps.preview ? (
        <FaCheckCircle className="green" />
      ) : (
        <div className="empty-circle"></div>
      )}
    </div>

    <div className="step-item">
      <span
        className={`step-dot ${
          steps.payment ? "active" : ""
        }`}
      ></span>

      <span className="step-label">
        Payment Details
      </span>

      {steps.payment ? (
        <FaCheckCircle className="green" />
      ) : (
        <div className="empty-circle"></div>
      )}
    </div>

  </div>

</div>

        </div>

      </div>

    </div>














  );
}

export default VendorProfile;