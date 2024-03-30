import { SilverLockIcon } from "@/assets/icons";
import { Input } from "..";

export default function Tip() {
  return (
    <div className="opacity-100">
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-white text-sm">Username</span>
          {/* <div className="bg-dark-700 h-[38px] text-gray-400 rounded-sm py-0.5 border transition-colors px-2 flex items-center gap-1.5 w-full border-dark-650">
            <input
              className="bg-transparent outline-none border-none p-1 text-[0.9rem] flex-grow text-white"
              type="text"
              value=""
            />
          </div> */}
          <Input
            className="outline-none border-none p-1 text-[0.9rem] flex-grow text-white"
            type="text"
            value=""
          />
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-medium text-white text-sm">Amount</span>
          <div className="bg-dark-700 h-[38px] text-gray-400 relative rounded-sm py-0.5 border transition-colors px-2 flex items-center gap-1.5 w-full border-dark-650">
            <div className="flex items-center gap-2 w-fit absolute left-2">
              <img
                src={SilverLockIcon}
                width="18"
                height="18"
                className="sc-x7t9ms-0 grLtgJ"
              />
            </div>
            <input
              className="indent-6 bg-transparent outline-none border-none p-1 text-[0.9rem] flex-grow text-white"
              type="text"
              value="0.1"
            />
          </div>
        </div>
        <button
          disabled
          aria-disabled="true"
          className="sc-1xm9mse-0 wallet-button text-sm rounded-sm"
        >
          Send Tip
        </button>
      </div>
    </div>
  );
}
