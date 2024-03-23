// @ts-nocheck COMEBACK
import { TrophyIcon } from "@/assets/svgs";
import { Table } from "@/components";
import User1 from "@/assets/users/user-1.png";
import clsx from "clsx";

// NOTE: Remove / Move type annotations
type TableUser = { name: string; photo: string };

type TableValues = {
  username: TableUser;
  level: number;
  wagered: number;
  profit: number;
  "profit (atl)": number;
  gamesPlayed: number;
  gamesWon: number;
};

type TableValue = TableValues[keyof TableValues];

export default function Leaderboard() {
  const games: TableValues[] = Array(9)
    .fill(0)
    .map((_, i) => ({
      "#": i + 1,
      username: { name: "KaanOzturk33", photo: User1 },
      level: 11,
      wagered: 0.2,
      profit: -0.3,
      "profit (atl)": 0.01,
      gamesPlayed: 20,
      gamesWon: 12,
    }));

  return (
    <div className="w-[98%] p-2 md:w-[70vw] h-full mx-auto pt-6 sm:mt-0 gap-1 overflow-auto">
      <header className="flex items-center gap-2">
        <TrophyIcon className="stroke-gray-400 fill-gray-400" />
        <h2 className="text-gray-400 text-md font-bold">Leaderboard</h2>
      </header>
      <Table<TableValues, TableValue>
        head={[
          "#",
          "username",
          "level",
          "wagered",
          "profit",
          "profit (alt)",
          "games played",
          "games won",
        ]}
        // body={[["me", "yyyyy"], ["you"], ["us"], ["them"], ["They"]]}
        body={games.map((game) => Object.entries(game))}
        title="Bets"
        fullData={games}
        itemBuilder={({ item, key }) => {
          const i = key;
          const tableItem = item as [
            TableValue,
            (typeof games)[0][keyof (typeof games)[0]]
          ];
          const itemKey = tableItem[0];
          const itemValue = tableItem[1];
          console.log("ITEM_BUILDER:", { item, tableItem, itemValue });

          if (itemKey === "username") {
            const item = itemValue as TableUser;
            console.log("NOT_NUMBER", { item, itemValue });
            return (
              <td
                className={clsx(
                  "whitespace-nowrap bg-dark-800 text-center overflow-ellipsis py-2 font-bold",
                  i === 0 && "rounded-l-lg",
                  i === games.length - 1 && "rounded-r-xl"
                )}
                key={key}
              >
                <div className="flex w-fit mx-auto items-center gap-2">
                  <img
                    src={item.photo}
                    alt=""
                    className="w-6 aspect-square rounded-full"
                  />
                  <p className="overflow-ellipsis">{item.name}</p>
                </div>
              </td>
            );
          }

          if (itemKey === "level") {
            const item = itemValue as number;
            console.log("NOT_NUMBER", { item, itemValue });
            return (
              <td
                className={clsx(
                  "whitespace-nowrap bg-dark-800 text-center overflow-ellipsis py-2 font-bold",
                  i === 0 && "rounded-l-lg",
                  i === games.length - 1 && "rounded-r-xl"
                )}
                key={key}
              >
                <div className="px-2 md:px-4 mx-auto h-fit w-fit py-[2px] rounded uppercase bg-gradient-to-br from-orange-500 to-pink-700 text font-bold bg-amber text-white">
                  {/* User Level */}
                  {item}
                </div>
              </td>
            );
          }

          return (
            <td
              className={clsx(
                "whitespace-nowrap bg-dark-800 text-center overflow-ellipsis py-2 font-bold",
                i === 0 && "rounded-l-lg pl-3",
                i === games.length - 1 && "rounded-r-xl"
              )}
              key={key}
            >
              {tableItem[1] as React.ReactNode}
            </td>
          );
        }}
      />
    </div>
  );
}
