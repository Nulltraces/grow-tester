// import React, { useState } from "react";

// const RemeGame: React.FC = () => {
//   const [balance, setBalance] = useState<number>(0);
//   const [profit, setProfit] = useState<number>(0);
//   const [roundsPlayed, setRoundsPlayed] = useState<number>(0);
//   const [totalBet, setTotalBet] = useState<number>(0);
//   const [gameMessages, setGameMessages] = useState<string[]>([]);

//   const spinWheel = (betAmt: number, rounds: number) => {
//     const startingAmt = balance;
//     let currentProfit = profit;
//     let roundsCounter = roundsPlayed;
//     let totalBets = totalBet;
//     const messages: string[] = [];

//     for (let count = 0; count < rounds; count++) {
//       const player = Math.floor(Math.random() * 37);
//       const house = Math.floor(Math.random() * 37);
//       const player1 = convert(player);
//       const house1 = convert(house);

//       if (house1 >= player1) {
//         currentProfit -= betAmt;
//         setBalance(balance - betAmt);
//         messages.push(`You lost! -${betAmt}`);
//       } else if (player1 > house1 && player1 !== 10) {
//         currentProfit += betAmt;
//         setBalance(balance + betAmt);
//         messages.push(`You won! +${betAmt}`);
//       } else if (player1 > house1 && player1 === 10) {
//         currentProfit += 2 * betAmt;
//         setBalance(balance + 2 * betAmt);
//         messages.push(`You won 3x! +${2 * betAmt}`);
//       }

//       totalBets += betAmt;
//       roundsCounter++;
//     }

//     setProfit(currentProfit);
//     setRoundsPlayed(roundsCounter);
//     setTotalBet(totalBets);
//     setGameMessages(messages);

//     return startingAmt !== balance;
//   };

//   const convert = (num: number) => {
//     if (num === 0 || num === 19 || num === 28) return 10;
//     return num % 10;
//   };

//   const playGame = () => {
//     const betAmt = parseInt(prompt("Enter bet amount") || "0");
//     const rounds = parseInt(prompt("Enter number of rounds") || "0");

//     if (isNaN(betAmt) || isNaN(rounds) || betAmt <= 0 || rounds <= 0) {
//       alert(
//         "Invalid input. Please enter a valid bet amount and number of rounds.",
//       );
//       return;
//     }

//     const isBalanceChanged = spinWheel(betAmt, rounds);
//     if (!isBalanceChanged) alert("Your balance has not changed.");
//   };

//   return (
//     <div>
//       <h1>Reme Simulator</h1>
//       <p>Current Balance: {balance}</p>
//       <button onClick={playGame}>Play Game</button>
//       <div>
//         <h2>Game Messages:</h2>
//         {gameMessages.map((message, index) => (
//           <p key={index}>{message}</p>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RemeGame;

import { AnimateInOut } from "@/components";
import Roulette from "./assets/roulette.png";
import Wheel from "./assets/wheel.png";
import Base from "./assets/base.png";
import classes from "./reme.module.css";
import clsx from "clsx";
type Props = {
  message: string;
  playerSpin: number;
  houseSpin: number;
  loading?: boolean;
  reset(): void;
};

export default function RemeGame({
  houseSpin,
  playerSpin,
  loading,
  message,
  reset,
}: Props) {
  return (
    <div className="overflow-hidden bg-dark-850 w-full h-full min-h-[400px] max-sm:min-h-[300px] flex justify-center relative">
      <div className="relative w-full h-[500px] max-sm:max-h-[325px]">
        <AnimateInOut
          show={message !== ""}
          initial={{ translateY: -100, opacity: 0 }}
          animate={{ translateY: 0, opacity: 1 }}
          exit={{ translateY: -100, opacity: 0 }}
          onClick={() => reset()}
          className="absolute z-50 flex flex-col items-center justify-center w-full h-full cursor-pointer backdrop-blur-sm_"
        >
          <div className="relative flex items-center justify-center">
            {/* <p className="absolute text-6xl font-extrabold animate-ping">
              {message}
            </p> */}
            <p className="relative z-20 text-6xl font-extrabold">{message}</p>
          </div>

          {/* <div className="mt-12 text-xl">
            <p>tap screen to reset</p>
          </div> */}
        </AnimateInOut>
        <div className="flex items-center justify-between w-full p-20 absolute_ max-sm:p-5">
          <div className="flex upper flex-col justify-center items-center gap-1.5 text-xl font-semibold">
            <span className="max-sm:text-[1rem]">YOU</span>
            <div className="bg-dark-800 select-none overflow-hidden rounded-sm max-sm:h-[50px] max-sm:w-[50px] w-[75px] h-[75px] flex justify-center items-center">
              <span className="text-3xl font-semibold text-white max-sm:text-xl">
                {playerSpin || ""}
              </span>
            </div>
          </div>
          <div className="font-semibold max-sm:text-[1rem] flex-nowrap text-3xl transition-colors"></div>
          <div className="flex upper flex-col justify-center items-center gap-1.5 text-xl font-semibold">
            <span className="max-sm:text-[1rem]">HOUSE</span>
            <div className="bg-dark-800 select-none overflow-hidden rounded-sm max-sm:h-[50px] max-sm:w-[50px] w-[75px] h-[75px] flex justify-center items-center">
              <span className="text-3xl font-semibold text-white max-sm:text-xl">
                {houseSpin || ""}
              </span>
            </div>
          </div>
        </div>
        {/* <div className="absolute h-full w-full bg-red-700 z-[5] bg-transparent"></div> */}

        <div className="h-full w-full_ absolute_">
          {/* <canvas width="955" height="500"></canvas> */}
          <div className={clsx(`mx-auto ${classes["spinner-container"]}`)}>
            {/* <img
              src={Roulette}
              alt="Roulette Wheels"
              draggable={false}
              className={`object-cover ${classes["spinner"]} shrink-0`}
              style={{
                imageRendering: "pixelated",
              }}
            /> */}
            <div className="flex flex-col">
              <img
                src={Wheel}
                alt="Roulette Wheels"
                draggable={false}
                // className={`object-cover ${classes["spinner"]} shrink-0`}
                className={clsx(
                  `object-cover ${classes["spinner-container"]}`,
                  loading && "animate-spin",
                )}
                style={{
                  imageRendering: "pixelated",
                }}
              />
              <img
                src={Base}
                alt="Roulette Wheels"
                draggable={false}
                className={`object-cover ${classes["spinner"]} shrink-0`}
                style={{
                  imageRendering: "pixelated",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <h1>Reme Simulator</h1>
    //   <p>Current Balance: {balance}</p>
    //   <button onClick={playGame}>Play Game</button>
    //   <div>
    //     <h2>Game Messages:</h2>
    //     {gameMessages.map((message, index) => (
    //       <p key={index}>{message}</p>
    //     ))}
    //   </div>
    // </div>
  );
}
