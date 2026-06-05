import "./Home.css";
import heroImg from "../assets/hero.png";
import {
  FaShieldAlt,
  FaWallet,
  FaLock,
  FaFileInvoice,
  FaBuilding,
  FaClipboardList,
  FaTrademark,
  FaRegBookmark,
  FaBook,
  FaClock,
  FaLightbulb,
  FaMapMarkerAlt,
  FaSearch,
  FaPaperPlane,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaArrowRight
} from "react-icons/fa";
import {
  HiOutlineUserGroup,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      {/* HERO SECTION */}

   <section className="hero">

  <div
    className="hero-left"
    data-aos="fade-right"
    data-aos-duration="1000"
  >

    <span
      className="hero-badge"
      data-aos="fade-down"
      data-aos-delay="100"
    >
      India's Most Trusted CA Marketplace
    </span>

    <h1
      data-aos="fade-up"
      data-aos-delay="200"
    >
      Find Trusted
      <br />
      Chartered Accountants
      <br />
      <span>Near You</span>
    </h1>

    <p
      data-aos="fade-up"
      data-aos-delay="350"
    >
      Connect with verified CAs and CA firms for all your
      business and tax needs. Fast, reliable & secure.
    </p>

    <div
      className="hero-features"
      data-aos="fade-up"
      data-aos-delay="500"
    >

      <div className="feature">
        <FaShieldAlt className="feature-icon" />
        <span>Verified Professionals</span>
      </div>

      <div className="feature">
        <FaWallet className="feature-icon" />
        <span>Transparent Pricing</span>
      </div>

      <div className="feature">
        <FaLock className="feature-icon" />
        <span>Secure & Reliable</span>
      </div>

    </div>

  </div>

  <div
    className="hero-right"
    data-aos="zoom-in"
    data-aos-delay="400"
    data-aos-duration="1200"
  >
    <img src={heroImg} alt="CA Dashboard" />
  </div>

</section>

      {/* SEARCH CARD */}


<section
  className="search-card"
  data-aos="fade-up"
  data-aos-duration="1000"
>

  <div
    className="search-title"
    data-aos="fade-down"
    data-aos-delay="100"
  >

    <div className="title-row">
      <HiOutlineUserGroup className="title-icon" />
      <h3>Find CA / Firm</h3>
    </div>

    <div className="title-line"></div>

  </div>

  <div
    className="search-labels"
    data-aos="fade-up"
    data-aos-delay="200"
  >

    <span>What do you need help with?</span>

    <span>Where?</span>

    <span>Select Business Type (Optional)</span>

    <span></span>

  </div>

  <div className="search-grid">

    <select
      defaultValue=""
      data-aos="zoom-in"
      data-aos-delay="300"
    >
      <option value="" disabled>
        Select Service
      </option>

      <option>GST Filing</option>
      <option>Income Tax Filing</option>
      <option>Company Registration</option>
      <option>ROC Filing</option>
    </select>

    <div
      className="location-field"
      data-aos="zoom-in"
      data-aos-delay="400"
    >
      <input
        type="text"
        placeholder="Enter City or Area"
      />

      <HiOutlineLocationMarker className="location-icon" />
    </div>

    <select
      defaultValue=""
      data-aos="zoom-in"
      data-aos-delay="500"
    >
      <option value="" disabled>
        All Business Types
      </option>

      <option>Individual</option>
      <option>Partnership</option>
      <option>Company</option>
    </select>

    <button
      data-aos="zoom-in"
      data-aos-delay="600"
    >
      <FaSearch />
      Search Now
    </button>

  </div>

  <div
    className="popular-searches"
    data-aos="fade-up"
    data-aos-delay="700"
  >

    <span>Popular Searches:</span>

    <button>GST Filing</button>
    <button>Income Tax Filing</button>
    <button>Company Registration</button>
    <button>ROC Filing</button>
    <button>Bookkeeping</button>
    <button>Audit</button>

  </div>

</section>




{/* Popular Services Section */}

<section className="services-section">

  <div
    className="services-header"
    data-aos="fade-up"
  >
    <h2>Popular Services</h2>

    <a href="/" className="view-all">
      View All Services
      <FaArrowRight />
    </a>
  </div>

  <div className="services-grid">

    <div
      className="service-card"
      data-aos="zoom-in-up"
      data-aos-delay="100"
    >
      <div className="service-icon green">
        <FaFileInvoice />
      </div>
      <h4>GST Filing</h4>
    </div>

    <div
      className="service-card"
      data-aos="zoom-in-up"
      data-aos-delay="200"
    >
      <div className="service-icon blue">
        <FaClipboardList />
      </div>
      <h4>Income Tax Filing</h4>
    </div>

    <div
      className="service-card"
      data-aos="zoom-in-up"
      data-aos-delay="300"
    >
      <div className="service-icon purple">
        <FaBuilding />
      </div>
      <h4>Company Registration</h4>
    </div>

    <div
      className="service-card"
      data-aos="zoom-in-up"
      data-aos-delay="400"
    >
      <div className="service-icon red">
        <FaClipboardList />
      </div>
      <h4>ROC Filing</h4>
    </div>

    <div
      className="service-card"
      data-aos="zoom-in-up"
      data-aos-delay="500"
    >
      <div className="service-icon cyan">
        <FaTrademark />
      </div>
      <h4>Trademark Registration</h4>
    </div>

    <div
      className="service-card"
      data-aos="zoom-in-up"
      data-aos-delay="600"
    >
      <div className="service-icon orange">
        <FaShieldAlt />
      </div>
      <h4>Audit & Assurance</h4>
    </div>

    <div
      className="service-card"
      data-aos="zoom-in-up"
      data-aos-delay="700"
    >
      <div className="service-icon violet">
        <FaBook />
      </div>
      <h4>Bookkeeping</h4>
    </div>

    <div
      className="service-card"
      data-aos="zoom-in-up"
      data-aos-delay="800"
    >
      <div className="service-icon navy">
        <FaUsers />
      </div>
      <h4>Payroll Services</h4>
    </div>

  </div>

</section>



{/* Top Rated CA & Firms */}

<section
  className="top-ca-section"
  data-aos="fade-up"
>

  <div className="top-ca-header">
    <h2>Top Rated CA & Firms</h2>

    <a href="/" className="view-all-ca">
      View All →
    </a>
  </div>

  <div className="ca-slider-wrapper">

    <button className="ca-prev">
      <FaChevronLeft />
    </button>

    <button className="ca-next">
      <FaChevronRight />
    </button>

    <Swiper
      modules={[Navigation]}
      navigation={{
        prevEl: ".ca-prev",
        nextEl: ".ca-next",
      }}
      spaceBetween={20}
      slidesPerView={4}
      slidesPerGroup={1}
      speed={700}
      breakpoints={{
        320: {
          slidesPerView: 1.1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      }}
      className="ca-swiper"
    >

      {[
        {
          img: "https://randomuser.me/api/portraits/men/32.jpg",
          name: "Verma & Associates",
          rating: "4.8 (230)",
          city: "Mumbai, Maharashtra",
          service: "GST Filing, ITR, Audit",
          price: "₹999",
        },
        {
          img: "https://randomuser.me/api/portraits/women/44.jpg",
          name: "Sharma Tax Experts",
          rating: "4.9 (186)",
          city: "Delhi, Delhi",
          service: "ITR, GST, ROC Filing",
          price: "₹799",
        },
        {
          img: "https://randomuser.me/api/portraits/men/45.jpg",
          name: "Rao & Co. Chartered Accountants",
          rating: "4.7 (150)",
          city: "Bengaluru, Karnataka",
          service: "Audit, Accounting, Tax",
          price: "₹899",
        },
        {
          img: "https://randomuser.me/api/portraits/women/65.jpg",
          name: "Mehta CA Firm",
          rating: "4.8 (205)",
          city: "Pune, Maharashtra",
          service: "GST, ITR, Bookkeeping",
          price: "₹699",
        },
        {
          img: "https://randomuser.me/api/portraits/men/55.jpg",
          name: "Gupta & Associates",
          rating: "4.9 (310)",
          city: "Hyderabad, Telangana",
          service: "GST, Audit, Tax Filing",
          price: "₹1099",
        },
        {
          img: "https://randomuser.me/api/portraits/women/50.jpg",
          name: "Agarwal Tax Solutions",
          rating: "4.8 (278)",
          city: "Chennai, Tamil Nadu",
          service: "ROC, ITR, Accounting",
          price: "₹899",
        },
      ].map((ca, index) => (

        <SwiperSlide key={index}>

          <div
            className="ca-card"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >

            <div className="ca-card-top">

              <img
                src={ca.img}
                alt={ca.name}
              />

              <div className="ca-content">

                <div className="ca-head">

                  <h4>{ca.name}</h4>

                  <FaRegBookmark className="bookmark-icon" />

                </div>

                <p className="rating">
                  ⭐ {ca.rating}
                </p>

                <p className="location">
                  {ca.city}
                </p>

                <p className="service">
                  {ca.service}
                </p>

                <h5>
                  Starting from {ca.price}
                </h5>

              </div>

            </div>

            <button className="profile-btn">
              View Profile
            </button>

          </div>

        </SwiperSlide>

      ))}

    </Swiper>

  </div>

</section>









{/* HOW IT WORKS */}

<section className="how-section">

  <div
    className="how-heading"
    data-aos="fade-up"
  >
    <h2>How It Works</h2>
  </div>

  <div className="how-grid">

    {/* STEP 1 */}

    <div
      className="how-card"
      data-aos="fade-right"
      data-aos-delay="100"
    >
      <div className="how-icon">
        <FaSearch />
      </div>

      <div className="how-content">
        <h4>1. Search</h4>

        <p>
          Search for services
          
          or CAs near you
        </p>
      </div>
    </div>

    <div className="how-arrow"></div>

    {/* STEP 2 */}

    <div
      className="how-card"
      data-aos="fade-right"
      data-aos-delay="200"
    >
      <div className="how-icon">
        <FaClipboardList />
      </div>

      <div className="how-content">
        <h4>2. Compare</h4>

        <p>
          Compare profiles,
          reviews and pricing
        </p>
      </div>
    </div>

    <div className="how-arrow"></div>

    {/* STEP 3 */}

    <div
      className="how-card"
      data-aos="fade-right"
      data-aos-delay="300"
    >
      <div className="how-icon">
        <FaPaperPlane />
      </div>

      <div className="how-content">
        <h4>3. Connect</h4>

        <p>
          Submit enquiry or
          book consultation
        </p>
      </div>
    </div>

    <div className="how-arrow"></div>

    {/* STEP 4 */}

    <div
      className="how-card"
      data-aos="fade-right"
      data-aos-delay="400"
    >
      <div className="how-icon">
        <FaCheckCircle />
      </div>

      <div className="how-content">
        <h4>4. Get It Done</h4>

        <p>
          Get your work done
          with ease
        </p>
      </div>
    </div>

  </div>

</section>













<section className="expert-banner">

  {/* LEFT IMAGE */}

  <div
    className="expert-left"
    data-aos="fade-right"
  >
    <img src={home1} alt="Calendar" />
  </div>

  {/* CONTENT */}

  <div
    className="expert-content"
    data-aos="fade-up"
  >
    <h2>
      Talk to Experts Instantly
      <span> ✨</span>
    </h2>

    <p>
      30-Min Consultation with Verified CA Professionals
    </p>

    <div className="expert-features">

      <div className="expert-feature">
        <FaClock />
        <span>30 Min Session</span>
      </div>

      <div className="expert-feature">
        <FaLightbulb />
        <span>Expert Guidance</span>
      </div>

      <div className="expert-feature">
        <FaMapMarkerAlt />
        <span>Secure & Private</span>
      </div>

    </div>
  </div>

  {/* PRICE */}

  <div
    className="expert-price-box"
    data-aos="zoom-in"
  >
    <small>Starting from</small>

    <h3>₹999/-</h3>

    <div className="expert-btns">

      <button className="book-btn">
        Book Now
      </button>

      <button className="plan-btn">
        Explore Plans
      </button>

    </div>
  </div>

  {/* RIGHT IMAGE */}

  <div
    className="expert-right"
    data-aos="fade-left"
  >
    <img src={home2} alt="Experts" />
  </div>

</section>










<section className="ai-assistant-section">
  <div className="ai-assistant-container">

    {/* LEFT CHAT CARD */}
    <div
      className="chat-card"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <div className="chat-header">
        <i className="fas fa-robot"></i>
        <span>CA AI Assistant</span>
      </div>

      <div className="chat-message user">
        Hello! How can I help you today?
      </div>

      <div className="chat-message question">
        What is the last date for GST Filing?
      </div>

      <div className="chat-message answer">
        The last date for filing GSTR-1 is
        <br />
        the 11th of next month.
      </div>

      <div className="chat-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    {/* CENTER CONTENT */}
    <div
      className="assistant-content"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h2>
        Your AI Assistant for
        <br />
        All Tax & Compliance Questions
      </h2>

      <ul>
        <li>
          <i className="fas fa-check-circle"></i>
          <span>Get instant answers to your queries</span>
        </li>

        <li>
          <i className="fas fa-check-circle"></i>
          <span>Find the right CA for your needs</span>
        </li>

        <li>
          <i className="fas fa-check-circle"></i>
          <span>Understand tax & compliance easily</span>
        </li>

        <li>
          <i className="fas fa-check-circle"></i>
          <span>Upload documents and get guidance</span>
        </li>
      </ul>

      <button className="assistant-btn">
        Try AI Assistant
      </button>
    </div>

    {/* RIGHT ROBOT */}
    <div
      className="robot-box"
      data-aos="fade-left"
      data-aos-duration="1000"
    >
      

      <img
        src={home3}
        alt="AI Assistant Robot"
      />
    </div>

  </div>
</section>







<section className="faq-section">

  <div className="faq-container">

    {/* LEFT FAQ */}

    <div
      className="faq-left"
      data-aos="fade-right"
      data-aos-duration="1000"
    >

      <h2>Frequently Asked Questions</h2>

      <details className="faq-item" open>
        <summary className="faq-question">
          <span>How can I find a trusted CA near me?</span>
        </summary>

        <div className="faq-answer">
          Browse verified Chartered Accountants, compare profiles,
          ratings and reviews to choose the right CA for your
          business or personal requirements.
        </div>
      </details>

      <details className="faq-item">
        <summary className="faq-question">
          <span>How does online consultation work?</span>
        </summary>

        <div className="faq-answer">
          Book a consultation slot, connect with a CA through
          video or phone call and receive expert guidance
          from anywhere.
        </div>
      </details>

      <details className="faq-item">
        <summary className="faq-question">
          <span>Is my data and payment information secure?</span>
        </summary>

        <div className="faq-answer">
          Yes. We use secure payment gateways and encrypted
          communication systems to keep your personal and
          financial information safe.
        </div>
      </details>

      <details className="faq-item">
        <summary className="faq-question">
          <span>How are the fees and pricing decided?</span>
        </summary>

        <div className="faq-answer">
          Pricing depends on the service type, complexity
          and the experience level of the CA selected.
        </div>
      </details>

      <details className="faq-item">
        <summary className="faq-question">
          <span>Can I upload documents online?</span>
        </summary>

        <div className="faq-answer">
          Yes. You can securely upload documents, share files
          with professionals and receive guidance online.
        </div>
      </details>

      <a href="/" className="faq-link">
        View All FAQs
        <i className="fas fa-arrow-right"></i>
      </a>

    </div>

    {/* RIGHT SUPPORT CARD */}

    <div
      className="support-card"
      data-aos="fade-left"
      data-aos-duration="1000"
    >

      <div className="support-content">

        <div className="support-badge">
          <i className="fas fa-headset"></i>
          Support Available 24/7
        </div>

        <h3>
            
          Need Help ?
        </h3>

        <p>
          Get expert assistance for GST filing,
          Income Tax, Business Registration,
          Compliance and Professional Services.
        </p>

        <div className="support-buttons">

          <button className="contact-btn">
            Contact Support
          </button>

          <button className="chat-btn">
            Live Chat
          </button>

        </div>

      </div>

      <div className="support-image">

        <img
          src={home4}
          alt="Support Team"
        />

      </div>

    </div>

  </div>

</section>

















    </>
  );
}

export default Home;