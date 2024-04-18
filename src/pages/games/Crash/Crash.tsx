import { Bets } from "@/pages/landing/components";
import Chart from "./Chart";
import { useEffect, useState } from "react";
import socket from "@/utils/constants";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { SilverLockIcon } from "@/assets/icons";
import { GearIcon, ShieldIcon, XClose } from "@/assets/svgs";
import clsx from "clsx";
import { Button, Input, UserProfile } from "@/components";
import { toast } from "react-toastify";
import { triggerModal } from "@/store/slices/modal";

type Player = {
  user?: { username: string; photo: string };
  multiplier: number;
  bet: number;
  profit: number;
};

export default function Crash() {
  const dispatch = useAppDispatch();

  const [players, setPlayers] = useState<Player[]>([]);
  const [player, setPlayer] = useState<Player>({
    bet: 0,
    multiplier: 1.2,
    profit: 0,
    user: undefined,
  });

  const [history, setHistory] = useState<number[]>([]);

  const auth = useAppSelector((state) => state.auth);

  const totalBets = players
    .map((player) => player.bet)
    .reduce((acc, curr) => acc + curr, 0);

  console.log({ totalBets, bets: players.map((player) => player.bet) });

  const joinGame = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!player.bet) return toast.error("please enter a valid bet amount");

    socket.emit("crash:join_room", {
      player: {
        bet: player?.bet,
        multiplier: player?.multiplier,
        user: { username: auth.user?.username, photo: auth.user?.photo },
      } as Player,
      socketId: socket.id,
    });

    toast.success("bet placed!");
  };

  useEffect(() => {
    socket.emit("crash:get_players");

    socket.on("crash:players", (players: Player[]) => {
      console.log("CRASH_PLAYERS: ", { players });
      setPlayers(players);
    });

    socket.on("crash:history", (data) => {
      setHistory(data);
    });

    socket.on("crash:end", (data) => {
      console.log("CRASH:End", { data });
    });

    socket.on("crash:end", (data) => {
      console.log("CRASH:End", { data });
    });
    // return () => {
    //   socket.off("join_chat");
    // };
  }, []);

  // const

  const PlayerRow = ({ player }: { player: Player }) => (
    <tr
      onClick={() => {
        dispatch(
          triggerModal({
            children: <UserProfile username={player.user?.username || ""} />,
          }),
        );
      }}
      className="text-[0.8rem] text-gray-400 font-semibold cursor-pointer hover:bg-dark-600 transition-colors "
    >
      <td className="pl-1.5 rounded-l-sm text-left w-[20%]">
        <div className="flex gap-1.5 items-center">
          <div className="w-6 h-6 sc-1nayyv1-1 kAmJof">
            <img
              draggable="false"
              src="https://avatar.growdice.lol/0-4182-0-7922-4684-362-00-04-3370516479.png"
              alt="Picture"
              className="w-full h-full sc-1nayyv1-0 kedPun"
            />
          </div>
          {player.user?.username}
        </div>
      </td>
      <td className="text-center">{player.multiplier || "-"}</td>
      <td className="text-center">
        <span className="flex items-center justify-center gap-1">
          {player.bet || 0.65}
          <img
            src={SilverLockIcon}
            width="18"
            height="18"
            className="sc-x7t9ms-0 dnLnNz"
          />
        </span>
      </td>
      <td className="rounded-r-sm text-right h-[40px] pr-1.5">
        <span className="flex items-center justify-end gap-1">
          {player.profit || "-"}
          <img
            src={SilverLockIcon}
            width="18"
            height="18"
            className="sc-x7t9ms-0 dnLnNz"
          />
        </span>
      </td>
    </tr>
  );

  return (
    <div className="w-full  overflow-hidden h-full-app max-sm:max-h-[calc(var(--app-height)-var(--header-height)-var(--bottom-height))]">
      <div className="flex flex-col items-center flex-grow w-full h-full overflow-y-auto">
        <div className="gap-3 p-3 max-w-page">
          <div className="flex flex-col w-full gap-3 p-5 rounded-md bg-dark-800 ">
            <div className="grid grid-cols-6 gap-2">
              {history.map((item) => (
                <button
                  className={clsx(
                    "flex items-center justify-center p-2 text-sm font-semibold rounded-sm bg-dark-700",
                    item > 1 ? "bg-green-400" : "",
                  )}
                >
                  {item}×
                </button>
              ))}
            </div>
            <div className="flex flex-row-reverse w-full gap-3 max-xl:flex-col-reverse">
              <div className="relative flex flex-col w-full max-w-[350px] max-xl:max-w-full bg-dark-750 rounded-sm p-2.5">
                <div className="flex justify-between w-full text-sm font-semibold">
                  <div className="flex items-center gap-1 text-gray-500">
                    <span className="online-circle"></span>
                    <span>{players.length} players</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-500">Total bets:</span>
                    <span className="flex items-center gap-1 text-white">
                      {totalBets}
                      <img
                        src={SilverLockIcon}
                        width="18"
                        height="18"
                        className="sc-x7t9ms-0 dnLnNz"
                      />
                    </span>
                  </div>
                </div>
                <div className="max-h-[600px] max-sm:max-h-[300px] overflow-y-auto mt-1.5">
                  <div className="pr-1.5">
                    <table className="w-full border-separate border-spacing-0 border-spacing-y-1">
                      <thead>
                        <tr className="text-sm text-gray-500 uppercase">
                          <th className="h-[20px] rounded-l-sm text-left pl-1.5">
                            Player
                          </th>
                          <th>Multi</th>
                          <th>Bet</th>
                          <th className="rounded-r-sm text-right pr-1.5">
                            Profit
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {players.map((player) => (
                          <PlayerRow
                            player={player}
                            key={player.user?.username}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-full gap-2">
                <div
                  className="min-h-[450px] overflow-hidden relative w-full rounded-md"
                  id="crashRenderer"
                >
                  <div className="relative top-0 left-0 flex items-center justify-center w-full overflow-hidden rounded-md pointer-events-none z-1 bg-dark-750">
                    {/* <canvas width="827" height="450" className="bg-red-400_"> */}
                    <Chart />
                    {/* </canvas> */}
                  </div>
                  {/* <div className="absolute w-full flex p-2.5 z-5 gap-2 text-gray-500">
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
                  </div> */}
                  <div className="flex gap-3 items-center capitalize w-[98%] mx-auto">
                    <div className="flex items-center gap-1 group">
                      <ShieldIcon className="!stroke-gray-500 !fill-gray-500 group-hover:!fill-white group-hover:!stoke-white" />
                      <p className="font-semibold text-gray-500 group-hover:text-white">
                        provably fair
                      </p>
                    </div>
                    <div className="flex items-center gap-1 group">
                      <GearIcon className="!stroke-gray-500 !fill-gray-500 group-hover:!fill-white group-hover:!stoke-white" />
                      <p className="font-semibold text-gray-500 group-hover:text-white">
                        settings
                      </p>
                    </div>
                  </div>
                  {/* NOTE: chart */}
                  {/* <Chart /> */}
                </div>
                <form
                  onSubmit={joinGame}
                  // NOTE: Opacity, Relative
                  className={clsx(
                    "relative flex flex-col gap-2 p-3 text-sm font-medium rounded-sm",
                    auth.isAuthenticated ? "opacity-100" : "opacity-40",
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-white">
                      Bet Amount
                    </span>
                    <div className="relative flex items-center w-full">
                      <div className="absolute flex items-center gap-2 left-2">
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 grLtgJ"
                        />
                      </div>
                      <Input
                        placeholder="Bet"
                        className="outline-none indent-5 border-none p-1 text-[0.9rem] flex-grow text-white font-medium"
                        type="number"
                        value={(player?.bet || 0.0).toFixed(2)}
                        onChange={(e) =>
                          setPlayer((prev) => ({
                            ...prev,
                            bet: parseFloat(e.target.value),
                          }))
                        }
                      />
                      <div className="absolute flex items-center gap-2 right-2">
                        <div className="flex gap-2.5 font-semibold">
                          <button className="transition-colors hover:text-white">
                            1/2
                          </button>
                          <button className="transition-colors hover:text-white">
                            2×
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-white">
                      Auto Cashout
                    </span>
                    <div className="relative flex items-center w-full">
                      <div className="absolute flex items-center gap-2 left-2">
                        <XClose className="!stroke-gray-400" />
                      </div>
                      <Input
                        className="outline-none indent-5 border-none p-1 text-[0.9rem] flex-grow text-white font-medium"
                        type="text"
                        value={(player?.multiplier || 0.0).toFixed(2)}
                        onChange={(e) =>
                          setPlayer((prev) => ({
                            ...prev,
                            multiplier: parseFloat(e.target.value),
                          }))
                        }
                      />
                      <div className="absolute flex items-center gap-2 right-2">
                        <div className="flex gap-2.5 font-semibold">
                          <button className="transition-colors hover:text-white">
                            1/2
                          </button>
                          <button className="transition-colors hover:text-white">
                            2×
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    aria-disabled="true"
                    id="placeBet"
                    // NOTE: Min-h, Max-h
                    className="sc-1xm9mse-0 fzZXbl w-full min-h-[40px] max-h-[40px] text-sm rounded-sm text-nowrap"
                  >
                    <span>Place Bet</span>
                  </Button>
                  {!auth.isAuthenticated && (
                    <div className="absolute top-0 left-0 w-full h-full cursor-not-allowed z-5" />
                  )}
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-2 p-3 font-semibold text-gray-400 rounded-md bg-dark-800">
            <span className="text-2xl text-white">Crash</span>
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
                <div className="text-sm h-[40px] max-h-[40px] rounded-sm bg-dark-750 p-2 flex-grow flex justify-between items-center gap-2">
                  <span className="font-medium text-white">Max Multiplier</span>
                  <span className="flex items-center gap-1.5">1,000.00×</span>
                </div>
              </div>
              <div className="bg-dark-750 rounded-md  p-2.5 text-sm font-medium w-full text-justify leading-5">
                <span>
                  Predict the multiplier in this quick and simplistic odds-based
                  game, Crash!
                  <br />
                  <br />
                  Take on the house with a variety of different strategies to
                  defeat the house and take home some huge Diamond Lock winnings
                  against the house!
                  <br />
                  <br />
                  Crash is a simple game of chance where the player picks the
                  cashout amount for a betting round as the multiplier flies
                  through a grid. The cashout amount climbs until the multiplier
                  and as long as the player's cashout amount is lower than the
                  crash value, the player can win a payout.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Bets />
        </div>
      </div>
      <footer className="flex justify-center w-full text-sm font-medium text-gray-400">
        <div className="p-3 max-w-page"></div>
      </footer>
    </div>
  );
}
