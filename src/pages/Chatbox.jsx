// // Dashboard.js

// import React, { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import Chat from "../components/Chat";
// import User from "../assets/user.png";
// import menu from "../assets/menuIcon.svg";
// import ResChat from "../components/ResChat";

// function ChatBox() {
//   const [show, setShow] = useState(false);
//   const userData = ["admin","message"]
//   return (
//     <div className="xl:flex xl:gap-4 gap-0  block relative h-full  bg-[#181921]   z-10 px-2">
//       <div className="xl:w-[1060px]   left-0 w-full overflow-y-auto ">
//       <div className="self-start fixed right-0 top-[15%] h-12 w-20 z-20 border ">

//       <img
//         src={menu}
//         alt="menu bar"
//         className="left-3  p-2 cursor-pointer xl:hidden  absolute"
//         onClick={() => {
//           setShow(true);
//         }}
//       />
//       <div
//         className={
//           show
//             ? "xl:hidden visible z-50 border border-yellow-400 fixed top-0"
//             : "invisible "
//         }
//       >
//         <ResChat setShow={setShow} show={show} />
//       </div>
//     </div>
//         <Outlet /> {/* Child routes will be rendered here */}
//       </div>
//     <div className="flex flex-col  w-[360px] h-full shadow-2xl absolute right-0  overflow-y-auto px-2">

//       <div className=" w-full xl:block gap-2 hidden ">

//         <div className="fixed top-[8%]  right-0  flex w-[360px] h-16 px-2 justify-between items-between z-20   ">
//           <div className="flex justify-center items-center gap-2 ">
//             <span class="relative flex h-3 w-3">
//               <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-700 opacity-75"></span>
//               <span class="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
//             </span>

//             <h1 className="text-white text-case "> Online Status</h1>
//           </div>

//           <div className="flex justify-center items-center gap-2 text-[#81838c] ">
//             <svg
//               stroke="currentColor"
//               fill="currentColor"
//               stroke-width="0"
//               viewBox="0 0 512 512"
//               height="18"
//               width="18"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M448 48l-32-16-32 16-32-16-32 16-32-16-32 16-32-16-32 16-48-16v256.05h224V424c0 30.93 33.07 56 64 56h12c30.93 0 52-25.07 52-56V32zM272.5 240l-.5-32h159.5l.5 32zm-64-80l-.5-32h223.5l.5 32z"></path>
//               <path d="M336 424V320H16v32c0 50.55 5.78 71.62 14.46 87.63C45.19 466.8 71.86 480 112 480h256s-32-20-32-56z"></path>
//             </svg>
//             <h1>Chat Rules</h1>
//           </div>
//         </div>
//         <div className="flex flex-col gap-2  w-full h-full relative z-0 mt-32 ">
//         {userData.map((user, index) => (
//         <Chat message={index} user={user} />
//       ))}
//         </div>

//         <div className="fixed bottom-0 right-0 w-[360px] h-12 flex  justify-center items-center bg-[#22242f]   z-20 ">
//        <h1 className=" text-white text-case  text-base font-medium bg-[#22242f]"> You must be logged in to chat</h1>
//    </div>

//       </div>
//       </div>
//     </div>

//   );
// }

// export default ChatBox;
