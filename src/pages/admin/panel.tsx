import React, { useState } from "react";

// Dummy authentication check (replace with real auth in production)
const isAdmin = () => {
  // Replace with your own logic (e.g. check user email from session)
  if (typeof window !== "undefined") {
    return localStorage.getItem("userEmail") === "admin@example.com";
  }
  return false;
};

const AdminPanel: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleBalanceChange = async () => {
    // TODO: Replace with your real backend API call
    setMessage(`Set balance of user "${userId}" to ${amount}`);
  };

  if (!isAdmin()) {
    return <div>Access Denied</div>;
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h2>Admin Panel - Edit User Balance</h2>
      <input
        type="text"
        placeholder="User ID or Email"
        value={userId}
        onChange={e => setUserId(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <input
        type="number"
        placeholder="New Balance"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        style={{ width: "100%", marginBottom: "1rem" }}
      />
      <button onClick={handleBalanceChange} style={{ width: "100%" }}>
        Set Balance
      </button>
      {message && <div style={{ marginTop: "1rem", color: "green" }}>{message}</div>}
    </div>
  );
};

export default AdminPanel;
