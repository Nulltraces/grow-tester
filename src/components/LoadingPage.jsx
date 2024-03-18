import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function LoadingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/home");
    });

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);
  return (
    <div className="loading">
      <div className="load">
        <img style={{ height: "70px" }} src="/Images/grow_game_icon.png" alt="" />
        <h1>JOIN OUR DISCORD SERVER</h1>
      </div>
    </div>
  );
}
