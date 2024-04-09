import { SilverLockIcon, YellowLockIcon } from "@/assets/icons";
import { toast } from "react-toastify";

const Notification = {
  currencyChanged(currency: Currency) {
    return toast(
      <div className="capitalize flex items-center gap-2">
        <p>Switched currency mode to</p>
        <div className="w-5 aspect-square inline-block">
          <img
            className="w-full h-full"
            src={currency === "diamond-lock" ? SilverLockIcon : YellowLockIcon}
          />
        </div>
      </div>,
      {
        progressStyle: {
          background: "blue",
          accentColor: "yellow",
        },
      },
    );
  },
};

export default Notification;
