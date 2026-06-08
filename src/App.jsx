import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Service from "./pages/Service";
import AIAssistant from "./pages/ai-assistant";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;