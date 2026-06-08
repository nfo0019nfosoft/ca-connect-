import { Link } from "react-router-dom";
import { useState } from "react";
import about from "../assets/about.png";
import awardImg from "../assets/award.png";
import {
  FaChevronRight,
  FaCalendarCheck,
  FaPlayCircle,
  FaShieldAlt,
  FaUserTie,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaAward,
  FaClipboardCheck,
  FaStar,
  FaUser,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaHeadset,

 
 
} from "react-icons/fa";

import "./AboutUs.css";

function AboutUs() {
  
  return (
    <section className="about-page">

      {/* Breadcrumb */}
      <div className="about-breadcrumb">
        <Link to="/">Home</Link>
        <FaChevronRight />
        <span>About Us</span>
      </div>

      {/* Hero */}
      <div className="about-hero">

        <div className="about-content">

          <span className="about-tag">
            ABOUT CA CONNECT
          </span>

          <h1>
            Simplifying Finance.
            <br />
            Empowering Businesses.
          </h1>

          <p>
            CA Connect is your trusted partner for
            financial and compliance needs. We connect
            businesses with experienced Chartered
            Accountants and experts who provide reliable,personalized and technology-driven solutions.
          </p>

          <div className="hero-buttons">

            <Link
              to="/contact"
              className="primary-btn"
            >
              <FaCalendarCheck />
              Book a Consultation
            </Link>

            <button className="secondary-btn">
              <FaPlayCircle />
              Watch Our Story
            </button>

          </div>

        </div>

        <div className="hero-right">

          <img
                                       src={about}
                                       alt="Support Team"
                                     />

          <div className="hero-stats-card">
            <h3>5000+</h3>
            <span>Clients Served</span>

            <hr />

            <h3>150+</h3>
            <span>Expert CAs</span>
          </div>

        </div>

      </div>

    
    


<section className="values-section">

  {/* Values Card */}
  <div className="values-card">

    <h2>Our Values</h2>

    <div className="values-grid">

      <div className="value-item">
        <div className="value-icon">
          <FaShieldAlt />
        </div>
        <div>
          <h4>Trust & Integrity</h4>
          <p>
            We uphold the highest standards of honesty
            and professionalism.
          </p>
        </div>
      </div>

      <div className="value-item">
        <div className="value-icon">
          <FaUser />
        </div>
        <div>
          <h4>Client First</h4>
          <p>
            Your success is our priority. We listen,
            understand and deliver the best.
          </p>
        </div>
      </div>

      <div className="value-item">
        <div className="value-icon">
          <FaLightbulb />
        </div>
        <div>
          <h4>Excellence</h4>
          <p>
            We leverage expertise and technology to
            provide accurate solutions.
          </p>
        </div>
      </div>

      <div className="value-item">
        <div className="value-icon">
          <FaRocket />
        </div>
        <div>
          <h4>Innovation</h4>
          <p>
            We embrace technology and new ideas to
            simplify finance.
          </p>
        </div>
      </div>

    </div>

  </div>

  {/* Stats Card */}
  <div className="stats-card">

    <div className="stat-box">
      <FaUsers className="stat-icon" />
      <h3>5000+</h3>
      <span>Happy Clients</span>
    </div>

    <div className="stat-box">
      <FaAward className="stat-icon" />
      <h3>150+</h3>
      <span>Expert CAs</span>
    </div>

    <div className="stat-box">
      <FaClipboardCheck className="stat-icon" />
      <h3>250+</h3>
      <span>Services Delivered</span>
    </div>

    <div className="stat-box">
      <FaStar className="stat-icon" />
      <h3>10+</h3>
      <span>Years of Trust</span>
    </div>

  </div>

</section>




<section className="team-faq-section">

  {/* LEFT SIDE */}

  <div className="team-side">

    <div className="section-title">
      <h2>Our Leadership Team</h2>

      <a href="/">
        View All Team →
      </a>
    </div>

    <div className="team-grid">

      <div className="team-card">

        <img
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400"
          alt="CEO"
        />

        <div className="team-content">
          <h3>Rohit Mehta</h3>
          <span>Co-Founder & CEO</span>

          <p>
            Rohit leads CA Connect with a vision
            to simplify compliance and empower
            businesses across India.
          </p>
        </div>

      </div>

      <div className="team-card">

        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
          alt="COO"
        />

        <div className="team-content">
          <h3>Neha Sharma</h3>
          <span>Co-Founder & COO</span>

          <p>
            Neha ensures seamless operations and
            client success through expert support.
          </p>
        </div>

      </div>

      <div className="team-card">

        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400"
          alt="Manager"
        />

        <div className="team-content">
          <h3>Arjun Nair</h3>
          <span>Head - Client Relations</span>

          <p>
            Building strong relationships and
            delivering exceptional client experiences.
          </p>
        </div>

      </div>

      <div className="team-card">

        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400"
          alt="Compliance"
        />

        <div className="team-content">
          <h3>Priya Iyer</h3>
          <span>Head - Compliance</span>

          <p>
            Ensuring accuracy, security and
            regulatory compliance for every client.
          </p>
        </div>

      </div>

    </div>

    {/* Mission Vision */}

    <div className="mission-vision">

      <div className="mission-box">

       <div className="mission-icon">
  <img
    src={awardImg}
    alt="Mission Trophy"
  />
</div>

        <div>
          <h3>Our Mission</h3>

          <p>
            To simplify financial management and
            compliance by connecting businesses
            with trusted CA experts.
          </p>
        </div>

      </div>

      <div className="vision-box">

        <h3>Our Vision</h3>

        <p>
          To be India's most trusted platform for
          financial and compliance solutions.
        </p>

      </div>

    </div>

  </div>

  {/* RIGHT SIDE */}

  <div className="faq-side">

    <div className="faq-header">
      <h2>Frequently Asked Questions</h2>

      <a href="/">
        View all FAQs →
      </a>
    </div>

    <details className="faq-item">
      <summary>What is CA Connect?</summary>

      <p>
        CA Connect helps businesses connect with
        trusted Chartered Accountants and financial experts.
      </p>
    </details>

    <details className="faq-item">
      <summary>How does CA Connect work?</summary>

      <p>
        Submit your requirement and get connected
        with verified professionals.
      </p>
    </details>

    <details className="faq-item">
      <summary>How do I book a consultation?</summary>

      <p>
        Simply visit the contact page and schedule
        a consultation.
      </p>
    </details>

    <details className="faq-item">
      <summary>Are the CAs on CA connect verified?</summary>

      <p>
        Yes, every professional is verified before onboarding.
      </p>
    </details>

    <details className="faq-item">
      <summary>Is my data secure with CA connect ?</summary>

      <p>
        Absolutely. We follow strict security and
        privacy standards.
      </p>
    </details>
<div className="support-box">

  <div className="support-left">

    <div className="support-icon">
      <FaHeadset />
    </div>

    <div>
      <h3>Need Help?</h3>
      <p>Our support team is here to help you.</p>
    </div>

  </div>
  </div>

  <Link to="/support" className="support-btn">
    Visit Support Center →
  </Link>


  </div>

</section>





<div className="trust-banner">

  <div className="trust-left">

    <div className="trust-icon">
      <FaShieldAlt />
    </div>

    <div>
      <h3>Your Trust, Our Promise</h3>

      <p>
        We are committed to protecting your data and
        providing secure, reliable and transparent services.
      </p>
    </div>

  </div>

  <div className="trust-links">

    <Link to="/PrivacyPolicy">
      Privacy Policy
    </Link>

    <span>|</span>

    <Link to="/TermsAndConditions">
      Terms & Conditions
    </Link>

    <span>|</span>

    <Link to="/TermsAndConditions">
      Refund Policy
    </Link>

  </div>

</div>








    </section>
  );
}

export default AboutUs;