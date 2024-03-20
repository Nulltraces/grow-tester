import { WalletIcon } from "@/assets/svgs";
import ChatToggle from "../Chat/ChatToggle";
import MenuButton from "../MenuButton";

export default function BottomNav() {
  return (
    <footer className="w-full relative min-h-[var(--bottom-height)] max-h-[var(--bottom-height)] flex justify-around items-center z-[3999999999999999999999] shadow-md shadow-black  sm:hidden justify-around_ bg-dark-850 ">
      <div className="">
        <ChatToggle />
      </div>
      <button>
        <WalletIcon />
      </button>
      <MenuButton />
    </footer>
  );
}
