import React from "react";
import Cancel from "../assets/cancelIcon.svg";
const ChatRules = ({ showChatRules, setShowChatRules }) => {
  return (
    <>
      {showChatRules ? (
        <>
          <div className="w-full   h-96  mx-auto bg-transparent items-center  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="fixed w-[500px] rounded-md h-[340px] my-6 mx-auto py-2 px-2 xl:top-[30%] lg:top-[28%] top-[20%] inset-0 ">
              <div className="w-full h-full">
                <div className="flex  justify-between  h-12 z-30 w-full px-2">
                  <div
                    className="flex justify-center items-center gap-2 text-[#a3a6c2]"
                    onClick={() => {
                      setShowChatRules(true);
                    }}
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M448 48l-32-16-32 16-32-16-32 16-32-16-32 16-32-16-32 16-48-16v256.05h224V424c0 30.93 33.07 56 64 56h12c30.93 0 52-25.07 52-56V32zM272.5 240l-.5-32h159.5l.5 32zm-64-80l-.5-32h223.5l.5 32z"></path>
                      <path d="M336 424V320H16v32c0 50.55 5.78 71.62 14.46 87.63C45.19 466.8 71.86 480 112 480h256s-32-20-32-56z"></path>
                    </svg>
                    <h1 className="text-base font-bold">Chat Rules</h1>
                  </div>

                  <div className="flex items-center justify-between ">
                    <img
                      src={Cancel}
                      alt="sdfghjkl"
                      onClick={() => setShowChatRules(false)}
                      className="cursor-pointer "
                    />
                  </div>
                </div>

                <div className="">
                    <div class="flex flex-col justify-between gap-2 px-3 items-center text-white">
                    <ol class="flex flex-col gap-1 text-base text-[#a3a6c2]">
                        <li class="flex items-center gap-2">
                         <span className=" text-sm font-semibold">1 .</span> Don't spam &amp; don't use excessive capital letters.
                        </li>
                        <li class="flex items-center gap-2">
                        <span className=" text-sm font-semibold">2 .</span>  Don't harass or be offensive to other players.
                        </li>
                        <li class="flex items-center gap-2">
                        <span className=" text-sm font-semibold">3 .</span> Don't share any personal information of you or other players.
                        </li>
                        <li class="flex items-center gap-2">
                        <span className=" text-sm font-semibold">4 .</span> Don't beg or ask for tips.
                        </li>
                        <li class="flex items-center gap-2"> <span className=" text-sm font-semibold">5 .</span>Don't share links.</li>
                        <li class="flex items-center gap-2"> <span className=" text-sm font-semibold">6 .</span>Don't advertise.</li>
                        <li class="flex items-center gap-2">
                        <span className=" text-sm font-semibold">7 .</span>  Don't share your affiliate code.
                        </li>
                      </ol>
                      <span class="text-start w-full ">
                        Breaking any of these rules will result in a mute!
                      </span>
                      <button class="w-full h-8 rounded-lg bg-[#4483eb] ">Continue</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="opacity-80 fixed inset-0 z-40 bg-transparent"></div>
        </>
      ) : null}
    </>
  );
};
export default ChatRules;
