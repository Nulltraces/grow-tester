import { ScrollIcon } from "@/assets/svgs";
import { Button } from "@/components";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { triggerModal } from "@/store/slices/modal";
import socket from "@/utils/constants";
import { useEffect, useState } from "react";
import Rules from "./Rules";
import "./chat.css";

export default function ChatFooter() {
  const [inputMessage, setInputMessage] = useState("");
  const [onlineUsersCount, setOnlineUsersCount] = useState(0);

  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    socket.on("usersCount", (count: number) => {
      setOnlineUsersCount(count);
    });

    return () => {
      socket.off("usersCount");
    };
  }, []);

  const sendMessage = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const message: Message = {
      content: inputMessage,
      owner: {
        level: 11,
        photo: auth.user?.photo || "",
        uid: auth.user?.id || "",
        username: auth.user?.username || "",
      },
      date: new Date(),
      room: "global",
    };

    try {
      if (inputMessage.trim() !== "") {
        socket.emit("send_message", message);
        setInputMessage("");
      }
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <footer className="shrink-0 bg-dark-800  py-2">
      <form className="w-[94%] mx-auto space-y-2" onSubmit={sendMessage}>
        <div className="outline-gray-600 outline outline-2 bg-dark-800 rounded-sm h-9">
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            type="text"
            disabled={!auth.isAuthenticated || auth.isLoading}
            className="w-full h-full disabled:cursor-not-allowed disabled:text-gray-300 placeholder:font-semibold text-gray-600 px-2"
            placeholder={
              auth.isAuthenticated
                ? "Enter message..."
                : "You must be logged in to chat"
            }
            // disabled
          />
        </div>
        <div className="flex w-full">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 aspect-square rounded-full bg-green-500" />
            <p className="text-sm font-semibold">{onlineUsersCount} online</p>
          </div>
          <div className="flex ml-auto items-center gap-2">
            <p className="text-sm font-semibold">150</p>
            <button
              title="rules"
              type="button"
              onClick={() =>
                dispatch(triggerModal({ children: <Rules />, show: true }))
              }
              className="p-2 bg-gray-700 px-4 rounded-sm"
            >
              <ScrollIcon />
            </button>
            <Button
              disabled={!auth.isAuthenticated || auth.isLoading}
              type="submit"
              className="!py-1"
            >
              Send
            </Button>
          </div>
        </div>
      </form>
    </footer>
  );
}
