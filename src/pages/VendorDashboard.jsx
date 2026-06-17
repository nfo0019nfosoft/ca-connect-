import Sidebar from "../components/Sidebar";
import "./VendorProfile.css";

function VendorDashboard() {
  return (
    <div className="profile-layout">

      <Sidebar />

      <div className="profile-content">
        <h1>Vendor Dashboard</h1>
      </div>

    </div>
  );
}

export default VendorDashboard;