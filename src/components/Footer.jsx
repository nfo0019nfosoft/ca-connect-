import API_URL from "../config";
import "./Footer.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-company">

          <img
            src={logo}
            alt="CA Connect"
            className="footer-logo"
          />

          <p>
            India's most trusted platform to connect
            with verified Chartered Accountants for
            all your business and tax needs.
          </p>

          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-x-twitter"></i>
          </div>

        </div>

        {/* Quick Links */}
<div className="footer-column">
  <h4>Quick Links</h4>

  <Link to="/">Home</Link>
  <Link to="/find-ca">Find CA</Link>
  <Link to="/service">Services</Link>
  <Link to="/ai-assistant">AI Assistant</Link>
  <Link to="/blogs">Blogs</Link>
  <Link to="/contact">Contact Us</Link>
</div>

        {/* Services */}
<div className="footer-column">
  <h4>Services</h4>

  <Link to="/services/gst-filing">GST Filing</Link>
  <Link to="/services/income-tax-filing">Income Tax Filing</Link>
  <Link to="/services/company-registration">Company Registration</Link>
  <Link to="/services/roc-filing">ROC Filing</Link>
  <Link to="/services/audit-assurance">Audit & Assurance</Link>
  <Link to="/services/bookkeeping">Bookkeeping</Link>
   <Link to="/services/bookkeeping">Payroll Services</Link>
</div>

        {/* Support */}

      <div className="footer-column">
  <h4>Support</h4>

  <Link to="/help-center">Help Center</Link>
  <Link to="/faqs">FAQs</Link>
  <Link to="/how-it-works">How It Works</Link>
  <Link to="/support">Contact Support</Link>
  <Link to="/Login">Signup</Link>
</div>
        {/* Legal */}

       <div className="footer-column">
  <h4>Legal</h4>

  <Link to="/PrivacyPolicy">Privacy Policy</Link>
  <Link to="/TermsAndConditions">Terms & Conditions</Link>
  <Link to="/TermsAndConditions">Refund Policy</Link>
</div>

        {/* Newsletter */}

        <div className="footer-column newsletter">

          <h4>Newsletter</h4>

          <p>
            Subscribe to get updates
            and useful tips.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

<div className="footer-bottom">

  <p>
    © 2026 Bussult. All Rights Reserved.
  </p>

  <div className="footer-bottom-right">

    <p>
      Made with ❤️ in India
    </p>

    <div className="footer-chat">
      <i className="fas fa-comments"></i>
      <span className="chat-status"></span>
    </div>

  </div>

</div>
    </footer>
  );
}

export default Footer;