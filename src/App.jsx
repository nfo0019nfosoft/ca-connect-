import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Service from "./pages/Service";
import AIAssistant from "./pages/ai-assistant";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import AboutUs from "./pages/AboutUs";
import FindCA from "./pages/FindCA";
import VendorDetails from "./pages/VendorDetails"

import VendorDashboard from "./pages/VendorDashboard";
import VendorProfile from "./pages/VendorProfile";
import VendorKyc from "./pages/VendorKyc";
import VendorServices from "./pages/VendorServices";
import VendorPreview from "./pages/VendorPreview";
import UserDashboard from "./pages/UserDashboard";
import UserProfile from "./pages/UserProfile";
import UserBusinessDetails from "./pages/UserBusinessDetails";
import UserUploadedDocuments from "./pages/UserUploadedDocuments";
import UserAccountVerification from "./pages/UserAccountVerification";
import FreeEnquiry from "./pages/FreeEnquiry"
import VendorPayment from "./pages/VendorPayment";
import BookConsultation from "./pages/BookConsultation";
import Admin from "./pages/Admin";


function Layout() {
  const location = useLocation();




  const dashboardRoutes = [
  "/vendor-dashboard",
  "/vendor-profile",
  "/vendor-kyc",
  "/vendor-services",
  "/vendor-preview",
  "/vendor-payment",
  "/user-dashboard",
  "/user-profile",
  "/user-business-details",
  "/user-uploaded-documents",
  "/user-account-verification",
  "/admin"
];

const hideNavbarFooter =
  dashboardRoutes.includes(location.pathname);

  console.log("PATH:", location.pathname);
  console.log("HIDE:", hideNavbarFooter);

  return (
    <>
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/find-ca" element={<FindCA />} />
        <Route path="/vendor/:id" element={<VendorDetails/>}/>
        <Route path="/free-enquiry/:vendorId" element={<FreeEnquiry />}/>
        <Route path="/book-consultation/:id" element={<BookConsultation />}
  />
        
          {/* Admin Pages */}

  <Route path="/admin" element={<Admin />} />









        {/* Vendor Pages */}
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/vendor-profile" element={<VendorProfile />} />
        <Route path="/vendor-kyc" element={<VendorKyc />} />
        <Route path="/vendor-services" element={<VendorServices />} />
        <Route path="/vendor-preview" element={<VendorPreview />} />
          <Route path="/vendor-payment" element={<VendorPayment />} />

        {/* User Pages */}
        <Route path="/user-dashboard" element={<UserDashboard />} />
         <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/user-business-details" element={<UserBusinessDetails />} />
           <Route path="/user-uploaded-documents" element={<UserUploadedDocuments />} />
            <Route path="/user-account-verification" element={<UserAccountVerification />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;