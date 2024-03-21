import { MessageChatCircleIcon } from "@/assets/svgs";
import { Bets, BottomNav, Chat, Games, Header } from "./components";
import ChatToggle from "./components/Chat/ChatToggle";
import Hero from "./components/Hero";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="flex flex-col h-screen gap-3_ bg-body">
      {loading ? (
        <div className="flex w-full h-full items-center justify-center">
          <div className="space-y-3">
            <div className="animate-pulse w-[70%] sm:w-auto mx-auto">
              <img src="/logo.png" />
            </div>
            <div className="mx-auto w-fit">
              <Link
                to="/"
                className="text-2xl sm:text-3xl font-bold text-primary uppercase text-center"
              >
                join our discord server
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div id="modal"></div>
          <Header />
          <div className="flex flex-1_ overflow-auto h-[calc(100%-7.2rem)] sm:h-auto p-2">
            <div className="fixed hidden sm:inline-block left-0 bottom-28 items-center_ justify-center items-center hover:-translate-y-1 bg-gray-800 transition-all duration-100 px-2 pt-2 rounded-sm">
              <ChatToggle icon={MessageChatCircleIcon} />
            </div>
            <Chat />
            <div className="container_ md:px-8 mx-auto pt-4 {ml-3 pr-3} overflow-auto flex flex-col flex-1 transition-all duration-200 space-y-3">
              <Hero />
              <Games />
              <Bets />
            </div>
          </div>
          <BottomNav />
        </>
      )}
    </main>
  );
}
