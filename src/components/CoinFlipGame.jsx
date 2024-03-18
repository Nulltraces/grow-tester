// CoinTossGame.js
import React, { useEffect, useState } from "react";
import API_BASE_URL from "../config";
import { useCookies } from "react-cookie";
import "../css/coinflip.css";
import currency_dl from "../imgs/currency_dl.png";
// import currency_wl from "../imgs/currency_wl.png"
import heads from "../imgs/heads.png";
import tails from "../imgs/tails.png";
import Navbar from "../components/Navbar";

const CoinTossGame = () => {
  const [cookies] = useCookies(["jwt"]);
  const [betAmount, setBetAmount] = useState(1);
  const [guess, setGuess] = useState("heads");
  const [currentUserData, setCurrentUserData] = useState({});
  const [gameResult, setGameResult] = useState("");

  // const [history1, sethistory1] = useState('');
  // const [history2, sethistory2] = useState('');
  // const [history3, sethistory3] = useState('text');
  // const [history4, sethistory4] = useState('text');
  // const [history5, sethistory5] = useState('text');
  // const [history6, sethistory6] = useState('text');
  // const [history7, sethistory7] = useState('text');
  // const [history8, sethistory8] = useState('text');
  // const [history9, sethistory9] = useState('text');
  // const [history10, sethistory10] = useState('text');

  if (!cookies.jwt) {
    window.location.href = "/home";
  }
  const jsonData = { jwt: cookies.jwt };
  const queryString = Object.keys(jsonData)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(jsonData[key])}`
    )
    .join("&");
  useEffect(() => {
    try {
      fetch(API_BASE_URL + "/api/coin-flip/my-data?" + queryString)
        .then((response) => response.json())
        .then((data) => setCurrentUserData(data));
    } catch (error) {
      window.location.href = "/home";
    }
  }, [cookies, queryString]);

  const handleGamePlay = (bet_ht) => {
    setGuess(bet_ht);
    if (currentUserData.current_bet !== 0) {
      setBetAmount(currentUserData.current_bet);
    }
    if (
      betAmount >= 1 &&
      betAmount <= 1000 &&
      bet_ht &&
      betAmount <= currentUserData.balance
    ) {
      fetch(API_BASE_URL + "/api/coin-flip/game?" + queryString, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ guess: bet_ht, bet: betAmount }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result === true) {
            setGameResult("You Won!");
          } else {
            setGameResult("You Lost!");
          }
          const jsonData = { jwt: cookies.jwt };
          const queryString = Object.keys(jsonData)
            .map(
              (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(
                  jsonData[key]
                )}`
            )
            .join("&");

          fetch(API_BASE_URL + "/api/coin-flip/my-data?" + queryString)
            .then((response) => response.json())
            .then((data) => setCurrentUserData(data));
          setBetAmount(0);
        });
    } else {
      console.log("Invalid input. Please enter a valid bet amount and guess.");
    }
  };

  const handlecashout = () => {
    if (currentUserData.streak !== 0) {
      fetch(API_BASE_URL + "/api/coin-flip/cashout?" + queryString, {
        method: "POST",
      }).then(() => {
        const jsonData = { jwt: cookies.jwt };
        const queryString = Object.keys(jsonData)
          .map(
            (key) =>
              `${encodeURIComponent(key)}=${encodeURIComponent(jsonData[key])}`
          )
          .join("&");

        fetch(API_BASE_URL + "/api/coin-flip/my-data?" + queryString)
          .then((response) => response.json())
          .then((data) => setCurrentUserData(data));
        setBetAmount(0);
      });
    } else {
      console.log("Invalid input. Please enter a valid ");
    }
  };

  const handleHalveBet = () => {
    const newBetAmount = Math.floor(betAmount / 2);
    setBetAmount(Math.max(newBetAmount, 1));
  };

  const handleDoubleBet = () => {
    const newBetAmount = betAmount * 2;
    if (newBetAmount <= currentUserData.balance) {
      setBetAmount(newBetAmount);
    }
  };

  return (
    <div class="root">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="utf-8" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
        data-tag="font"
      />

      <div class="growdice-container">
        <Navbar value={currentUserData.balance} />
        <div class="growdice-separator"></div>
        <div class="growdice-row">
          <div class="growdice-empty-before"></div>
          <div class="growdice-mid">
            <div class="growdice-container2">
              <div class="growdice-interract">
                <div class="growdice-betting">
                  <h1 class="growdice-text">Bet Amount</h1>
                  {/* <p class="growdice-text">Balance: {currentUserData.balance}  <img alt="lock" src={currency_dl} class="growdice-image2" /></p> */}
                  <div class="growdice-betinput">
                    <div class="growdice-lock">
                      <img
                        alt="lock"
                        src={currency_dl}
                        class="growdice-image2"
                      />
                    </div>
                    <div class="growdice-inputcont">
                      <input
                        type="number"
                        class="growdice-textinput"
                        name="betAmount"
                        min="1"
                        max={currentUserData.balance}
                        value={
                          currentUserData.current_bet !== 0
                            ? currentUserData.current_bet
                            : betAmount
                        }
                        onChange={(e) => setBetAmount(parseInt(e.target.value))}
                        disabled={currentUserData.current_bet !== 0}
                      ></input>
                    </div>
                    <div class="growdice-input-mods">
                      <button
                        class="growdice-button button"
                        onClick={handleHalveBet}
                      >
                        1/2
                      </button>
                      <button
                        class="growdice-button1 button"
                        onClick={handleDoubleBet}
                      >
                        2x
                      </button>
                    </div>
                  </div>
                </div>
                <div class="growdice-coin-side">
                  <h1 class="growdice-text04">Coin Side</h1>
                  <div class="growdice-container3">
                    <button
                      aria-disabled="false"
                      class="growdice-heads button"
                      onClick={() => handleGamePlay("heads")}
                      disabled={!betAmount && currentUserData.current_bet === 0}
                    >
                      <img alt="heads" src={heads} class="growdice-image3" />
                    </button>
                    <button
                      aria-disabled="false"
                      id="tails"
                      class="growdice-tails button"
                      onClick={() => handleGamePlay("tails")}
                      disabled={!betAmount && currentUserData.current_bet === 0}
                    >
                      <img alt="tails" src={tails} class="growdice-image4" />
                    </button>
                  </div>
                </div>
                <div class="growdice-placebet">
                  <button
                    class="cashout button"
                    disabled=""
                    onClick={handlecashout}
                  >
                    <span style={{ backgroundColor: "transparent" }}>
                      Cash Out
                    </span>
                  </button>
                </div>
              </div>
              <div class="growdice-show">
                <div class="growdice-winnings">
                  <div class="growdice-container4">
                    {currentUserData.streak !== 0 ? (
                      <>
                        <span class="growdice-text08">
                          {currentUserData.current_bet *
                            Math.pow(2, currentUserData.streak) *
                            0.96}
                        </span>
                      </>
                    ) : (
                      <>
                        <span class="growdice-text08">0.00</span>
                      </>
                    )}
                    <img
                      alt="current dl"
                      src={currency_dl}
                      class="growdice-image5"
                    />
                  </div>
                </div>
                <div class="growdice-container5">
                  {gameResult === "You Lost!" ? (
                    <>
                      {guess !== "heads" ? (
                        <>
                          <img
                            alt="heads"
                            src={heads}
                            class="growdice-image6"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            alt="tails"
                            src={tails}
                            class="growdice-image6"
                          />
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {guess === "heads" ? (
                        <>
                          <img
                            alt="heads"
                            src={heads}
                            class="growdice-image6"
                          />
                        </>
                      ) : (
                        <>
                          <img
                            alt="tails"
                            src={tails}
                            class="growdice-image6"
                          />
                        </>
                      )}
                    </>
                  )}
                </div>
                <div class="growdice-winnings1">
                  <div class="growdice-container6">
                    {currentUserData.streak !== 0 ? (
                      <>
                        <span class="growdice-text09">
                          {Math.pow(2, currentUserData.streak) * 0.96}X<br />
                          MULTIPLIER
                        </span>
                      </>
                    ) : (
                      <>
                        <span class="growdice-text09">
                          0.00X
                          <br />
                          MULTIPLIER
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <div class="growdice-container08">
                  <div class="growdice-history">
                    {currentUserData.history1 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history1 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history1}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                  <div class="growdice-history">
                    {currentUserData.history2 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history2 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history2}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                  <div class="growdice-history">
                    {currentUserData.history3 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history3 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history3}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                  <div class="growdice-history">
                    {currentUserData.history4 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history4 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history4}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                  <div class="growdice-history">
                    {currentUserData.history5 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history5 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history5}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                  <div class="growdice-history">
                    {currentUserData.history6 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history6 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history6}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                  <div class="growdice-history">
                    {currentUserData.history7 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history7 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history7}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                  <div class="growdice-history">
                    {currentUserData.history8 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history8 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history8}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                  <div class="growdice-history">
                    {currentUserData.history9 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history9 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history9}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                  <div class="growdice-history">
                    {currentUserData.history10 === "heads" ? (
                      <>
                        <img
                          alt="heads"
                          src={heads}
                          class="growdice-image-history"
                        />
                      </>
                    ) : (
                      <>
                        {currentUserData.history10 === "tails" ? (
                          <>
                            <img
                              alt="tails"
                              src={tails}
                              class="growdice-image-history"
                            />
                          </>
                        ) : (
                          <>
                            <span class="growdice-text10">
                              {currentUserData.history10}
                            </span>
                          </>
                        )}
                        {/* <span class="growdice-text10">1.92x</span> */}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="growdice-empty-down"></div>
        </div>
      </div>

      {/*
                
                        <div class="growdice-show">
                <div class="growdice-container04">
                  <div class="growdice-winnings">
                    <div class="growdice-container05">
                      <span class="growdice-text08">0.00</span>
                      <img
                        alt="image"
                        src="public/currency_dl-200h.png"
                        class="growdice-image5"
                      />
                    </div>
                  </div>
                  <div class="growdice-container06">
                    <img
                      alt="image"
                      src="public/heads-400h.png"
                      class="growdice-image6"
                    />
                  </div>
                  <div class="growdice-winnings1">
                    <div class="growdice-container07">
                      <span class="growdice-text09">0.00X</span>
                    </div>
                  </div>
                </div>
                <div class="growdice-container08">
                  <div class="growdice-history1">
                    <span class="growdice-text10">Text</span>
                  </div>
                  <div class="growdice-container09"></div>
                  <div class="growdice-container10"></div>
                </div>
              </div>
            </div>
                 */}
    </div>
  );
};

export default CoinTossGame;
