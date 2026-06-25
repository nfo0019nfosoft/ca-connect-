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
  FaBookmark,
  FaPaperPlane,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaUsers,
  FaArrowRight,
  FaRegCalendarAlt,
  FaRegClock,

} from "react-icons/fa";
import {
  HiOutlineUserGroup,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Home() {

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);
    const [searchDone, setSearchDone] = useState(false);
const [searchResults, setSearchResults] = useState([]);
  const [city, setCity] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [service, setService] = useState("");



  const [allServices, setAllServices] = useState([]);

  const [vendors, setVendors] = useState([]);


  useEffect(() => {
    fetchTopVendors();
  }, []);

  useEffect(() => {

    fetchServices();

  }, []);



const handleSearch = async (selectedService = service) => {

  try{

    const res = await axios.get(
      "https://ca-backend-d9tc.onrender.com/api/vendor/search",
      {
        params:{
          service:selectedService,
          city,
          businessType
        }
      }
    );

    setSearchDone(true);

    setSearchResults(
      Array.isArray(res.data)
        ? res.data
        : res.data.vendors || []
    );

  }catch(err){

    setSearchDone(true);
    setSearchResults([]);

  }

}





const [savedVendors, setSavedVendors] = useState([]);

const handleSaveVendor = async (vendorId) => {

  const token = localStorage.getItem("token");

  if (!token) {

    alert("Please login to save vendors.");

    navigate("/login");

    return;

  }

  try {

    const res = await axios.post(
      "http://localhost:5000/api/saved/save",
      { vendorId },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);

    setSavedVendors((prev) => [...prev, vendorId]);

  } catch (err) {

    console.log(err);

    alert("Unable to save vendor.");

  }

};


  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/blogs"
      );

      setBlogs(res.data);

    }

    catch (err) {

      console.log(err);

    }

  };




  const fetchServices = async () => {

    try {

      const res = await axios.get(
        "https://ca-backend-d9tc.onrender.com/api/vendor/all-services"
      );

      setAllServices(res.data);

    } catch (err) {

      console.log(err);

    }

  };

 

  const fetchTopVendors = async () => {

  try {

    const res = await axios.get(
      "https://ca-backend-d9tc.onrender.com/api/vendor"
    );

    setVendors(
      Array.isArray(res.data)
        ? res.data
        : res.data.vendors || []
    );

  }

  catch (err) {

    console.log(err);

  }

};


  const navigate = useNavigate();






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
            className="hero-feaures"
            data-aos="fade-up"
            data-aos-delay="500"
          >

            <div className="feaure">
              <FaShieldAlt className="feaure-icon" />
              <span>Verified Professionals</span>
            </div>

            <div className="feaure">
              <FaWallet className="feaure-icon" />
              <span>Transparent Pricing</span>
            </div>

            <div className="feaure">
              <FaLock className="feaure-icon" />
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

      <section className="ca-search-box">

        <div className="ca-search-heading">

          <div className="ca-heading-row">
            <HiOutlineUserGroup className="ca-heading-icon" />
            <h3>Find CA / Firm</h3>
          </div>

          <div className="ca-heading-line"></div>

        </div>

        <div className="ca-search-label-row">

          <span>What do you need help with?</span>

          <span>Where?</span>

          <span>Select Business Type (Optional)</span>

          <span></span>

        </div>

        <div className="ca-search-fields">

          {/* Service */}

          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">
              Select Service
            </option>

            {
              allServices.map((item, index) => (
                <option
                  key={index}
                  value={item}
                >
                  {item}
                </option>
              ))
            }

          </select>

          {/* Location */}

          <div className="ca-location-box">

            <input
              type="text"
              placeholder="Enter City or Area"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            <HiOutlineLocationMarker className="ca-location-icon" />

          </div>

          {/* Business Type */}

          <select
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
          >

            <option value="">
              All Business Types
            </option>

            <option value="Individual">
              Individual
            </option>

            <option value="Partnership">
              Partnership
            </option>

            <option value="Company">
              Company
            </option>

            <option value="LLP">
              LLP
            </option>

          </select>

          {/* Search Button */}

          <button
            type="button"
            className="ca-search-btn"
            onClick={() => handleSearch()}
          >

            <FaSearch />

            Search Now

          </button>

        </div>

        {/* Popular Searches */}

        <div className="ca-popular-tags">

          <span>
            Popular Searches :
          </span>

          {

            allServices.slice(0, 8).map((item, index) => (

              <button
                type="button"
                key={index}
                onClick={() => {

                  setService(item);

                  handleSearch(item);

                }}
              >

                {item}

              </button>

            ))

          }

        </div>
{searchDone && (

  <div className="ca-search-results">

    {searchResults.length > 0 ? (

      <div className="ca-search-result-list">

        {searchResults.map((vendor) => (

          <div
            className="ca-search-result-card"
            key={vendor._id}
          >

            <img
              src={
                vendor.photo
                  ? `https://ca-backend-d9tc.onrender.com/uploads/${vendor.photo}`
                  : "/avatar.png"
              }
              alt={vendor.fullName}
            />

            <div className="ca-search-result-info">

              <h4>{vendor.firmName || vendor.fullName}</h4>

              <p>
                📍 {vendor.city}, {vendor.state}
              </p>

              <p>
                {vendor.services?.length > 0
                  ? vendor.services
                      .map((s) => s.serviceName)
                      .join(", ")
                  : "No Services"}
              </p>

            </div>

            <button
              className="ca-view-profile-btn"
              onClick={() => navigate(`/vendor/${vendor._id}`)}
            >
              View Profile
            </button>

          </div>

        ))}

      </div>

    ) : (

      <div className="ca-no-results">

        <h3>No CA / Firm Found</h3>

        <p>
          No Chartered Accountant available for your search.
        </p>

      </div>

    )}

  </div>

)}

      </section>


      {/* Popular Services Section */}

      <section className="popula-services-section">

        <div
          className="popula-services-header"
          data-aos="fade-up"
        >
          <h2>Popular Services</h2>

          <a href="/service" className="popula-view-all">
            View All Services
            <FaArrowRight />
          </a>
        </div>

        <div className="popula-services-grid">

          <div className="popula-service-card">
            <div className="popula-service-icon popula-green">
              <FaFileInvoice />
            </div>
            <h4>GST Filing</h4>
          </div>

          <div className="popula-service-card">
            <div className="popula-service-icon popula-blue">
              <FaClipboardList />
            </div>
            <h4>Income Tax Filing</h4>
          </div>

          <div className="popula-service-card">
            <div className="popula-service-icon popula-purple">
              <FaBuilding />
            </div>
            <h4>Company Registration</h4>
          </div>

          <div className="popula-service-card">
            <div className="popula-service-icon popula-red">
              <FaClipboardList />
            </div>
            <h4>ROC Filing</h4>
          </div>

          <div className="popula-service-card">
            <div className="popula-service-icon popula-cyan">
              <FaTrademark />
            </div>
            <h4>Trademark Registration</h4>
          </div>

          <div className="popula-service-card">
            <div className="popula-service-icon popula-orange">
              <FaShieldAlt />
            </div>
            <h4>Audit & Assurance</h4>
          </div>

          <div className="popula-service-card">
            <div className="popula-service-icon popula-violet">
              <FaBook />
            </div>
            <h4>Bookkeeping</h4>
          </div>

          <div className="popula-service-card">
            <div className="popula-service-icon popula-navy">
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

          <a href="/find-ca" className="view-all-ca">
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
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = ".ca-prev";
              swiper.params.navigation.nextEl = ".ca-next";
            }}
            navigation={{
              prevEl: ".ca-prev",
              nextEl: ".ca-next",
            }}
            spaceBetween={20}
            slidesPerView={3}
            speed={700}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="ca-swiper"
          >
            {vendors.map((ca, index) => (

              <SwiperSlide key={ca._id || index}>

                <div
                  className="ca-card"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                >

                  <div className="ca-card-top">

                    <img
                      src={
                        ca.photo
                          ? `https://ca-backend-d9tc.onrender.com/uploads/${ca.photo}`
                          : "/avatar.png"
                      }
                      alt={ca.fullName}
                    />

                    <div className="ca-content">

                      <div className="ca-head">

                        <h4>
                          {ca.firmName ||
                            ca.fullName}
                        </h4>


{
  savedVendors.includes(ca._id) ? (

    <FaBookmark
      className="bookmark-icon saved"
      onClick={() => handleSaveVendor(ca._id)}
    />

  ) : (

    <FaRegBookmark
      className="bookmark-icon"
      onClick={() => handleSaveVendor(ca._id)}
    />

  )
}

                      </div>

                      <p className="rating">
                        ⭐ {ca.rating || "4.8 (0)"}
                      </p>

                      <p className="location">
                        {ca.city || "Location"}
                        {ca.state
                          ? `, ${ca.state}`
                          : ""}
                      </p>

                      <p className="service">
                        {ca.services?.length > 0
                          ? ca.services
                            .map(
                              (service) =>
                                service.serviceName
                            )
                            .join(", ")
                          : "CA Services"}
                      </p>

                      <h5>
                        Starting from ₹
                        {ca.services?.length > 0
                          ? ca.services[0].price
                          : 999}
                      </h5>
                    </div>

                  </div>


                <button
  className="profile-btn"
  onClick={() => navigate(`/vendor/${ca._id}`)}
>
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

  <div className="how-heading">
    <span className="how-tag">Simple Process</span>
    <h2>How It Works</h2>
    <p>
      Connect with verified Chartered Accountants in just four simple steps.
    </p>
  </div>

  <div className="how-grid">

    <div className="how-card">

      <div className="how-number">01</div>

      <div className="how-icon">
        <FaSearch />
      </div>

      <h4>Search</h4>

      <p>
        Search for the service you need and choose your preferred location.
      </p>

    </div>

    <div className="how-line"></div>

    <div className="how-card">

      <div className="how-number">02</div>

      <div className="how-icon">
        <FaClipboardList />
      </div>

      <h4>Compare</h4>

      <p>
        Compare CA profiles, pricing, experience and customer reviews.
      </p>

    </div>

    <div className="how-line"></div>

    <div className="how-card">

      <div className="how-number">03</div>

      <div className="how-icon">
        <FaPaperPlane />
      </div>

      <h4>Connect</h4>

      <p>
        Send enquiry or instantly book an online consultation.
      </p>

    </div>

    <div className="how-line"></div>

    <div className="how-card">

      <div className="how-number">04</div>

      <div className="how-icon">
        <FaCheckCircle />
      </div>

      <h4>Get It Done</h4>

      <p>
        Complete your compliance work quickly and securely.
      </p>

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
<button
  className="assistant-btn"
  onClick={() => navigate("/ai-assistant")}
>
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












      <section className="home-blog-section">

        <div className="home-blog-header">

          <h2>Latest from Our Blog</h2>

          <Link
            to="/blogs"
            className="home-blog-viewall"
          >
            View All Blogs →
          </Link>

        </div>

        <div className="home-blog-grid">

          {

            blogs.slice(0, 4).map((blog) => (

              <Link
                key={blog._id}
                to={`/blog/${blog.slug}`}
                className="home-blog-card"
              >

                <div className="home-blog-image">

                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                  />

                  <span className="home-blog-category">

                    {blog.category}

                  </span>

                </div>

                <div className="home-blog-content">

                  <h3>

                    {blog.title}

                  </h3>

                  <div className="home-blog-meta">

                    <div className="home-blog-date">

                      <FaRegCalendarAlt />

                      <span>
                        {blog.publishDate}
                      </span>

                    </div>

                    <div className="home-blog-time">

                      <FaRegClock />

                      <span>
                        {blog.readTime}
                      </span>

                    </div>

                  </div>

                </div>

              </Link>

            ))

          }

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

            <details className="faq-item" >
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
                <Link to="/support" className="contact-btn">
                  Contact Support
                </Link>

                <Link to="/ai-assistant" className="chat-btn">
                  Live Chat
                </Link>

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