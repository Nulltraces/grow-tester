import { WalletIcon } from "@/assets/svgs";
import ChatToggle from "../Chat/ChatToggle";
import MenuButton from "../MenuButton";
import { useSearchParams } from "react-router-dom";

export default function BottomNav() {
  const setSearchParams = useSearchParams()[1];

  return (
    <footer className="w-full fixed relative_ bottom-0 h-16 flex justify-around items-center z-[900] shadow-md shadow-black sm:hidden justify-around_ bg-dark-850">
      <div className="">
        <ChatToggle />
      </div>
      <button onClick={() => setSearchParams({ modal: "sign-in" })}>
        <WalletIcon />
      </button>
      <MenuButton />
    </footer>
  );
}
