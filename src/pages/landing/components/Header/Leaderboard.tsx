import { SilverLockIcon } from "@/assets/icons";

export default function Leaderboard() {
  return (
    <div
      className="max-w-[1000px] flex flex-col overflow-y-auto max-h-[var(--app-height)] font-medium bg-dark-850 p-3 gap-2 rounded-md w-full max-sm:max-w-full max-sm:w-full text-sm text-gray-400"
      // style="transform: none;"
    >
      <div className="flex justify-start relative items-center font-semibold text-[1rem] text-gray-400">
        <div className="flex gap-1.5 items-center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="18"
            width="18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M399.9 80V32H112v48H32v38c0 32 9.5 62.79 26.76 86.61 13.33 18.4 34.17 31.1 52.91 37.21 5.44 29.29 20.2 57.13 50.19 79.83 22 16.66 48.45 28.87 72.14 33.86V436h-74v44h192v-44h-74v-80.49c23.69-5 50.13-17.2 72.14-33.86 30-22.7 44.75-50.54 50.19-79.83 18.74-6.11 39.58-18.81 52.91-37.21C470.5 180.79 480 150 480 118V80zM94.4 178.8c-10.68-14.68-17.17-34.4-18.24-54.8H112v67.37c-3.94-1.14-12.92-6.12-17.6-12.57zm323.2 0c-4.6 6.61-11.6 12.58-17.6 12.58 0-22.4 0-46.29-.05-67.38h35.9c-1.08 20.4-7.85 39.9-18.25 54.8z"></path>
          </svg>
          Leaderboard
        </div>
      </div>
      <div className="flex flex-col">
        <div className="max-h-[500px] overflow-y-auto pr-1">
          <table className="w-full border-separate border-spacing-0 border-spacing-y-1">
            <thead className="text-sm bg-dark-800">
              <tr className="uppercase text-[0.75rem]">
                <th className="p-2.5 text-center rounded-l-sm px-3">#</th>
                <th className="text-left">Username</th>
                <th className="text-center transition-colors cursor-pointer hover:text-gray-300">
                  Level
                </th>
                <th className="transition-colors cursor-pointer hover:text-gray-300">
                  Wagered
                </th>
                <th className="text-white transition-colors cursor-pointer hover:text-gray-300">
                  Profit
                </th>
                <th className="transition-colors cursor-pointer hover:text-gray-300">
                  Profit (ATH)
                </th>
                <th className="transition-colors cursor-pointer hover:text-gray-300">
                  Profit (ATL)
                </th>
                <th className="transition-colors cursor-pointer hover:text-gray-300">
                  Games played
                </th>
                <th className="rounded-r-sm px-2.5 transition-colors cursor-pointer hover:text-gray-300">
                  Games won
                </th>
              </tr>
            </thead>
            {/*NOTE: added text-center*/}
            <tbody className="text-center">
              {Array(20)
                .fill(0)
                .map((_, i) => ({ key: i + 1 }))
                .map(({ key }) => (
                  <tr key={key} className="bg-dark-800">
                    <td className=" rounded-l-sm text-center p-2.5">{key}</td>
                    <td className="text-center">
                      <div className="flex gap-1.5 px-2 items-center text-white cursor-pointer">
                        <div
                          // size="24"
                          className="sc-1nayyv1-1 jXwOeI"
                          // style="cursor: default;"
                        >
                          <img
                            draggable="false"
                            // size="24"
                            src="https://avatar.growdice.lol/506-0-0-0-0-0-00-04-3370516479.png"
                            alt="Picture"
                            className="sc-1nayyv1-0 kedPun"
                          />
                        </div>
                        Thk
                      </div>
                    </td>
                    <td>
                      <div className="flex items-center justify-center">
                        <div className="sc-ji84sw-0 brWwEp w-[50px]"> 62</div>
                      </div>
                    </td>
                    <td className="px-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        26,705.63
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </div>
                    </td>
                    <td className="px-4">
                      <div className="flex items-center justify-center gap-1 text-green-500">
                        9,525.49
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </div>
                    </td>
                    <td className="px-4 ">
                      <div className="flex items-center justify-center gap-1">
                        16,044.87
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </div>
                    </td>
                    <td className="px-4 ">
                      <div className="flex items-center justify-center gap-1">
                        -204.98
                        <img
                          src={SilverLockIcon}
                          width="18"
                          height="18"
                          className="sc-x7t9ms-0 dnLnNz"
                        />
                      </div>
                    </td>
                    <td className="px-4 text-center">2,377</td>
                    <td className="px-4 text-center rounded-r-sm">375</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
