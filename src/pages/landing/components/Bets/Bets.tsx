// import { Table } from "@/components";
import SilverLockIcon from "@/assets/icons/silver-lock.webp";
import { Link } from "react-router-dom";

// type TableValues = {
//   game: string;
//   player: string;
//   bet: string;
//   profit: string;
//   multiplier: string;
//   time: string;
// };

// const games: TableValues[] = Array(9)
//   .fill(0)
//   .map(() => ({
//     game: "roulette",
//     player: "Malik",
//     bet: "0.2",
//     profit: "-0.3",
//     multiplier: "0.01*",
//     time: "20:00",
//     // key: i,
//   }));

// type TableValue = TableValues[keyof TableValues];

export default function Bets() {
  return (
    // <div className="mt-6">
    //   <div className="w-full mt-6 flex text-sm font-bold text-white uppercase">
    //     <h3>all bets</h3>
    //     <div className="ml-auto flex items-center gap-4 w-fit">
    //       <h3>all bets</h3>
    //       <h3>big bets</h3>
    //       <h3>race</h3>
    //     </div>
    //   </div>
    //   <div className="relative flex-1 mt-2 text-white after:w-full after:h-32 after:z-10 after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-body">
    //     <Table<TableValues, TableValue>
    //       head={["game", "player", "bet", "profit", "multiplier", "time"]}
    //       // body={[["me", "yyyyy"], ["you"], ["us"], ["them"], ["They"]]}
    //       body={games.map((game) => Object.entries(game))}
    //       title="Bets"
    //       fullData={games}
    //     />
    //   </div>
    // </div>
    <div className="pt-1 table-test rounded-md font-semibold text-sm flex flex-col gap-1 w-full ">
      <div className="flex justify-between gap-2.5 items-center w-full">
        <span className="flex max-sm:hidden">All Bets</span>
        <div className="flex gap-1.5">
          <button className="flex py-1 px-2 rounded-sm transition-colors hover:text-white text-white bg-dark-800">
            All Bets
          </button>
          <button className="flex py-1 px-2 rounded-sm transition-colors hover:text-white text-gray-500">
            Big Bets
          </button>
          <button className="flex py-1 px-2 rounded-sm transition-colors hover:text-white text-gray-500">
            My Bets
          </button>
          <button className="flex py-1 px-2 rounded-sm transition-colors hover:text-white text-gray-500">
            Race
          </button>
        </div>
      </div>
      <div className="max-h-[500px] min-h-[500px]_ overflow-y-auto overflow-hidden overflow-x-auto  overflow-y-hidden_ min-h-[100px]">
        <div className="table-wrapper">
          <table className="border-separate overflow-y-auto overflow-x-scroll table-fixed border-spacing-0 border-spacing-y-1 pr-1 sm:w-full">
            <thead className="uppercase text-gray-500 text-[0.85rem]">
              <tr>
                <th className="bg-dark-850 rounded-l-md py-3 pl-3 text-left w-[1/2]">
                  Game
                </th>
                <th className="bg-dark-850 py-2 text-left">Player</th>
                <th className="bg-dark-850 py-2 text-center">Bet</th>
                <th className="bg-dark-850 py-2 text-center">Profit</th>
                <th className="bg-dark-850 py-2 text-center w-2/12">
                  Multiplier
                </th>
                <th className="bg-dark-850 rounded-r-sm py-2 pr-3 text-right">
                  Time
                </th>
              </tr>
            </thead>
            <tbody className="border-spacing-y-3">
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Slots
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    Iamthetopg
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.40
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.40
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:03
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Cross the Road
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    lucklucknig
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.10
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-400">
                  <span className="flex gap-1 justify-center items-center">
                    0.06
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-500">
                  1.60×
                </td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:02
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Cross the Road
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    Sluagh
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    1.00
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -1.00
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:02
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Limbo
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    MrOIXC
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-400">
                  <span className="flex gap-1 justify-center items-center">
                    0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-500">
                  2.00×
                </td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:01
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Slots
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    Iamthetopg
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.40
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.40
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:01
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Plinko
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    wqweqweqwe
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.01
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-400">
                  <span className="flex gap-1 justify-center items-center">
                    0.01
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-500">
                  2.10×
                </td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:01
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Mines
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    suquot
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.50
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.50
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:01
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Slots
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    Coyzprofit93
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.60
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.60
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:00
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Limbo
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    MrOIXC
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:00
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Mines
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    zaldeks
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    1.00
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -1.00
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:00
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Mines
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    Epoxycardenas
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-400">
                  <span className="flex gap-1 justify-center items-center">
                    0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-500">
                  2.00×
                </td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:07:00
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Reme
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    leekie
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    100.00
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -100.00
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:06:59
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Cross the Road
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    Sluagh
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    1.00
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -1.00
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:06:59
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Limbo
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    MrOIXC
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-400">
                  <span className="flex gap-1 justify-center items-center">
                    0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px] text-green-500">
                  2.00×
                </td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:06:59
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Mines
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    jamie
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.28
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.28
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:06:58
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Slots
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    Coyzprofit93
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.60
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.60
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:06:58
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Limbo
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    MrOIXC
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.05
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:06:57
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Mines
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    jamie
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.28
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.28
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:06:57
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Slots
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    Coyzprofit93
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.60
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.60
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:06:57
                </td>
              </tr>
              <tr className="bg-dark-850 text-sm text-light overflow-hidden">
                <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                  Mines
                </td>
                <td className="text-left text-white overflow-hidden min-w-[130px]">
                  <Link to={"/"} className="text-white cursor-pointer">
                    suquot
                  </Link>
                </td>
                <td className="text-center  min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    0.50
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">
                  <span className="flex gap-1 justify-center items-center">
                    -0.50
                    <img
                      src={SilverLockIcon}
                      width="18"
                      height="18"
                      className="sc-x7t9ms-0 dnLnNz"
                    />
                  </span>
                </td>
                <td className="text-center min-w-[80px]">0.00×</td>
                <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                  12:06:56
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
