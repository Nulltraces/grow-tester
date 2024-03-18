import React, { useState } from "react";
import UserProfile from "./UserProfile";
import User from "../assets/user.png";
// import axios from "axios";
const Chat = ({ message, user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  //  console.log(message.sender);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const options = { hour: "2-digit", minute: "2-digit" };

  return (
    <div>
      <div className="w-full h-full  pr-2 relative flex justify-between items-center text-white gap-2 ">
        <div className="w-16 h-full flex justify-center items-center">
          <img
            alt="gallery"
            className="w-12 rounded-full  h-12 block "
            src={User}
          />
        </div>

        <div className="flex flex-col gap-1 w-full h-auto px-2">
          <div className="w-full text-center h-8 flex justify-start items-center gap-2">
            <h1 className="text-sm font-bold">{message.sender?.username}</h1>
            <div className="font-bold w-16 rounded-sm bg-[#a19879] px[6px] py-[2px] cursor-pointer text-black ">
              LVL 1
            </div>

            <h1 className="text-gray-500">
              {" "}
              {new Date(message.timestamp).toLocaleTimeString("en-US", options)}
            </h1>

            <div className=" inline-block text-left z-0">
              <button
                type="button"
                className="flex items-center  focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="white"
                  className="bi bi-three-dots-vertical"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </button>

              {isMenuOpen && (
                <div className=" flex justify-center items-center absolute top-0 bg-[#22242f] h-full right-0 w-full rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div
                    className=" flex justify-center items-center h-full bg-[#22242f]  "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <button
                      className=" flex flex-col justify-center items-center px-4 py-2 text-sm text-[#a3a6c2] bg-[#22242f]  "
                      role="menuitem"
                      onClick={() => {
                        setUserProfile(true);
                      }}
                    >
                      <svg
                        stroke="none"
                        fill="currentColor"
                        stroke-width="0"
                        className="bg-[#22242f]"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        id="icon"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      Profile
                    </button>
                    <button
                      className="flex flex-col justify-center items-center  px-4 py-2 text-sm text-[#a3a6c2] bg-[#22242f]"
                      role="menuitem"
                      onClick={() => alert("Logout clicked")}
                    >
                      <svg
                        stroke="none"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 640 512"
                        className="bg-[#22242f]"
                        id="icon"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M621.16 54.46C582.37 38.19 543.55 32 504.75 32c-123.17-.01-246.33 62.34-369.5 62.34-30.89 0-61.76-3.92-92.65-13.72-3.47-1.1-6.95-1.62-10.35-1.62C15.04 79 0 92.32 0 110.81v317.26c0 12.63 7.23 24.6 18.84 29.46C57.63 473.81 96.45 480 135.25 480c123.17 0 246.34-62.35 369.51-62.35 30.89 0 61.76 3.92 92.65 13.72 3.47 1.1 6.95 1.62 10.35 1.62 17.21 0 32.25-13.32 32.25-31.81V83.93c-.01-12.64-7.24-24.6-18.85-29.47zM48 132.22c20.12 5.04 41.12 7.57 62.72 8.93C104.84 170.54 79 192.69 48 192.69v-60.47zm0 285v-47.78c34.37 0 62.18 27.27 63.71 61.4-22.53-1.81-43.59-6.31-63.71-13.62zM320 352c-44.19 0-80-42.99-80-96 0-53.02 35.82-96 80-96s80 42.98 80 96c0 53.03-35.83 96-80 96zm272 27.78c-17.52-4.39-35.71-6.85-54.32-8.44 5.87-26.08 27.5-45.88 54.32-49.28v57.72zm0-236.11c-30.89-3.91-54.86-29.7-55.81-61.55 19.54 2.17 38.09 6.23 55.81 12.66v48.89z"></path>
                      </svg>
                      Tips
                    </button>
                    <button
                      className=" flex flex-col justify-center items-center px-4 py-2 text-sm text-[#a3a6c2] bg-[#22242f]"
                      role="menuitem"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg
                        stroke="none"
                        fill="currentColor"
                        className="bg-[#22242f] object-center"
                        stroke-width="none"
                        viewBox="0 0 24 24"
                        id="icon"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path>
                      </svg>
                      close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="rounded-md bg-[#22242f] inline-flex p-[10px] w-auto h-auto">
            {message.text}
          </div>
        </div>
      </div>
      <UserProfile
        userProfile={userProfile}
        setUserProfile={setUserProfile}
        message={message}
      />
    </div>
  );
};

export default Chat;
