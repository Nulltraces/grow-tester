import React, { useState } from "react";

const AdminPanel: React.FC = () => {
  const [userId, setUserId] = useState("");
  const [amount, setAmount] = useState("");
  const [ticketCode, setTicketCode] = useState("");
  const [message, setMessage] = useState("");

  const handleSetBalance = async () => {
    try {
      const res = await fetch("/api/admin/add-balance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add admin key or credentials here if needed
          "x-admin-key": "YOUR_ADMIN_SECRET"
        },
        body: JSON.stringify({ userId, amount, ticketCode })
      });
      const data = await res.json();
      setMessage(data.success ? data.message : data.error);
    } catch (err) {
      setMessage("Request failed.");
    }
  };

  return (
    <div>
      <h2>Admin Panel - Set User Balance</h2>
      <input type="text" placeholder="User Email or ID" value={userId} onChange={e => setUserId(e.target.value)} />
      <input type="number" placeholder="Amount to Add" value={amount} onChange={e => setAmount(e.target.value)} />
      <input type="text" placeholder="Ticket Code" value={ticketCode} onChange={e => setTicketCode(e.target.value)} />
      <button onClick={handleSetBalance}>Set Balance</button>
      {message && <div>{message}</div>}
    </div>
  );
};

export default AdminPanel;
