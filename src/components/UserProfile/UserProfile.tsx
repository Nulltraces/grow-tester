import { CurrencyNote, StatsIcon } from "@/assets/svgs";
import { Button } from "..";
import { useEffect } from "react";
import { capitalizeCamelCase } from "@/utils/strings";
import User1 from "@/assets/users/user-1.png";
import "./userprofile.css";

const UserStats = {
  totalBets: "totalBets",
  gamesWon: "gamesWon",
  netProfit: "netProfit",
  totalWagered: "totalWagered",
  allTimeLow: "allTimeLow",
  allTimeHigh: "allTimeHigh",
} as const;

type UserStat = (typeof UserStats)[keyof typeof UserStats];

const userStats = new Map<UserStat, number>([
  ["totalBets", 2272],
  ["gamesWon", 825],
  ["netProfit", 448.06],
  ["totalWagered", -4.6],
  ["allTimeLow", 14.91],
  ["allTimeHigh", -6.48],
]);

export default function UserProfile({ uid }: { uid: string }) {
  useEffect(() => {
    console.log("USER_STATS", userStats.entries(), { uid });
  }, []);

  return (
    <div className="overflow-auto sm:overflow-visible pb-12 sm:mb-0 sm:w-[90vw] sm:h-[86vh] md:w-[42vw] md:h-[86vh] rounded space-y-1 py-2">
      <div className="w-[98%] mx-auto pb-4">
        <header>
          <h2 className="capitalize font-semibold text-gray-400">
            user profile
          </h2>
        </header>
        <div className="rounded-md flex items-end overflow-clip user-bg h-40 mt-2">
          <div className="w-24 ml-4">
            <img
              src={User1}
              className="object-cover w-full"
              style={{
                imageRendering: "pixelated",
              }}
            />
          </div>
          <div className="h-full p-6 pl-4 space-y-2">
            <div className="flex gap-1 items-center">
              <h2 className="text-3xl font-bold">UserName</h2>
              <div className="p-1 h-fit py-[2px] rounded uppercase bg-[rgb(161,152,121)] text font-bold bg-amber text-gray-950">
                {/* User Level */}
                lvl {"11"}
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex gap-2 items-center text-xs font-semibold">
                <span className="uppercase  text-[#A3A6C2]">xp:</span>{" "}
                <span>{"8,110/10,563"}</span>
              </div>
              <div className="w-full h-3 relative after:bg-primary after:rounded overflow-clip after:absolute after:left-0 after:w-1/2 after:h-full  bg-gray-800/60 rounded-md" />
              <div className="flex gap-2 items-center text-sm font-semibold">
                <span className="uppercase text-[#A3A6C2]">join date:</span>{" "}
                <span>{"September 27th 2023, 09:47"}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-1 p-2 bg-dark-800 rounded mt-3">
          <header>
            <h3 className="capitalize text-sm sm:text-base font-semibold text-gray-400">
              actions
            </h3>
          </header>
          <Button className="flex items-center gap-1 w-full !py-1">
            <CurrencyNote />
            <p>tip</p>
          </Button>
        </div>
        <div className="space-y-1 rounded bg-dark-800 p-2 mt-3">
          <header className="flex items-center gap-1">
            <StatsIcon className="!stroke-gray-400 !fill-gray-400" />
            <h3 className="capitalize text-sm sm:text-base font-semibold text-gray-400">
              user statistics
            </h3>
          </header>
          <div className="grid gap-2 rounded grid-cols-2 bg-dark-800">
            {Array.from(userStats.entries()).map(([key, value], i) => (
              <div
                key={i}
                className="bg-dark-700 rounded text-center py-2 space-y-2"
              >
                <p className="text-sm text-gray-400 font-bold">
                  {capitalizeCamelCase(key as string)}
                </p>
                <p className="font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
