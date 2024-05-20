import { SilverLockIcon } from "@/assets/icons";
import {
  AnimateInOut,
  BetInput,
  Button,
  ProvablyFair,
  Select,
} from "@/components";
import { Bets } from "@/pages/landing/components";
import clsx from "clsx";
import { useEffect, useState } from "react";
import SkullImage from "./assets/skull.png";
import Checkmark from "./assets/checkmark.png";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import api from "@/api/axios";
import { GameType } from "@/game-types";
import socket from "@/utils/constants";
import { updateBalance } from "@/store/slices/wallet";
import { toast } from "react-toastify";

enum Difficulty {
  EASY = "easy",
  NORMAL = "normal",
  HARD = "hard",
}

type RowContent = 1 | 2 | "skip";
type CellContent = { hasSkull: boolean; selected: boolean };

const possibleRowContent: [RowContent, RowContent, RowContent] = ["skip", 1, 2];
function getRandomIndices<T>(array: T[], count: number): number[] {
  const indices: number[] = [];

  while (indices.length < count) {
    const index = Math.floor(Math.random() * array.length);
    if (!indices.includes(index)) {
      indices.push(index);
    }
  }

  return indices;
}

let walletBalance = 0;
export default function Towers() {
  const [grid, setGrid] = useState<CellContent[][]>([]);
  const [difficulty, setDifficulty] = useState<Difficulty>(Difficulty.HARD);
  const [currentRow, setCurrentRow] = useState<number>(9); // Start from the bottom row
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameWin, setGameWin] = useState<boolean>(false); // Track game win
  const [multiplier, setMultiplier] = useState<number>(1); // Initial multiplier
  const [bet, setBet] = useState<Partial<Bet>>({
    stake: 0,
    gameType: GameType.TOWERS as Bet["gameType"],
    multiplier,
  });

  const auth = useAppSelector((state) => state.auth);
  const { balance } = useAppSelector((state) => state.wallet);

  const dispatch = useAppDispatch();

  // const [balance, dispatch(updateBalance] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [gameRunning, setGameRunning] = useState(false);
  const [message, setMessage] = useState("");
  // NOTE: remove
  const [betId, setBetId] = useState("");

  useEffect(() => {
    if (!balance) return;

    walletBalance = balance;
  }, [balance]);

  useEffect(() => {
    console.log({ gameOver, gameWin });
    if (!(gameOver || gameWin)) return;
    console.log("ENNND");
    endGame();
  }, [gameOver, gameWin]);

  // const initializeGame = () => {
  //   const rows: CellContent[][] = Array(10)
  //     .fill(0)
  //     .map(() => {
  //       const columns: CellContent[] = Array(3)
  //         .fill(3)
  //         .map((_, i) => ({ hasSkull: false, selected: false, key: i }));

  //       const colsCopy = JSON.parse(JSON.stringify(columns));

  //       console.log("COLUMNS_BEFORE: ", columns);

  //       let possibleRowContentByDifficulty: RowContent[];

  //       switch (difficulty) {
  //         case Difficulty.EASY:
  //           possibleRowContentByDifficulty = possibleRowContent.filter(
  //             (value) => value !== 2,
  //           );
  //           break;

  //         case Difficulty.NORMAL:
  //           possibleRowContentByDifficulty = possibleRowContent.filter(
  //             (value) => value !== "skip" && value !== 2,
  //           );
  //           break;

  //         case Difficulty.HARD:
  //           possibleRowContentByDifficulty = possibleRowContent.filter(
  //             (value) => value !== "skip",
  //           );
  //           break;

  //         default:
  //           possibleRowContentByDifficulty = possibleRowContent.filter(
  //             (value) => value !== "skip" && value !== 2,
  //           );
  //           break;
  //       }

  //       for (
  //         let possibleRowIndex = 0;
  //         possibleRowIndex < possibleRowContentByDifficulty.length;
  //         possibleRowIndex++
  //       ) {
  //         if (possibleRowContentByDifficulty[possibleRowIndex] === "skip")
  //           continue;

  //         const numberOfSkulls = possibleRowContentByDifficulty[
  //           getRandomIndices(possibleRowContentByDifficulty, 1)[0]
  //         ] as number;

  //         //   const skulls: number[] = Array(numberOfSkulls).fill(1);

  //         const skullPositions = getRandomIndices(columns, numberOfSkulls);

  //         skullPositions.forEach((position) => {
  //           colsCopy[position].skullPosition = skullPositions;
  //           colsCopy[position].hasSkull = true;
  //           colsCopy[position].position = position;
  //         });

  //         console.log({
  //           numberOfSkulls,
  //           skullPositions,
  //           possibleRowContentByDifficulty,
  //         });
  //       }

  //       console.log("COLUMNS_AFTER: ", colsCopy);
  //       return colsCopy;
  //     });

  //   setGrid(rows);
  // };

  const initializeGame = () => {
    const rows: CellContent[][] = Array(10)
      .fill(0)
      .map(() => {
        const columns: CellContent[] = Array(3)
          .fill(3)
          .map((_, i) => ({ hasSkull: false, selected: false, key: i }));

        // Determine possible row content based on difficulty
        let possibleRowContentByDifficulty: RowContent[];
        switch (difficulty) {
          case Difficulty.EASY:
            possibleRowContentByDifficulty = possibleRowContent.filter(
              (value) => value !== 2,
            );
            break;
          case Difficulty.NORMAL:
            possibleRowContentByDifficulty = possibleRowContent.filter(
              (value) => value !== "skip" && value !== 2,
            );
            break;
          case Difficulty.HARD:
            possibleRowContentByDifficulty = possibleRowContent.filter(
              (value) => value !== "skip",
            );
            break;
          default:
            possibleRowContentByDifficulty = possibleRowContent.filter(
              (value) => value !== "skip" && value !== 2,
            );
            break;
        }

        // Get a random number of skulls based on the filtered row content
        const numberOfSkulls = possibleRowContentByDifficulty[
          getRandomIndices(possibleRowContentByDifficulty, 1)[0]
        ] as number;

        // Get random positions for the skulls in the columns
        const skullPositions = getRandomIndices(columns, numberOfSkulls);

        // Place skulls in the determined positions
        skullPositions.forEach((position) => {
          columns[position].hasSkull = true;
        });

        return columns;
      });
    setGrid(rows);
  };

  const takeProfit = () => {
    setBet((prev) => ({ ...prev, profit: 0 }));
    setGameOver(true); // End the game
  };

  const resetGame = () => {
    setCurrentRow(9);
    setGameOver(false);
    setGameWin(false);
    setMultiplier(1);
    setBet((prev) => ({ ...prev, profit: 0 }));
    initializeGame();
    setMessage("");
    setGameRunning(false);
  };

  const placeBet = async () => {
    if (!bet.stake) return toast.error("Invalid bet amount");
    // await
    try {
      const response = await api.post("/bet/quick", {
        ...bet,
        socketId: socket.id,
      });

      const data = response.data;

      setBetId(data.bet._id);
      dispatch(updateBalance(balance - bet.stake!));

      initializeGame();
      setGameRunning(true);
      toast.success("Bet placed");
    } catch (error) {}
  };

  const endGame = async () => {
    console.log("END_GAME: ");
    try {
      const response = await api.post("/bet/result", {
        ...bet,
        id: betId,
      });
      const data = response.data;
      dispatch(updateBalance(balance + (gameWin ? bet.profit! : 0)));
    } catch (error) {
      console.error("END_GAME: ", { error });
    }
  };

  useEffect(() => {
    resetGame();
  }, [difficulty]);

  const Cell = ({
    cellContent,
    col,
    row,
  }: {
    cellContent: CellContent;
    row: number;
    col: number;
  }) => {
    const gridCopy = [...grid];
    let cell = gridCopy[row][col];

    const handleClick = () => {
      if (gameOver || gameWin || row !== currentRow || !gameRunning) return;

      gridCopy[row][col] = { ...cell, selected: true };
      setGrid(gridCopy);

      if (cell.hasSkull) {
        setGameOver(true);
        setMessage("Game over");
      } else {
        if (row > 0) {
          setCurrentRow(row - 1);
          setMultiplier((prev) => prev + 1); // Increase multiplier
        } else {
          setGameWin(true); // Game won when the top row is reached
          setMessage("You Win!");
        }
      }
    };

    return (
      <button
        onClick={handleClick}
        className={clsx(
          "w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md bg-dark-750 towers-default",
          {
            "opacity-50 cursor-not-allowed":
              !gameRunning ||
              gameOver ||
              gameWin ||
              (row !== currentRow && currentRow > row),
          },
        )}
      >
        {cellContent.selected &&
          (cellContent.hasSkull ? (
            <img src={SkullImage} className="w-8 object-cover animate-pulse" />
          ) : (
            <img src={Checkmark} className="w-8 object-cover" />
          ))}
      </button>
    );
  };

  const Multiplier = ({ index }: { index: number }) => {
    return (
      <div
        className={clsx(
          "border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded items-center font-medium border-gray-700",
          // index === currentRow && "border-primary",
        )}
      >
        <span className="font-semibold text-white uppercase">
          Hit {index + 1}
        </span>
        <span className="text-sm font-semibold text-gray-400">
          {(multiplier * (index / 60)).toFixed(2)}×
        </span>
      </div>
    );
  };

  return (
    <>
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
            <div className="flex relative flex-col gap-2 p-3 text-sm font-medium">
              {(!auth.isAuthenticated || loading || gameRunning) && (
                <div
                  onClick={() => {
                    !loading && resetGame();
                  }}
                  className="absolute top-0 left-0 z-10 w-full h-full cursor-not-allowed bg-dark-800 opacity-70"
                />
              )}
              <div className={clsx("relative flex h-full flex-col gap-2 p-3")}>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-white">
                    Bet Amount
                  </span>
                  <BetInput
                    inputProps={{
                      value: bet.stake,
                      onChange(e) {
                        setBet((prev) => ({
                          ...prev,
                          stake: parseFloat(e.target.value),
                        }));
                      },
                    }}
                  />
                </div>
                <div className="flex flex-col text-white gap-[5px]">
                  <div className="relative flex flex-col justify-start gap-1 whitespace-nowrap">
                    <span className="text-sm font-medium text-white">
                      Difficulty
                    </span>
                    <Select
                      label="Difficulty"
                      options={Object.values(Difficulty).map((item) => ({
                        label: item,
                        value: item,
                      }))}
                      value={difficulty}
                      getValue={(val) => {
                        setDifficulty(val);
                      }}
                    />
                  </div>
                </div>
                {/* <div className="absolute top-0 left-0 w-full h-full cursor-not-allowed z-5"></div> */}
              </div>
              <Button
                onClick={placeBet}
                aria-disabled="true"
                className="text-sm py-2 w-full rounded-sm sc-1xm9mse-0 fzZXbl text-nowrap"
              >
                Place Bet
              </Button>
            </div>
          </div>
          <div className="overflow-hidden bg-red-850 w-full h-full min-h-[400px] max-sm:min-h-[300px] flex justify-center relative">
            <AnimateInOut
              show={message !== ""}
              initial={{ translateY: -100, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: -100, opacity: 0 }}
              onClick={() => resetGame()}
              className="absolute z-50 flex flex-col items-center justify-center w-full h-full cursor-pointer backdrop-blur-sm_"
            >
              <div className="relative flex items-center justify-center">
                {/* <p className="absolute text-6xl font-extrabold animate-ping">
              {message}
            </p> */}
                <p className="relative z-20 text-6xl font-extrabold">
                  {message}
                </p>
              </div>

              {/* <div className="mt-12 text-xl">
            <p>tap screen to reset</p>
          </div> */}
            </AnimateInOut>
            <div className="!max-h-[600px] w-full">
              <div className="flex items-center justify-center w-full h-full p-2">
                <div className="w-[240px] gap-2 overflow-y-auto overflow-x-hidden flex flex-col h-full p-2 max-md:hidden">
                  {Array(10)
                    .fill(0)
                    .map((_, i) => (
                      <Multiplier key={i} index={i} />
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                  <div className="flex flex-col p-2 gap-1 rounded-md bg-dark-800 w-full max-w-[370px]">
                    {grid.map((rows, rowIndex) => (
                      <div
                        key={rowIndex}
                        className={clsx("flex w-full gap-2 rounded", {
                          "outline outline-1 outline-primary":
                            rowIndex === currentRow && gameRunning,
                        })}
                      >
                        {rows.map((cell, colIndex) => (
                          <Cell
                            key={colIndex}
                            cellContent={cell}
                            row={rowIndex}
                            col={colIndex}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                  {/* {gameOver && <div className="text-red-500">Game Over!</div>}
                    {gameWin && <div className="text-green-500">You Win!</div>}
                    <div className="text-white">Multiplier: {multiplier}</div>
                    <div className="text-white">Profit: {profit}</div>
                    {!gameOver && !gameWin && (
                      <button
                        onClick={takeProfit}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                      >
                        Take Profit
                      </button>
                    )}
                    <button
                      onClick={resetGame}
                      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md"
                    >
                      Restart Game
                    </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center min-h-[50px] bg-dark-800 rounded-b-md border-t border-gray-700">
          <ProvablyFair />
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-3 font-semibold text-gray-400 rounded-md bg-dark-800">
        <span className="text-2xl text-white">Towers</span>
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
              This game lets you get the highest multiplier possible by climbing
              the rows to the top of the tower.
              <br />
              <br />
              Make sure to avoid the Skulls at all costs, as they will make it
              very difficult for you to reach the tower's roof.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
