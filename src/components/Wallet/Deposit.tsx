import React, { useState } from "react";
import { Input } from "..";

const isAdmin = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("userEmail") === "admin@example.com";
  }
  return false;
};

function generateTicketCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function saveTicket(growId: string, code: string) {
  const tickets = JSON.parse(localStorage.getItem("depositTickets") || "[]");
  tickets.push({ growId, code, used: false });
  localStorage.setItem("depositTickets", JSON.stringify(tickets));
}

export default function Deposit() {
  const [growId, setGrowId] = useState("");
  const [ticketCode, setTicketCode] = useState<string | null>(null);
  const [showTicket, setShowTicket] = useState(false);

  const startDeposit = () => {
    if (isAdmin()) {
      // Admin logic here (optional)
      return;
    }
    const code = generateTicketCode();
    setTicketCode(code);
    setShowTicket(true);
    saveTicket(growId, code);
  };

  const handleCloseTicket = () => {
    setShowTicket(false);
    setTicketCode(null);
  };

  return (
    <div>
      <h2>Deposit</h2>
      <Input
        type="text"
        value={growId}
        onChange={(e) => setGrowId(e.target.value)}
        placeholder="Your GrowID"
      />
      <button disabled={!growId || growId.length < 6} onClick={startDeposit}>
        Get Deposit Ticket
      </button>

      {showTicket && ticketCode && (
        <div style={{ background: "#222", color: "#fff", padding: 20, borderRadius: 8, marginTop: 20 }}>
          <h3>Deposit Ticket</h3>
          <p>
            Please give this ticket code and your GrowID to an admin in our&nbsp;
            <a href="https://discord.gg/YOUR_DISCORD_INVITE" target="_blank" rel="noopener noreferrer" style={{ color: "#80b3ff" }}>
              Discord server
            </a>
            .
          </p>
          <p>
            <b>Ticket Code:</b> <span style={{ fontFamily: "monospace" }}>{ticketCode}</span>
            <br />
            <b>GrowID:</b> <span style={{ fontFamily: "monospace" }}>{growId}</span>
          </p>
          <button onClick={handleCloseTicket} style={{ marginTop: 10 }}>
            Close
          </button>
        </div>
      )}
    </div>
  );
}
