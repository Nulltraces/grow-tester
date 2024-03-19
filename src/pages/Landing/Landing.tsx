import { MessageChatCircleIcon } from "@/assets/svgs";
import { Bets, Chat, Games, Header } from "./components";
import ChatToggle from "./components/Chat/ChatToggle";
import Hero from "./components/Hero";

export default function Landing() {
  return (
    <main className="flex flex-col h-screen gap-3_ bg-body">
      <Header />
      <div className="flex flex-1 overflow-auto ">
        <div className="fixed left-0 bottom-28 flex items-center_ justify-center items-center hover:-translate-y-1 bg-gray-800 transition-all duration-100 px-2 pt-2 rounded-sm">
          <ChatToggle icon={MessageChatCircleIcon} />
        </div>
        <Chat />
        <div className="container mx-auto pt-4 ml-3 pr-3 overflow-auto flex flex-col flex-1 transition-all duration-200 space-y-3">
          <Hero />
          <Games />
          <Bets />
        </div>
      </div>
    </main>
  );
}
