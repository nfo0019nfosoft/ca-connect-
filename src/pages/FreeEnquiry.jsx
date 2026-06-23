import { useEffect, useState } from "react";
import axios from "axios";

import "./FreeEnquiry.css";
import { useParams, useNavigate } from "react-router-dom";

import {
  FaCheckCircle,
  FaMapMarkerAlt,
  FaBuilding,
  FaShieldAlt,
  FaClock,
  FaBriefcase,
  FaCloudUploadAlt,
  FaStar,
  FaFileAlt,
  FaWhatsapp,
  FaBolt,
  FaLock,
  FaHeadset,
  FaPhoneAlt,
  FaEnvelope,
  FaUserTie,
  FaUsers,
  FaUserCheck,



} from "react-icons/fa";

function FreeEnquiry() {

  const { vendorId } = useParams();

  const navigate = useNavigate();

  const [vendor, setVendor] =
    useState(null);

  const [step, setStep] =
    useState(1);
const handleSubmit = async () => {
  try {
    await axios.post(
      "https://ca-backend-d9tc.onrender.com/api/enquiries",
      {
        vendorId,
        ...formData,
      }
    );

    alert("Enquiry Submitted Successfully");

    navigate("/enquiry-success");

  } catch (err) {
    console.log(err);
    alert("Failed to submit enquiry");
  }
};
  const steps = [
    {
      id: 1,
      title: "Select Service",
      subtitle:
        "Choose the service you need",
    },
    {
      id: 2,
      title:
        "Your Details",
      subtitle:
        "Tell us about yourself",
    },
    {
      id: 3,
      title:
        "Business Details",
      subtitle:
        "Provide business information",
    },
    {
      id: 4,
      title:
        "Requirements",
      subtitle:
        "Add more details",
    },
    {
      id: 5,
      title:
        "Review & Submit",
      subtitle:
        "Confirm and send enquiry",
    },
  ];
const [formData, setFormData] = useState({
  serviceName: [],
  fullName: "",
  email: "",
  mobile: "",
  preferredContact: "Call",
  preferredTime: "",
  businessType: "",
  annualTurnover: "",
  businessStructure: "",
  panNumber: "",
  requirements: "",
  files: [],
});

 const [agreeTerms, setAgreeTerms] =
  useState(false);

  const isFormValid =
  formData.serviceName.length > 0 &&
  formData.fullName &&
  formData.email &&
  formData.mobile &&
  formData.businessType &&
  formData.businessStructure &&
  formData.requirements?.trim() &&
  agreeTerms;

useEffect(() => {

  console.log(
    "Vendor ID =",
    vendorId
  );

  if (vendorId) {
    fetchVendor();
  }

}, [vendorId]);

useEffect(() => {

  let currentStep = 1;

  if (formData.serviceName.length > 0) {
  currentStep = 2;
}

  if (
  formData.serviceName.length > 0 &&
  formData.fullName &&
  formData.email &&
  formData.mobile
) {
    currentStep = 3;
  }

  if (
  formData.serviceName.length > 0 &&
  formData.fullName &&
  formData.email &&
  formData.mobile &&
  formData.businessType &&
  formData.businessStructure
) {
    currentStep = 4;
  }

  if (
  formData.serviceName.length > 0 && 
    formData.fullName &&
    formData.email &&
    formData.mobile &&
    formData.businessType &&
    formData.businessStructure &&
    formData.requirements?.trim() &&
    agreeTerms
  ) {
    currentStep = 5;
  }

  setStep(currentStep);

}, [formData, agreeTerms]);




 const fetchVendor = async () => {
  try {
    const res = await axios.get(
      `https://ca-backend-d9tc.onrender.com/api/vendor/${vendorId}`
    );

    console.log("FULL RESPONSE =", res.data);
    console.log("VENDOR =", res.data.vendor);
    console.log("SERVICES =", res.data.vendor?.services);
    console.log("EXPERIENCE =", res.data.vendor?.experience);

    setVendor(res.data.vendor);
  } catch (error) {
    console.log(error);
  }
};

  if (!vendor) {


    
    return (
      <div
        style={{
          padding: "100px",
          textAlign:
            "center",
        }}
      >
        Loading...
      </div>
    );

  }

  return (
    <div className="vendor-page">

      <div className="breadcrum">

        <span>Home</span>

        <span className="separator">
          ›
        </span>

        <span>
          Services
        </span>

        <span className="separator">
          ›
        </span>

        <span>
          Income Tax Services
        </span>

        <span className="separator">
          ›
        </span>

        <span>
          CA Professionals in{" "}
          {vendor.city}
        </span>

        <span className="separator">
          ›
        </span>

        <span>
          {vendor.fullName}
        </span>

        <span className="separator">
          ›
        </span>

        <span className="active">
          Enquiry
        </span>

      </div>

      <div className="enquiry-header">

  <h1>
    Send Enquiry to{" "}
    <span>{vendor.fullName}</span>
  </h1>

  <p>
    Fill in your details and our team
    will get in touch with you shortly.
  </p>

</div>

<div className="stepper-wrapper">

  {steps.map((item, index) => (

    <div
      key={item.id}
      className="step-item"
    >

      <div className="step-top">

        <div
          className={`step-circle ${
            step >= item.id
              ? "active"
              : ""
          }`}
        >
          {item.id}
        </div>

        {index !==
          steps.length - 1 && (

          <div
            className={`step-line ${
              step > item.id
                ? "active"
                : ""
            }`}
          />

        )}

      </div>

      <div className="step-content">

        <h4>
          {item.title}
        </h4>

        <p>
          {item.subtitle}
        </p>

      </div>

    </div>

  ))}

</div>



<div className="enquiry-layout">
<div className="left-enquiry">

  {/* ======================
      1. SELECT SERVICE
  ======================= */}

 <div className="enquiry-card">

  <h3>
    1. Select Service
  </h3>

  <p className="section-subtitle">
    Choose the service you need help with
  </p>

  <div className="service-grid">

    {vendor.services?.map((service) => (

      <div
        key={service._id}
        className={`service-box ${
          formData.serviceName.includes(
            service.serviceName
          )
            ? "active"
            : ""
        }`}
        onClick={() => {

          const exists =
            formData.serviceName.includes(
              service.serviceName
            );

          if (exists) {

            setFormData((prev) => ({
              ...prev,
              serviceName:
                prev.serviceName.filter(
                  (item) =>
                    item !==
                    service.serviceName
                ),
            }));

          } else {

            setFormData((prev) => ({
              ...prev,
              serviceName: [
                ...prev.serviceName,
                service.serviceName,
              ],
            }));

          }

        }}
      >

        <FaBriefcase />

        <h4>
          {service.serviceName}
        </h4>

        <p>
          ₹{service.price}
        </p>

        {formData.serviceName.includes(
          service.serviceName
        ) && (
          <span className="selected-badge">
            ✓ Selected
          </span>
        )}

      </div>

    ))}

  </div>

  {formData.serviceName.length === 0 && (
    <p className="service-note">
      Please select at least one service to continue
    </p>
  )}

</div>

  {/* ======================
      2. YOUR DETAILS
  ======================= */}

  <div className="enquiry-card">

    <h3>
      2. Your Details
    </h3>

    <p className="section-subtitle">
      Please provide your personal details
    </p>

    <div className="form-grid">

      <div className="form-group">

        <label>
          Full Name *
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({
              ...formData,
              fullName:
                e.target.value,
            })
          }
        />

      </div>

      <div className="form-group">

        <label>
          Email Address *
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email:
                e.target.value,
            })
          }
        />

      </div>

      <div className="form-group">

        <label>
          Mobile Number *
        </label>

        <input
          type="text"
          placeholder="Enter mobile number"
          value={formData.mobile}
          onChange={(e) =>
            setFormData({
              ...formData,
              mobile:
                e.target.value,
            })
          }
        />

      </div>

      <div className="form-group">

        <label>
          Preferred Time To Contact
        </label>

        <select
          value={
            formData.preferredTime
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              preferredTime:
                e.target.value,
            })
          }
        >

          <option value="">
            Select Time Slot
          </option>

          <option>
            09:00 AM - 11:00 AM
          </option>

          <option>
            11:00 AM - 01:00 PM
          </option>

          <option>
            02:00 PM - 04:00 PM
          </option>

          <option>
            04:00 PM - 06:00 PM
          </option>

        </select>

      </div>

    </div>

    <div className="radio-group">

      <label>

        <input
          type="radio"
          value="Call"
          checked={
            formData.preferredContact ===
            "Call"
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              preferredContact:
                e.target.value,
            })
          }
        />

        Call

      </label>

      <label>

        <input
          type="radio"
          value="WhatsApp"
          checked={
            formData.preferredContact ===
            "WhatsApp"
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              preferredContact:
                e.target.value,
            })
          }
        />

        WhatsApp

      </label>

      <label>

        <input
          type="radio"
          value="Email"
          checked={
            formData.preferredContact ===
            "Email"
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              preferredContact:
                e.target.value,
            })
          }
        />

        Email

      </label>

    </div>

  </div>

  {/* ======================
      3. BUSINESS DETAILS
  ======================= */}

  <div className="enquiry-card">

    <h3>
      3. Business Details
    </h3>

    <p className="section-subtitle">
      Tell us about your business
    </p>

    <div className="form-grid">

      <div className="form-group">

        <label>
          Business Type
        </label>

        <select
          value={
            formData.businessType
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              businessType:
                e.target.value,
            })
          }
        >

          <option value="">
            Select Business Type
          </option>

          <option>
            Proprietorship
          </option>

          <option>
            Partnership
          </option>

          <option>
            LLP
          </option>

          <option>
            Private Limited
          </option>

        </select>

      </div>

      <div className="form-group">

        <label>
          PAN Number
        </label>

        <input
          type="text"
          placeholder="Enter PAN Number"
          value={
            formData.panNumber
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              panNumber:
                e.target.value,
            })
          }
        />

      </div>

      <div className="form-group">

        <label>
          Annual Turnover
        </label>

        <select
          value={
            formData.annualTurnover
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              annualTurnover:
                e.target.value,
            })
          }
        >

          <option value="">
            Select Turnover
          </option>

          <option>
            Below ₹10 Lakhs
          </option>

          <option>
            ₹10L - ₹50L
          </option>

          <option>
            ₹50L - ₹1Cr
          </option>

          <option>
            Above ₹1Cr
          </option>

        </select>

      </div>

      <div className="form-group">

        <label>
          Business Structure
        </label>

        <select
          value={
            formData.businessStructure
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              businessStructure:
                e.target.value,
            })
          }
        >

          <option value="">
            Select Structure
          </option>

          <option>
            Individual
          </option>

          <option>
            Firm
          </option>

          <option>
            Company
          </option>

          <option>
            Startup
          </option>

        </select>

      </div>

    </div>

  </div>

  {/* ======================
      4. REQUIREMENTS
  ======================= */}

  <div className="enquiry-card">

    <h3>
      4. Requirements
    </h3>

    <p className="section-subtitle">
      Share more details about your requirement
    </p>

    <textarea
      rows="6"
      placeholder="Tell us more about your requirement..."
      value={
        formData.requirements
      }
      onChange={(e) =>
        setFormData({
          ...formData,
          requirements:
            e.target.value,
        })
      }
    />

  </div>

  {/* ======================
      5. DOCUMENTS
  ======================= */}

  <div className="file-upload">

  <FaCloudUploadAlt />

  <h4>
    Drag & Drop Files
    or Browse
  </h4>

  <p>
    PDF, JPG, PNG
    (Max 5MB each)
  </p>

  <input
    type="file"
    multiple
    onChange={(e) =>
      setFormData({
        ...formData,
        files: [
          ...e.target.files,
        ],
      })
    }
  />

</div>






  <div className="terms-box">

  <label>

    <input
      type="checkbox"
      checked={agreeTerms}
      onChange={(e) =>
        setAgreeTerms(
          e.target.checked
        )
      }
    />

    <span>
      I agree to the
      <a href="#">
        Terms &
        Conditions
      </a>
      and
      <a href="#">
        Privacy Policy
      </a>
    </span>

  </label>

</div>
<div className="enquiry-footer">

  <button
    className="cancel-btn"
    onClick={() =>
      navigate(-1)
    }
  >
    Cancel
  </button>

<button
  className={`review-btn ${
    !isFormValid ? "disabled" : ""
  }`}
  disabled={!isFormValid}
  onClick={handleSubmit}
>
  Submit Enquiry  →
</button>

</div>

</div>
<div className="right-sidebar">

  {/* Vendor Card */}

<div className="enquiry-vendor-card">

  <div className="enquiry-vendor-top">

    <img
      src={
        vendor.photo
          ? `https://ca-backend-d9tc.onrender.com/uploads/${vendor.photo}`
          : "/avatar.png"
      }
      alt={vendor.fullName}
    />

    <div className="enquiry-vendor-info">

      <h3>
        {vendor.fullName}
        {vendor.isVerified && (
          <FaCheckCircle className="enquiry-verified-icon" />
        )}
      </h3>

      <p>{vendor.qualification}</p>

      <p>
        {vendor.services
          ?.slice(0, 3)
          .map(service => service.serviceName)
          .join(", ")}
      </p>

      <div className="enquiry-vendor-rating">
        <FaStar />
        4.9 (128 Reviews)
      </div>

      <div className="enquiry-vendor-tags">
        <span>Verified CA</span>

        <span>
          {vendor.experience}+ Years Exp.
        </span>
      </div>

    </div>

  </div>

</div>
  {/* Enquiry Summary */}

  <div className="sidebar-card">

    <h3>
      Enquiry Summary
    </h3>

    <div className="summary-item">

      <FaFileAlt />

      <div>

        <h5>
          Selected Service
        </h5>

        <p>
  {formData.serviceName.length > 0
    ? formData.serviceName.join(", ")
    : "Not Selected"}
</p>

      </div>

    </div>

    <div className="summary-item">

      <FaWhatsapp />

      <div>

        <h5>
          Preferred Contact
        </h5>

        <p>
          {formData.preferredContact ||
            "Not Selected"}
        </p>

      </div>

    </div>

    <div className="summary-item">

      <FaClock />

      <div>

        <h5>
          Preferred Time
        </h5>

        <p>
          {formData.preferredTime ||
            "Not Selected"}
        </p>

      </div>

    </div>

    <div className="summary-item">

      <FaFileAlt />

      <div>

        <h5>
          Attachments
        </h5>

        <p>
          {formData.files
            ?.length || 0}
          {" "}
          Files Uploaded
        </p>

      </div>

    </div>

  </div>

  {/* Why Send Enquiry */}

  <div className="sidebar-card">

    <h3>
      Why send enquiry?
    </h3>

    <div className="feature-row">

      <div className="feature-icon">

        <FaShieldAlt />

      </div>

      <div>

        <h4>
          100% Free
        </h4>

        <p>
          No hidden charges
          for enquiry
        </p>

      </div>

    </div>

    <div className="feature-row">

      <div className="feature-icon">

        <FaBolt />

      </div>

      <div>

        <h4>
          Quick Response
        </h4>

        <p>
          We usually respond
          within few hours
        </p>

      </div>

    </div>

    <div className="feature-row">

      <div className="feature-icon">

        <FaLock />

      </div>

      <div>

        <h4>
          Data Safe &
          Secure
        </h4>

        <p>
          Your information
          is protected
        </p>

      </div>

    </div>

  </div>

  {/* Need Help */}

  <div className="sidebar-card">

    <h3>
      Need Help?
    </h3>

    <p className="help-text">
      Our support team is
      here to help you.
    </p>

    <div className="help-item">

      <FaPhoneAlt />

      <span>
        +91 98765 43210
      </span>

    </div>

    <div className="help-item">

      <FaEnvelope />

      <span>
        support@caconnect.com
      </span>

    </div>

    <div className="help-item">

      <FaUserTie />

      <span>
        Mon - Sat |
        9 AM - 7 PM
      </span>

    </div>

  </div>

</div>
    </div>




<div className="trust-strip-wrapper">

  <div className="trust-strip-item">
    <FaUsers className="trust-strip-icon" />
    <span>
      Trusted by 10,000+ Clients
    </span>
  </div>

  <div className="trust-strip-item">
    <FaUserCheck className="trust-strip-icon" />
    <span>
      Verified CA Professionals
    </span>
  </div>

  <div className="trust-strip-item">
    <FaShieldAlt className="trust-strip-icon" />
    <span>
      Secure & Confidential
    </span>
  </div>

  <div className="trust-strip-item">
    <FaBolt className="trust-strip-icon" />
    <span>
      Quick & Easy Process
    </span>
  </div>

</div>
    </div>
  );
}

export default FreeEnquiry;