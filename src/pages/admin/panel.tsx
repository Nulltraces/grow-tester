import React, { useState } from "react";

// Dummy admin check – replace with your actual check if needed
const isAdmin = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userEmail") === "admin@example.com";
  }
  return false;
};

// Helper: Check ticket and mark as used if valid
function checkAndUseTicket(growId: string, code: string) {
  const tickets = JSON.parse(localStorage.getItem("depositTickets") || "[]");
  const idx = tickets.findIndex(
    (t: any) => t.growId === growId && t.code === code && !t.used
  );
  if (idx !== -1) {
    tickets[idx].used = true;
    localStorage.setItem("depositTickets", JSON.stringify(tickets));
    return true;
  }
  return false;
}

// Helper: Simulate user balances in localStorage
function addBalance(growId: string, amount: number) {
  const balances = JSON.parse(localStorage.getItem("userBalances") || "{}");
  balances[growId] = (balances[growId] || 0) + amount;
  localStorage.setItem("userBalances", JSON.stringify(balances));
  return balances[growId];
}

export default function AdminPanel() {
  const [growId, setGrowId] = useState("");
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const [currentBalance, setCurrentBalance] = useState<number | null>(null);

  const handleSetBalance = () => {
    if (!isAdmin()) {
      setMessage("Access denied.");
      return;
    }
    if (!growId || !code || !amount) {
      setMessage("Please fill all fields.");
      return;
    }
    if (checkAndUseTicket(growId, code)) {
      const newBalance = addBalance(growId, parseFloat(amount));
      setCurrentBalance(newBalance);
      setMessage(`Success: Added ${amount} to ${growId}.`);
    } else {
      setCurrentBalance(null);
      setMessage("Invalid or already used ticket code for this GrowID.");
    }
  };

  return (
    <div style={{
      maxWidth: 400, margin: "40px auto", padding: 24, borderRadius: 8,
      background: "#111", color: "#fff", boxShadow: "0 2px 8px #0004"
    }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 20 }}>
        Admin Panel – Add Balance via Ticket
      </h2>
      <input
        type="text"
        placeholder="GrowID"
        value={growId}
        onChange={e => setGrowId(e.target.value)}
        style={{ width: "100%", marginBottom: 10, padding: 8, borderRadius: 4 }}
      />
      <input
        type="text"
        placeholder="Ticket Code"
        value={code}
        onChange={e => setCode(e.target.value)}
        style={{ width: "100%", marginBottom: 10, padding: 8, borderRadius: 4 }}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        style={{ width: "100%", marginBottom: 10, padding: 8, borderRadius: 4 }}
      />
      <button
        onClick={handleSetBalance}
        style={{
          width: "100%", padding: 10, background: "#2d72fa",
          color: "#fff", border: 0, borderRadius: 4, fontWeight: 600
        }}
      >
        Add Balance
      </button>
      {message && (
        <div style={{ marginTop: 16, color: message.startsWith("Success") ? "lime" : "salmon" }}>
          {message}
          {currentBalance !== null && (
            <div style={{ fontSize: 14, color: "#fff" }}>
              New balance for <b>{growId}</b>: <b>{currentBalance}</b>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
