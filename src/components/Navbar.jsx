import React, { useState, useEffect } from "react";
import "../Navbar.css";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import NavbarIcons from "./NavbarIcons";
import Signup from "../pages/Signup.jsx";
import { Overlay } from "react-bootstrap";
import Login from "../pages/Login.jsx";
import { useCookies } from "react-cookie";
import API_BASE_URL from "../config.js";
import currency_dl from "../imgs/currency_dl.png";
import DepositWithdrawPage from "./Deposit-Withdraw";

// import Share from "./Share";

// import { useNavigate } from 'react-router-dom';

const Navbar = ({ value }) => {
  const [show, setShow] = useState(false);
  const [model, setModel] = useState(false);
  const [model1, setModel1] = useState(false);
  const [user, setUser] = useState(false);
  const [DWpage, setDWpage] = useState(false);
  // const [currentUserData, setCurrentUserData] = useState({});
  const [cookies] = useCookies(["jwt"]);
  const [balance, setbalance] = useState(0);

  useEffect(() => {
    setUser(localStorage.getItem("userName"));
  }, []);
  if (cookies.jwt === undefined) {
    if (localStorage.getItem("userName")) {
      window.location.href = API_BASE_URL + "/logout";
    }
    localStorage.removeItem("userName");
  }

  const jsonData = { jwt: cookies.jwt };
  const queryString = Object.keys(jsonData)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(jsonData[key])}`
    )
    .join("&");
  useEffect(() => {
    try {
      fetch(API_BASE_URL + "/api/auth/my-data?" + queryString)
        .then((response) => response.json())
        .then((data) => setbalance(data.balance));
      // setbalance(currentUserData.balance);
    } catch (error) {
      alert("no user info !");
      setUser("");
    }
  }, [queryString]);
  // setvalue(currentUserData.balance);
  return (
    <div className="navbar_container">
      <div className="Navbar">
        <Link to="/">
          <img
            style={{ height: "35px" }}
            src="/Images/grow_game_icon.png"
            alt=""
          />
        </Link>
        <div>
          <NavbarIcons />
        </div>
        <div className={`nav-items items `}>
          <div className="search_bar">
            <img src="/images/search.svg" alt="" />
          </div>
          {user ? (
            <>
              {value ? (
                <>
                  <div className="user_info">
                    <div className="currency">
                      <span className="balance">{value}</span>
                      <img
                        alt="lock"
                        src={currency_dl}
                        class="growdice-image2 dl"
                      />
                    </div>
                    <button
                      className="wallet"
                      onClick={() => {
                        setDWpage(true);
                      }}
                    >
                      <svg
                        className="wallet_svg"
                        stroke="currentColor"
                        fill="white"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                      </svg>
                    </button>
                    <div>
                      <h1
                        style={{
                          fontSize: "24px",
                          marginTop: "5px",
                          paddingLeft: "7px",
                        }}
                      >
                        {user}
                      </h1>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="user_info">
                    <div className="currency">
                      <span className="balance">{balance}</span>
                      <img
                        alt="lock"
                        src={currency_dl}
                        class="growdice-image2 dl"
                      />
                    </div>
                    <button
                      className="wallet"
                      onClick={() => {
                        setDWpage(true);
                      }}
                    >
                      <svg
                        className="wallet_svg"
                        stroke="currentColor"
                        fill="white"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M461.2 128H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h384c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h397.2c28.02 0 50.8-21.53 50.8-48V176c0-26.47-22.78-48-50.8-48zM416 336c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"></path>
                      </svg>
                    </button>
                    <div>
                      <h1
                        style={{
                          fontSize: "24px",
                          marginTop: "5px",
                          paddingLeft: "7px",
                        }}
                      >
                        {user}
                      </h1>
                    </div>
                  </div>
                </>
              )}
            </>
          ) : (
            <>
              <div>
                <button
                  onClick={() => setModel1(true)}
                  className="creat_accout1"
                >
                  Sign In
                </button>
              </div>
              <div>
                <button onClick={() => setModel(true)} className="creat_accout">
                  Register
                </button>

                <Overlay show={model} placement="right">
                  {({ arrowProps }) => (
                    <div
                      style={{
                        height: "100vh",
                        width: "100%",
                        position: "fixed",
                        top: "0%",
                        left: "0%",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        padding: "2px 10px",
                        color: "white",
                        borderRadius: 3,
                        zIndex: 5777777,
                      }}
                      className="d-flex justify-content-center align-items-center"
                      // onClick={() => setModel(false)}
                    >
                      <>
                        <Signup setModel={setModel} />
                      </>
                    </div>
                  )}
                </Overlay>
                <Overlay show={model1} placement="right">
                  {({ arrowProps }) => (
                    <div
                      style={{
                        height: "100vh",
                        width: "100%",
                        position: "fixed",
                        top: "0%",
                        left: "0%",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        padding: "2px 10px",
                        color: "white",
                        borderRadius: 3,
                        zIndex: 5777777,
                      }}
                      className="d-flex justify-content-center align-items-center"
                      // onClick={() => setModel(false)}
                    >
                      <>
                        <Login setModel1={setModel1} />
                      </>
                    </div>
                  )}
                </Overlay>
              </div>
            </>
          )}

          <div className="toggle-btn" onClick={() => setShow(!show)}>
            <svg
              stroke="none"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div>
        <Sidebar show={show} />
      </div>
      <DepositWithdrawPage
        DWpage={DWpage}
        setDWpage={setDWpage}
        setbalance={setbalance}
      />
    </div>
  );
};

export default Navbar;
