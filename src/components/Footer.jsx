import "./Footer.css";
import logo from "../assets/logo.png";

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

          <a href="/">Home</a>
          <a href="/">Find CA</a>
          <a href="/">Services</a>
          <a href="/">AI Assistant</a>
          <a href="/">Blogs</a>
          <a href="/">Contact Us</a>
        </div>

        {/* Services */}

        <div className="footer-column">
          <h4>Services</h4>

          <a href="/">GST Filing</a>
          <a href="/">Income Tax Filing</a>
          <a href="/">Company Registration</a>
          <a href="/">ROC Filing</a>
          <a href="/">Audit & Assurance</a>
          <a href="/">Bookkeeping</a>
        </div>

        {/* Support */}

        <div className="footer-column">
          <h4>Support</h4>

          <a href="/">Help Center</a>
          <a href="/">FAQs</a>
          <a href="/">How It Works</a>
          <a href="/">Contact Support</a>
          <a href="/">Signup</a>
        </div>

        {/* Legal */}

        <div className="footer-column">
          <h4>Legal</h4>

          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Refund Policy</a>
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
    © 2026 CA Connect. All Rights Reserved.
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