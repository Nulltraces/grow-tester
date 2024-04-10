import { Outlet, useSearchParams } from "react-router-dom";
import { AuthForm, Modal } from "@/components";
import { closeModal, triggerModal } from "@/store/slices/modal";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BottomNav, Chat, Header } from "./landing/components";
import ChatToggle from "./landing/components/Chat/ChatToggle";
import { MessageChatCircleIcon } from "@/assets/svgs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import socket from "@/utils/constants";

export default function Root() {
  const dispatch = useAppDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const authModal = searchParams.get("modal");
  const auth = useAppSelector((state) => state.auth);

  useEffect(() => {
    console.log("CONNECT_USER_TO_SOCKET: ", {
      username: auth.user?.username,
      socketId: socket.id,
    });

    socket.emit("connect_user", {
      username: auth.user?.username,
      socketId: socket.id,
    });
  }, [socket.id]);

  useEffect(() => {
    // if (authModal !== "sign-in" && authModal !== "register") return;
    if (authModal === "sign-in" || authModal === "register") {
      dispatch(
        triggerModal({
          children: <AuthForm route={authModal} />,
          clickToDisable: true,
          show: true,
          className: "",
          cancel: () => setSearchParams({ modal: "false" }),
        }),
      );
    } else if (authModal === "false") {
      dispatch(closeModal());
    }
  }, [authModal, dispatch, setSearchParams]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <ToastContainer position="bottom-right" className="z-[100000000000000]" />
      {loading ? (
        <div className="flex flex-col h-screen gap-3_ bg-body">
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
        </div>
      ) : (
        <>
          <Modal />
          {/* <MouseTracker /> */}
          <main className="flex flex-col h-screen gap-3_ bg-body">
            <Header />
            <div className="flex flex-1_ overflow-auto h-[calc(100%-7.2rem)] sm:h-auto p-2 md:p-0">
              <div className="fixed hidden sm:inline-block left-0 bottom-28 items-center_ justify-center items-center hover:-translate-y-1 bg-gray-800 transition-all duration-100 px-2 pt-2 rounded-sm z-10">
                <ChatToggle icon={MessageChatCircleIcon} />
              </div>
              <Chat />
              <div className="container_ md:px-8 mx-auto pt-4 {ml-3 pr-3} overflow-auto flex flex-col flex-1 transition-all duration-200 space-y-3">
                <Outlet />
              </div>
            </div>
            <BottomNav />
          </main>
        </>
      )}
    </>
  );
}
