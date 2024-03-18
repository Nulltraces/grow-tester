import React, { useEffect, useState } from "react";
import Chat from "./Chat";
// import User from "../assets/user.png";
import Cancel from "../assets/cancelIcon.svg";
import ChatRules from "./ChatRules";
import io from "socket.io-client";
import axios from "axios";
import jwt_decode from "jwt-decode";
 
const ENDPOINT = "http://localhost:5000";
const socket = io(ENDPOINT);
const ResChat = ({showModal,setShowModal}) => {
  const [showChatRules, setShowChatRules] = useState(false);
  const [message, setMessage] = useState("");
  const [allmessages, setAllMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userLoggedIn, setUserLoggedIn] = useState("");

  const handleSendMessage = async () => {
    try {
      const userToken = document?.cookie
        ?.split("; ")
        ?.find((row) => row?.startsWith("jwt="))
        ?.split("=")[1];
      const headers = {
        Authorization: `Bearer ${userToken}`,
      };
      const decodedToken = jwt_decode(userToken);
      const userId = decodedToken?.id;
      const name = decodedToken?.username;

      const messageData = { name: name, text: message, userId: userId };

      const response = await axios.post(
        "http://localhost:5000/messages/sendMsg",
        messageData,
        { headers }
      );

      // Handle success
      socket.emit("new message", messageData);
      setMessage("");
      console.log("Message sent successfully:", response.data);
    } catch (error) {
      // Handle error
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    const fetchMessagesAndUserData = async () => {
      setUserLoggedIn(localStorage.getItem("userName"));
      try {
        // Fetch messages
        const response = await axios.get(
          `http://localhost:5000/messages/getMsg`
        );
        setAllMessages(response?.data);
        setLoading(false); // Update loading state when data is fetched
      } catch (error) {
        console.error("Error fetching user data and messages:", error);
        setLoading(false); // Handle error and update loading state
      }
    };

    fetchMessagesAndUserData(); // Call the function to fetch user data and messages

    // Add a listener for new messages
    socket.on("receive message", (newMessage) => {
      setAllMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, [message, allmessages]);
  return (
    <>
      <div>
        {showModal ? (
          <>
            <div className="w-[370px] bg-transparent items-center hide-scrollbar overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none">
              <div className=" fixed w-[370px] h-full  my-6 mx-auto py-3 px-2  left-0 overflow-y-auto ">
                <div className="w-[370px] shadow-lg flex flex-col  pb-5 ">
                  <div className="px-1">
                    <div className="flex  justify-between fixed xl:top-[8%] lg:top-[10%] top-[12%] h-16 z-30 w-[370px] left-0 px-2 ">
                      <div className="flex justify-center items-center gap-2">
                        <span class="relative flex h-3 w-3">
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
                          <span class="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
                        </span>
                        <h1 className="text-white text-case">Online Status</h1>
                      </div>

                      <div className="flex justify-between items-center gap-2 text-[#81838c]">
                        {/* Chat Rules content */}

                        <div
                          className="flex justify-center items-center gap-2 text-[#81838c]"
                          onClick={() => {
                            setShowChatRules(true);
                          }}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="18"
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M448 48l-32-16-32 16-32-16-32 16-32-16-32 16-32-16-32 16-48-16v256.05h224V424c0 30.93 33.07 56 64 56h12c30.93 0 52-25.07 52-56V32zM272.5 240l-.5-32h159.5l.5 32zm-64-80l-.5-32h223.5l.5 32z"></path>
                            <path d="M336 424V320H16v32c0 50.55 5.78 71.62 14.46 87.63C45.19 466.8 71.86 480 112 480h256s-32-20-32-56z"></path>
                          </svg>
                          <h1>Chat Rules</h1>
                        </div>
                        <div className="flex items-center justify-between">
                          <img
                            src={Cancel}
                            alt="sdfghjkl"
                            onClick={() => setShowModal(false)}
                            className="cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>
                    {loading ? (
                      <div>Loading...</div>
                    ) : (
                      <div className="w-full  pt-24 pb-4  flex flex-col gap-2  ">
                        {allmessages.map((message, index) => (
                          <Chat key={index} user={message} message={message} />
                          // console.log("Current Message:", message);
                          // return (
                          //   <div key={index}>
                          //     <p>Name: {message.name}</p>
                          //     <p>Text: {message.text}</p>
                          //   </div>
                          // );
                        ))}
                      </div>
                    )}

                    {userLoggedIn ? (
                      <div className="fixed bottom-0 left-0 w-[370px] h-12 flex  justify-between px-2 items-center bg-[#22242f] text-white gap-4   z-100 ">
                        <input
                          type="text"
                          placeholder="Type your message"
                          className="w-full outline-none h-8 p-2"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        />
                        <button className="" onClick={handleSendMessage}>
                          Send
                        </button>
                      </div>
                    ) : (
                      <div className="fixed bottom-0 left-0 w-[370px] h-12 flex  justify-center items-center bg-[#22242f]   z-100 ">
                        <h1 className=" text-white text-case  text-base font-medium bg-[#22242f]">
                          {" "}
                          You must be logged in to chat
                        </h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="opacity-60 fixed inset-0 z-40 bg-transparent"></div> */}
          </>
        ) : null}

        <ChatRules
          showChatRules={showChatRules}
          setShowChatRules={setShowChatRules}
        />
      </div>
    </>
  );
};

export default ResChat;
