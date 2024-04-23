import React, {
  ComponentProps,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import Minesweeper, { CellStatus } from "./Minesweeper.controller"; // Assuming you have Minesweeper class in Minesweeper.ts file
import { AnimateInOut, Button, Select } from "@/components";
import clsx from "clsx";
import { GearIcon, ShieldIcon } from "@/assets/svgs";
import { SilverLockIcon } from "@/assets/icons";
import { Bets } from "@/pages/landing/components";
import socket from "@/utils/constants";
// import "./mines.css ";

const BOARD_SIZE = 5;
const NUMBER_OF_MINES = 5;

const Mines: React.FC = () => {
  const [minesNum, setMinesNum] = useState(0);
  const [game, setGame] = useState(
    new Minesweeper(BOARD_SIZE, minesNum || NUMBER_OF_MINES),
  );
  const [board, setBoard] = useState<CellStatus[][]>(initializeBoard());

  const getMinesNum = (val: number) => {
    setMinesNum(val);
  };

  const [gameOver, setGameOver] = useState(false);
  // const [board, setBoard] = useState<CellStatus[][] | null>([[]]);

  function initializeBoard(): CellStatus[][] {
    const board: CellStatus[][] = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      board[i] = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        board[i][j] = CellStatus.Hidden;
      }
    }
    return board;
  }

  function handleCellClick(row: number, col: number) {
    socket.emit("MINES:reveal_cell", row, col);
    if (game.isGameOver()) return;

    const gameOver = game.revealCell(row, col);
    const newBoard = [...board];
    newBoard[row][col] = CellStatus.Revealed;
    setBoard(newBoard);

    if (gameOver) {
      console.log("Game Over!");
      setGameOver(true);
    }
  }

  function handleRightClick(
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>,
    row: number,
    col: number,
  ) {
    event.preventDefault(); // Prevent default right-click behavior

    if (game.isGameOver()) return;

    game.toggleFlag(row, col);
    const newBoard = [...board];
    newBoard[row][col] =
      newBoard[row][col] === CellStatus.Flagged
        ? CellStatus.Hidden
        : CellStatus.Flagged;
    setBoard(newBoard);
  }

  useEffect(() => {
    // startGame();

    socket.on("MINES:game_started", (initialBoard: CellStatus[][]) => {
      console.log("MINES_STARTED!");
      setBoard(initialBoard);
    });

    socket.on(
      "MINES:cell_revealed",
      ({ row, col, cell }: { row: number; col: number; cell: CellStatus }) => {
        const newBoard = [...board!];
        newBoard[row][col] = cell;
        setBoard(newBoard);
      },
    );

    socket.on(
      "MINES:flag_toggled",
      ({ row, col, cell }: { row: number; col: number; cell: CellStatus }) => {
        const newBoard = [...board!];
        newBoard[row][col] = cell;
        setBoard(newBoard);
      },
    );

    socket.on("MINES:game_over", () => {
      console.log("Game Over!");
    });

    return () => {
      socket.disconnect();
    };
  }, [board]);

  // function handleCellClick(row: number, col: number) {
  //   console.log("CELL_CLICKED");
  //   // if (board && board[row][col] === CellStatus.Hidden) {
  //   socket.emit("MINES:reveal_cell", row, col);

  //   console.log("CELL_CLICKED:after");
  //   // }
  // }

  // function handleRightClick(
  //   event:
  //     | React.MouseEvent<HTMLButtonElement>
  //     | React.TouchEvent<HTMLButtonElement>,
  //   row: number,
  //   col: number,
  // ) {
  //   console.log("RIGHT_CLICKED");
  //   event.preventDefault(); // Prevent default right-click behavior
  //   if (board) {
  //     socket.emit("toggle_flag", row, col);
  //   }
  // }

  // function startGame() {
  //   socket.emit("start_game");
  // }

  return (
    <div>
      <div className="flex flex-col w-full">
        <div className="min-h-[50px] bg-dark-800 flex overflow-hidden flex-col-reverse w-full items-center rounded-t-md border-b border-gray-700" />
        <div className="flex flex-row w-full h-full max-md:flex-col-reverse">
          <div
            className={clsx(
              "bg-dark-800 flex justify-start flex-col max-md:w-full w-[400px]",
            )}
          >
            <form className="w-[94%] mx-auto p-3 flex flex-col gap-2 font-medium  text-sm">
              <fieldset>
                <label className="text-sm font-semibold capitalize">
                  bet amount
                </label>
                <div
                  tabIndex={0}
                  className="relative flex items-center w-full rounded "
                >
                  <input
                    type="text"
                    className="focus:border-none focus:outline-none bg-dark-700 w-full rounded p-2 focus:border-[1px] focus:outline focus:outline-[1px] focus:outline-primary focus:border-primary border-gray-500 outline-gray-500"
                  />
                  {/* <img src={SilverLockIcon} className="w-4 aspect-square" /> */}
                  <div className="absolute flex items-center gap-2 right-2">
                    <span className="text-sm font-semibold text-gray-600">
                      1/2
                    </span>
                    <span className="text-sm font-semibold text-gray-600">
                      2x
                    </span>
                  </div>
                </div>
              </fieldset>
              <fieldset className="relative h-20 mt-2">
                <label className="text-sm font-semibold capitalize">
                  mines
                </label>
                <div className="absolute w-full bg-dark-800">
                  <Select
                    label="3"
                    getValue={getMinesNum}
                    options={Array(24)
                      .fill(0)
                      .map((_, i) => ({
                        label: (i + 1).toString(),
                        value: (i + 1).toString(),
                      }))}
                  />
                </div>
              </fieldset>
              <Button type="button" className="w-full capitalize">
                insufficient funds
              </Button>
            </form>
          </div>
          <div className="overflow-hidden bg-dark-850 w-full h-full min-h-[400px] max-sm:min-h-[300px] flex justify-center relative">
            <div className="relative flex items-center justify-center w-full">
              <AnimateInOut
                show={gameOver}
                initial={{ translateY: -100, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ translateY: -100, opacity: 0 }}
                className="absolute z-10 flex items-center justify-center w-full h-full backdrop-blur-sm"
              >
                <div className="relative flex items-center justify-center">
                  <p className="absolute text-6xl font-extrabold animate-ping">
                    Game Over
                  </p>
                  <p className="relative z-20 text-6xl font-extrabold">
                    Game Over
                  </p>
                </div>
              </AnimateInOut>
              <div className="w-full grid grid-cols-[repeat(5,1fr)] max-w-[540px] max-sm:max-w-[300px] h-full max-sm:gap-1.5 gap-2.5">
                {board &&
                  board.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                      <Box
                        onClick={() => handleCellClick(rowIndex, colIndex)}
                        onContextMenu={(event) =>
                          handleRightClick(event, rowIndex, colIndex)
                        }
                        onTouchStart={(event) =>
                          handleRightClick(event, rowIndex, colIndex)
                        }
                      >
                        {cell === CellStatus.Revealed &&
                          game.board[rowIndex][colIndex].adjacentMines > 0 && (
                            <span className="text-sm">
                              {game.board[rowIndex][colIndex].adjacentMines}
                            </span>
                          )}
                        {cell === CellStatus.Flagged && (
                          <svg
                            className="w-4 h-4 text-red-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 4.293a1 1 0 011.414 0L10 7.586l3.293-3.293a1 1 0 111.414 1.414L11.414 9l3.293 3.293a1 1 0 11-1.414 1.414L10 10.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 9 5.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </Box>
                    )),
                  )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse items-center min-h-[50px] bg-dark-800 rounded-b-md border-t border-gray-700">
          <div className="flex gap-3 items-center capitalize w-[98%] mx-auto">
            <button className="flex items-center gap-1 group">
              <ShieldIcon className="!stroke-gray-500 !fill-gray-500 group-hover:!fill-white group-hover:!stoke-white" />
              <span className="font-semibold text-gray-500 group-hover:text-white">
                provably fair
              </span>
            </button>
            <button className="flex items-center gap-1 group">
              <GearIcon className="!stroke-gray-500 !fill-gray-500 group-hover:!fill-white group-hover:!stoke-white" />
              <span className="font-semibold text-gray-500 group-hover:text-white">
                settings
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-2 p-3 mt-3 font-semibold text-gray-400 rounded-md bg-dark-800">
        <span className="text-2xl text-white">Mines</span>
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
              In this action-packed game, you'll be going up against the casino.
              <br />
              <br />
              Make sure to avoid the mines at all costs, as they will make it
              very difficult for you to reach the maximum win.
            </span>
          </div>
        </div>
      </div>
      <Bets />
    </div>
  );
};

function Box({
  children,
  ...buttonProps
}: PropsWithChildren<ComponentProps<typeof Button>>) {
  return (
    <button
      {...buttonProps}
      className="bg-dark-750 mines-tile cursor-pointer hover:-translate-y-1 hover:brightness-95 active:translate-y-0.5 w-full h-full max-sm:max-h[55px] max-sm:max-w-[55px] max-h-[100px] max-w-[100px]  max-sm:p-2 transition-transform p-4 ease-out rounded-sm relative aspect-square text-gray-500 text-[1.1rem] max-sm:text-sm font-semibold"
    >
      {/* <span>1.09×</span> */}
      {children}
    </button>
  );
}

export default Mines;
