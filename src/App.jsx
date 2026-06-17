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


function Layout() {
  const location = useLocation();

  const hideNavbarFooter =
    location.pathname.startsWith("/vendor") ||
    location.pathname.startsWith("/user");

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

        {/* Vendor Pages */}
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/vendor-profile" element={<VendorProfile />} />
        <Route path="/vendor-kyc" element={<VendorKyc />} />
        <Route path="/vendor-services" element={<VendorServices />} />
        <Route path="/vendor-preview" element={<VendorPreview />} />

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