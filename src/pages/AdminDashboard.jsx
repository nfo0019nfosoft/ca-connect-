import React from "react";
import UserSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  return (
    <>
      <UserSidebar />

      <div
        style={{
          marginLeft: "220px",
          minHeight: "100vh",
          padding: "30px",
          background: "#f7f8fc",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontSize: "32px",
            fontWeight: "600",
          }}
        >
          Admin Dashboard
        </h1>

        <div
          style={{
            marginTop: "20px",
            background: "#fff",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
          }}
        >
          Welcome to your dashboard
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;