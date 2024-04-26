import { Heads, SilverLockIcon, Tails } from "@/assets/icons";
import { AnimateInOut, BetInput, Button } from "@/components";
import "./coinflip.css";
import { Bets } from "@/pages/landing/components";
import { useCallback, useEffect, useRef, useState } from "react";
import Coin from "./Coin";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { updateBalance } from "@/store/slices/wallet";
import { GameType } from "@/game-types";
import { toast } from "react-toastify";
import socket from "@/utils/constants";
import api from "@/api/axios";

let walletBalance = 0;
export default function CoinFlip() {
  const auth = useAppSelector((state) => state.auth);
  const { balance } = useAppSelector((state) => state.wallet);
  useEffect(() => {
    if (!balance) return;

    walletBalance = balance;
  }, [balance]);

  const dispatch = useAppDispatch();

  const [bet, setBet] = useState<
    Partial<Bet & { choice: "H" | "T"; socketId: string }>
  >({
    gameType: GameType.COINFLIP as Bet["gameType"],
  });
  const [loading, setLoading] = useState(false);
  const [winnings, setWinnings] = useState(0);
  const [message, setMessage] = useState("");

  const [gameRunning, setGameRunning] = useState(false);
  const [result, setResult] = useState<typeof bet.choice | null>(null);
  const [roundComplete, setRoundComplete] = useState(false);
  const [round, setRound] = useState(0);
  const [multipliers, setMultipliers] = useState<number[]>([]);
  const [currentMultiplier, setCurrentMultiplier] = useState<number | null>(
    null,
  );

  const [continueGame, setContinueGame] = useState(false);

  // const flipCoin = async (): Promise<"H" | "T"> => {
  //   setLoading(true);
  //   const randomVal = Math.random();
  //   const faceCoin = randomVal < 0.5 ? "H" : "T";

  //   if (coinRef.current) {
  //     await new Promise((resolve) => {
  //       setTimeout((e) => {
  //         setLoading(false);
  //         resolve(e);
  //       }, 1000);
  //     });
  //   }
  //   return faceCoin;

  useEffect(() => {
    console.log("COMPARE_RESULT: ", result, bet.choice);
  }, [result]);
  // };

  useEffect(() => {
    // setBet(prev=>{})
    console.log("SOCKET_ID: ", socket.id);
  }, [socket.id]);

  useEffect(() => {
    socket.emit("COINFLIP:get_multipliers");

    socket.on("COINFLIP:multipliers", (data) => {
      setMultipliers(data);
      setCurrentMultiplier(data[0]);
    });

    socket.on("COINFLIP:result", (data) => {
      console.log({ RESULT: data });
      setResult(data.result);
      setLoading(false);
      // toast(data);
    });

    socket.on("COINFLIP:error", (data) => {
      setResult(data);
      setLoading(false);
      toast(data);
    });

    socket.on(
      "COINFLIP:game_over",
      (data: {
        winnings: number;
        message: string;
        result: typeof bet.choice;
      }) => {
        console.log("GAME_OVER", data);
        setRoundComplete(true);
        setMessage(data.message);
        setLoading(false);
        setResult(data.result);
        setContinueGame(false);
        // setTimeout(() => {
        //   dispatch(updateBalance(walletBalance + data.winnings));
        //   setRoundComplete(false);
        // }, 3000);
      },
    );

    socket.on(
      "COINFLIP:continue_prompt",
      (data: {
        currentMultiplier: number;
        result: typeof bet.choice;
        winnings: number;
        message: string;
        round: number;
      }) => {
        console.log("CONTINUE_PROMPT", data);
        setLoading(false);
        setRoundComplete(true);
        setRound(data.round);
        setResult(data.result);
        setWinnings(data.winnings);
        setMessage(data.message);
        setCurrentMultiplier(data.currentMultiplier);
        console.log({ currentMultiplier: data.currentMultiplier });
      },
    );
  }, []);

  useEffect(() => {
    console.log({ roundComplete });
  }, [roundComplete]);

  const handleResult = () => {
    setRoundComplete(false);

    const continueGame = () => {
      // setLoading(true);

      setContinueGame(true);

      // socket.emit("COINFLIP:continue_response", true, socket.id);
    };

    const endGame = () => {
      socket.emit("COINFLIP:continue_response", false);
      resetGame();
    };

    return { continueGame, endGame };
  };

  const makeChoice = (side: "H" | "T") => {
    setBet((prev) => ({ ...prev, choice: side }));
  };

  const placeBet = async () => {
    if (!bet.stake || isNaN(bet.stake) || bet.stake <= 0)
      return toast.error("Invalid input. Please enter a valid bet amount.");
    if (!bet.choice) return toast.error("please select either head or tail");
    setLoading(true);

    try {
      if (continueGame) {
        return socket.emit(
          "COINFLIP:continue_response",
          true,
          socket.id,
          bet.choice,
        );
      }

      console.log("PLACE_BET: ", bet, socket.id);
      setLoading(true);
      setGameRunning(true);

      const response = await api.post("/bet", { ...bet, socketId: socket.id });

      console.log("BET_RESPONSE", response.data);

      if (response.status !== 201) return toast.error("Couldn't play game");

      socket.emit("COINFLIP:join_game", {
        player: {
          user: { username: auth.user?.username, photo: auth.user?.photo },
        } as Player,
        socketId: socket.id,
      });

      dispatch(updateBalance(balance - bet.stake));

      toast.success("bet placed!");
    } catch (error) {
      toast.error("Could not place bet!");
      setLoading(false);
      setGameRunning(true);
    }
  };

  const handleCashOut = () => {
    updateBalance(0);
  };

  const resetGame = () => {
    setBet((prev) => ({ ...prev, stake: 0, choice: undefined }));
    setGameRunning(false);
    setCurrentMultiplier(multipliers[0]);
    setLoading(false);
    setMessage("");
    setRoundComplete(false);
    setRound(0);
  };

  return (
    <div className="gap-3 p-3 font-medium text-white max-w-page">
      <div className="flex flex-col w-full">
        <div className=" min-h-[50px] bg-dark-800 flex overflow-hidden flex-col-reverse w-full items-center rounded-t-md border-b border-gray-700">
          <div className="w-full h-full flex gap-1.5 p-2  justify-start overflow-hidden relative shadow-dark-800 items-center">
            <div
              className="w-[6px] bg-dark-800 h-full absolute right-0 top-0 z-[5] "
              style={{ boxShadow: "0 0 30px 40px var(--tw-shadow-color)" }}
            ></div>
          </div>
        </div>
        <div className="flex flex-row w-full h-full max-md:flex-col-reverse">
          <div className="bg-dark-800 flex justify-start flex-col max-md:w-full w-[400px]">
            <div className="p-3 text-sm font-medium">
              <div
                className={clsx(
                  "relative flex flex-col gap-2 text-sm",
                  (!auth.isAuthenticated || (gameRunning && !continueGame)) &&
                    "opacity-40",
                )}
              >
                {!auth.isAuthenticated ||
                  ((loading || gameRunning) && !continueGame && (
                    <div className="absolute top-0 left-0 w-full h-full cursor-not-allowed z-5" />
                  ))}

                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-white">
                    Bet Amount
                  </span>

                  <BetInput
                    inputProps={{
                      onChange(e) {
                        setBet((prev) => ({
                          ...prev,
                          stake: parseFloat(e.target.value),
                        }));
                      },
                      value: bet.stake || 0,
                    }}
                  />
                </div>
                <div className="flex flex-col w-full gap-1 ">
                  <span>Coin Side</span>
                  <div className="flex gap-2">
                    <Button
                      disabled={loading}
                      type="button"
                      onClick={() => makeChoice("H")}
                      aria-disabled="true"
                      className={clsx(
                        "sc-1xm9mse-0 fzZXbl text-sm rounded-sm text-nowrap w-full max-h-[40px]",
                        bet.choice === "T" && "opacity-40",
                      )}
                    >
                      <img
                        alt="Heads"
                        src={Heads}
                        draggable="false"
                        className="rendering-pixelated w-full max-w-[30px]"
                      />
                    </Button>
                    <Button
                      disabled={loading}
                      type="button"
                      onClick={() => makeChoice("T")}
                      aria-disabled="true"
                      className={clsx(
                        "sc-1xm9mse-0 fzZXbl text-sm rounded-sm text-nowrap w-full max-h-[40px]",
                        bet.choice === "H" && "opacity-40",
                      )}
                    >
                      <img
                        alt="Tails"
                        src={Tails}
                        draggable="false"
                        className="rendering-pixelated w-full max-w-[30px]"
                      />
                    </Button>
                  </div>
                </div>
                <Button
                  loading={loading}
                  type="submit"
                  onClick={() => placeBet()}
                  aria-disabled="true"
                  className="w-full text-sm rounded-sm sc-1xm9mse-0 fzZXbl text-nowrap"
                >
                  Place Bet
                </Button>
              </div>
              <AnimateInOut
                show={roundComplete}
                initial={{ translateY: 100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ translateY: 100, opacity: 0 }}
                className="z-50 flex flex-col items-center w-full h-full mt-4 cursor-pointer absolute_ backdrop-blur-sm_"
              >
                <div className="relative flex flex-col items-center justify-center w-full flex_">
                  <p className="relative z-20 text-2xl font-extrabold text-center">
                    {message}
                  </p>
                  <small className="mx-auto text-base font-bold text-center">
                    Winnings: {winnings.toFixed(2)}
                  </small>

                  <div className="flex items-center justify-between gap-3 mt-6 text-xl font-bold">
                    {result === bet.choice ? (
                      <>
                        <Button
                          className="w-full"
                          onClick={() => handleResult().continueGame()}
                        >
                          Continue
                        </Button>
                        <button
                          onClick={() => handleResult().endGame()}
                          className="w-full px-2 py-1 rounded-md outline outline-1 outline-dark-700 bg-dark-800/50 whitespace-nowrap"
                        >
                          Take winnings
                        </button>
                      </>
                    ) : (
                      <Button onClick={resetGame}>End Round</Button>
                    )}
                  </div>
                </div>
              </AnimateInOut>
            </div>
          </div>
          <div className="overflow-hidden bg-dark-850 w-full h-full min-h-[400px] max-sm:min-h-[300px] flex justify-center relative">
            <div className="relative w-full h-[550px] max-sm:max-h-[375px] flex flex-col">
              <div className="flex flex-col justify-between flex-grow w-full h-full">
                <div className="relative flex justify-center flex-grow ">
                  {/* <div className="absolute flex justify-center w-full text-xl font-semibold text-gray-500 top-5">
                    <span></span>
                  </div> */}

                  <div className="flex items-center justify-center w-full max-md:justify-start">
                    <div
                      className="flex border-2 border-gray-700
                  max-md:rounded-r max-md:rounded-none max-md:border-l-0 max-md:max-w-[100px]
                  w-[200px] max-sm:max-w-[100px]
                   rounded-sm p-4 flex-col items-center gap-1.5 uppercase text-gray-500 font-semibold text-2xl"
                    >
                      <span className="text-3xl max-sm:text-[1rem] max-md:text-2xl">
                        {round}
                      </span>
                      <span className="max-md:text-xl max-sm:text-[0.75rem]">
                        HITS
                      </span>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-full p-1">
                    <div className="w-full h-full absolute_ coinFlipCoin">
                      {/* <div className="relative flex items-center justify-center w-full h-full">
                        <div className="absolute w-2/3 side-tails">
                          <img
                            alt=""
                            src={T}
                            draggable="false"
                            className="object-cover w-full absolute_"
                            style={{
                              imageRendering: "pixelated",
                            }}
                          />
                        </div>
                        <div className="absolute w-2/3 side-heads">
                          <img
                            alt=""
                            src={H}
                            draggable="false"
                            className="object-cover w-full absolute_"
                            style={{
                              imageRendering: "pixelated",
                            }}
                          />
                        </div>
                      </div> */}
                      {/* <Coin coinRef={coinRef} /> */}
                      <div
                        className={clsx(
                          "coin !w-2/3 aspect-square",
                          loading ? "flip" : "nope",
                        )}
                        // ref={coinRef}
                      >
                        <img
                          src={result === "T" ? Tails : Heads}
                          alt="Heads"
                          className=""
                          style={{
                            imageRendering: "pixelated",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full max-md:justify-end">
                    <div
                      className="flex border-2 border-gray-700
                  max-md:rounded-l max-md:rounded-none max-md:border-r-0 max-md:max-w-[150px]
    max-sm:max-w-[100px]
                  w-[200px] rounded-sm p-4 flex-col items-center gap-1.5 uppercase text-gray-500 font-semibold text-2xl"
                    >
                      <span className="text-4xl max-md:text-2xl max-sm:text-[1rem]">
                        {currentMultiplier}×
                      </span>
                      <span className="max-md:text-xl max-sm:text-[0.75rem]">
                        Multiplier
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex w-full gap-3 px-3 pb-2 overflow-x-auto">
                    {multipliers.map((multiplier, i) => (
                      <Multiplier
                        key={i}
                        value={multiplier}
                        currentMultiplier={currentMultiplier!}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center min-h-[50px] bg-dark-800 rounded-b-md border-t border-gray-700">
          <div className="flex justify-start w-full gap-3 p-3 text-gray-500">
            <button className="transition-colors hover:text-white font-semibold text-sm flex items-center gap-0.5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2zM694.5 340.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89 150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8z"></path>
              </svg>
              <span>Provably Fair</span>
            </button>
            <button className="text-sm flex gap-0.5 font-semibold">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z"></path>
              </svg>
              Settings
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-3 font-semibold text-gray-400 rounded-md bg-dark-800">
        <span className="text-2xl text-white">Coin Flip</span>
        <div className="flex flex-row gap-2 max-md:flex-col">
          <div className="flex flex-col min-w-[300px] max-md:w-full gap-2">
            <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
              <span className="font-medium text-white">House Edge</span>
              <span className="flex items-center gap-1.5">4%</span>
            </div>
            <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
              <span className="font-medium text-white">Max Bet</span>
              <span className="flex items-center gap-1.5">
                1,000.00
                <img
                  src={SilverLockIcon}
                  width="18"
                  height="18"
                  className="sc-x7t9ms-0 dnLnNz"
                />
              </span>
            </div>
            <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
              <span className="font-medium text-white">Max Win</span>
              <span className="flex items-center gap-1.5">
                10,000.00
                <img
                  src={SilverLockIcon}
                  width="18"
                  height="18"
                  className="sc-x7t9ms-0 dnLnNz"
                />
              </span>
            </div>
          </div>
          <div className="bg-dark-750 rounded-md  p-2.5 text-sm font-medium w-full text-justify leading-5">
            <span>
              The mechanics of playing this game are simple, and you can toss a
              coin and choose between H or T.
              <br />
              <br />
              Once you've landed on a winning bet, you have the discretion to
              resume flipping the coin for extra rounds, which, in turn,
              translates to extra prizes and higher payouts.
              <br />
              <br />
              Not only that, but the multipliers also keep increasing as you
              keep winning throughout every coin flip.
            </span>
          </div>
        </div>
      </div>
      <Bets />
    </div>
  );
}

function Multiplier({
  value,
  currentMultiplier,
}: {
  value: number;
  currentMultiplier: number;
}) {
  return (
    <div
      className={clsx(
        "min-w-[100px] max-w-[100px] relative select-none  rounded-full",
        value === currentMultiplier
          ? "outline outline-1 -outline-offset-1"
          : "",
      )}
    >
      <img
        draggable="false"
        width="100"
        alt="Coin"
        className="w-full h-auto rendering-pixelated brightness-0 opacity-20"
        src={Heads}
      />
      <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-500 font-semibold text-[1.15rem]">
        {value}×
      </span>
    </div>
  );
}
