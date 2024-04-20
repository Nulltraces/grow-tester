import { SilverLockIcon } from "@/assets/icons";

export default function Towers() {
  return (
    <>
      <div className="gap-3 p-3 max-w-page">
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
              <div className="flex flex-col gap-2 p-3 text-sm font-medium">
                <div className="relative flex flex-col gap-2 text-sm font-medium opacity-40">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-white">
                      Bet Amount
                    </span>
                    <div className="bg-dark-700 h-[38px] text-gray-400 rounded-sm py-0.5 border transition-colors px-2 flex items-center gap-1.5 w-full border-dark-650">
                      <div className="flex items-center gap-2">
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 grLtgJ"
                        />
                      </div>
                      <input
                        placeholder="Bet"
                        className="bg-transparent outline-none border-none p-1 text-[0.9rem] flex-grow text-white font-medium font-medium"
                        type="text"
                        value="0.1"
                      />
                      <div className="flex items-center gap-2">
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
                  <div className="flex flex-col text-white gap-[5px]">
                    <div className="relative flex flex-col justify-start gap-1 whitespace-nowrap">
                      <span className="text-sm font-medium text-white">
                        Difficulty
                      </span>
                      <button className="bg-dark-700 gap-3 !cursor-pointer text-sm h-[38px] font-medium transition-colors duration-200 ease-out border rounded-sm relative py-1.5 px-2 flex w-full justify-between items-center text-white border-dark-600">
                        <span>Normal</span>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          height="12"
                          width="12"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full cursor-not-allowed z-5"></div>
                </div>
                <button
                  aria-disabled="true"
                  className="text-sm rounded-sm sc-1xm9mse-0 fzZXbl text-nowrap"
                >
                  Place Bet
                </button>
              </div>
            </div>
            <div className="overflow-hidden bg-dark-850 w-full h-full min-h-[400px] max-sm:min-h-[300px] flex justify-center relative">
              <div className="!max-h-[600px] w-full">
                <div className="flex items-center justify-center w-full h-full p-2">
                  <div className="w-[240px] gap-2 overflow-y-auto overflow-x-hidden flex flex-col h-full p-2 max-md:hidden">
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 1
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        1.44×
                      </span>
                    </div>
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 2
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        2.16×
                      </span>
                    </div>
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 3
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        3.24×
                      </span>
                    </div>
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 4
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        4.86×
                      </span>
                    </div>
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 5
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        7.29×
                      </span>
                    </div>
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 6
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        10.93×
                      </span>
                    </div>
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 7
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        16.40×
                      </span>
                    </div>
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 8
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        24.60×
                      </span>
                    </div>
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 9
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        36.91×
                      </span>
                    </div>
                    <div className="border-2 snap-start transition-all w-full overflow-hidden flex justify-between px-2.5 gap-2.5 h-full  rounded-sm items-center font-medium border-gray-700">
                      <span className="font-semibold text-white uppercase">
                        Hit 10
                      </span>
                      <span className="text-sm font-semibold text-gray-400">
                        55.36×
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col p-2  gap-1 rounded-md bg-dark-800 w-full max-w-[370px]">
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
                      <div className="flex w-full gap-2">
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                        <button className="w-full h-[45px] rounded-sm transition-transform ease-out flex pb-[5px] justify-center items-center shadow-md  bg-dark-750 towers-default"></button>
                      </div>
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
                This game lets you get the highest multiplier possible by
                climbing the rows to the top of the tower.
                <br />
                <br />
                Make sure to avoid the Skulls at all costs, as they will make it
                very difficult for you to reach the tower's roof.
              </span>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col w-full gap-1 pt-1 text-sm font-semibold rounded-md "
          style={{
            mask: "linear-gradient(rgb(0, 0, 0) 0px, rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0) 95%, rgba(0, 0, 0, 0) 0px) 100% 50% / 100% 100% repeat-x",
          }}
        >
          <div className="flex justify-between gap-2.5 items-center w-full">
            <span className="flex max-sm:hidden">All Bets</span>
            <div className="flex gap-1.5">
              <button className="flex px-2 py-1 text-white transition-colors rounded-sm hover:text-white bg-dark-800">
                All Bets
              </button>
              <button className="flex px-2 py-1 text-gray-500 transition-colors rounded-sm hover:text-white">
                Big Bets
              </button>
              <button className="flex px-2 py-1 text-gray-500 transition-colors rounded-sm hover:text-white">
                Race
              </button>
            </div>
          </div>
          <div className="max-h-[500px] min-h-[500px] overflow-y-auto overflow-hidden overflow-x-auto  overflow-y-hidden min-h-[100px]">
            <div>
              <table className="pr-1 overflow-x-scroll overflow-y-auto border-separate table-fixed border-spacing-0 border-spacing-y-1 sm:w-full">
                <thead className="uppercase text-gray-500 text-[0.85rem] bg-dark-800">
                  <tr>
                    <th className="rounded-l-sm py-3 pl-3 text-left w-[1/2]">
                      Game
                    </th>
                    <th className="py-2 text-left">Player</th>
                    <th className="py-2 text-center">Bet</th>
                    <th className="py-2 text-center">Profit</th>
                    <th className="w-2/12 py-2 text-center">Multiplier</th>
                    <th className="py-2 pr-3 text-right rounded-r-sm">Time</th>
                  </tr>
                </thead>
                <tbody className="border-spacing-y-3">
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Keno
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">muratege</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.02
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.02
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
                      21:20:32
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Keno
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">zga7arh</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
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
                      <span className="flex items-center justify-center gap-1">
                        0.24
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-500">
                      3.40×
                    </td>
                    <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                      21:20:31
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Keno
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">muratege</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.02
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.02
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
                      21:20:30
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Towers
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">Dragonwiza</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.20
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.20
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
                      21:20:31
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Mines
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">rzdcfmkbwu</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.25
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-400">
                      <span className="flex items-center justify-center gap-1">
                        0.02
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-500">
                      1.09×
                    </td>
                    <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                      21:20:30
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Slots
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">satani</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.20
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-400">
                      <span className="flex items-center justify-center gap-1">
                        -0.10
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-500">
                      0.50×
                    </td>
                    <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                      21:20:30
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Slots
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">jonnegamer</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.06
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.06
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
                      21:20:29
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Mines
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">KatzeBoss</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        1.60
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -1.60
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
                      21:20:29
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Keno
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">muratege</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.02
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.02
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
                      21:20:28
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Keno
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">zga7arh</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
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
                      <span className="flex items-center justify-center gap-1">
                        0.24
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-500">
                      3.40×
                    </td>
                    <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                      21:20:29
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Blackjack
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">MrLisomin</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        1.00
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-400">
                      <span className="flex items-center justify-center gap-1">
                        1.00
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
                      21:20:28
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Keno
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">muratege</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.02
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.02
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
                      21:20:27
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Keno
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">zga7arh</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
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
                      <span className="flex items-center justify-center gap-1">
                        0.24
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-500">
                      3.40×
                    </td>
                    <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                      21:20:26
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Mines
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">Wanda01</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
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
                      <span className="flex items-center justify-center gap-1">
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
                      21:20:26
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Slots
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">satani</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.20
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-400">
                      <span className="flex items-center justify-center gap-1">
                        -0.02
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px] text-green-500">
                      0.90×
                    </td>
                    <td className="pr-3 rounded-r-sm min-w-[90px] text-right">
                      21:20:26
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Towers
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">Dragonwiza</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
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
                      <span className="flex items-center justify-center gap-1">
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
                      21:20:25
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Keno
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">muratege</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.02
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.02
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
                      21:20:25
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Keno
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">zga7arh</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.10
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.10
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
                      21:20:25
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Mines
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">rzdcfmkbwu</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.25
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.25
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
                      21:20:24
                    </td>
                  </tr>
                  <tr className="overflow-hidden text-sm bg-dark-800 text-light">
                    <td className="rounded-l-sm py-3 text-left pl-3 min-w-[110px]">
                      Slots
                    </td>
                    <td className="text-left text-white overflow-hidden min-w-[130px]">
                      <a className="cursor-pointer">satani</a>
                    </td>
                    <td className="text-center  min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        0.20
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </span>
                    </td>
                    <td className="text-center min-w-[80px]">
                      <span className="flex items-center justify-center gap-1">
                        -0.20
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
                      21:20:24
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex justify-center w-full text-sm font-medium text-gray-400">
        <div className="p-3 max-w-page"></div>
      </footer>
    </>
  );
}
