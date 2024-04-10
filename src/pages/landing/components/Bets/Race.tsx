import SilverLockIcon from "@/assets/icons/silver-lock.webp";
import { Link } from "react-router-dom";

export default function Race() {
  return (
    <>
      <thead className="uppercase text-gray-500 text-[0.85rem]">
        <tr>
          <th className="bg-dark-850 rounded-l-md py-3 pl-3 text-left w-[1/2]">
            Game
          </th>
          <th className="bg-dark-850 py-2 text-left">Player</th>
          <th className="bg-dark-850 py-2 text-center">Bet</th>
          <th className="bg-dark-850 py-2 text-center">Profit</th>
          <th className="bg-dark-850 py-2 text-center w-2/12">Multiplier</th>
          <th className="bg-dark-850 rounded-r-sm py-2 pr-3 text-right">
            Time
          </th>
        </tr>
      </thead>
      <tbody className="border-spacing-y-3">
        {[].map((_, i) => (
          <tr
            key={i}
            className="bg-dark-850 text-sm text-light overflow-hidden"
          >
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
        ))}
      </tbody>
    </>
  );
}
