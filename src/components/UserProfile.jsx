import React from "react";
import Cancel from "../assets/cancelIcon.svg";
import user from "../assets/user.png";

const UserProfile = ({userProfile, setUserProfile, message}) => {
  return (
    <>
      { userProfile ? (
        <>
          <div className="w-full   h-96  mx-auto bg-transparent items-center  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="fixed xl:w-[500px] w-[450px]  rounded-md h-[280px] my-6 mx-auto py-2 px-2  lg:top-[30%] top-[24%] inset-0 ">
              <div className="w-full h-full">
                <div className="flex  justify-between  h-12 z-30 w-full px-2">
                  <div
                    className="flex justify-center items-center gap-2 text-[#a3a6c2]"
                  
                  >
                    
                    <h1 className="text-base font-bold">User Profile</h1>
                  </div>

                  <div className="flex items-center justify-between ">
                    <img
                      src={Cancel}
                      alt="sdfghjkl"
                      onClick={() => setUserProfile(false)}
                      className="cursor-pointer "
                    />
                  </div>
                </div>
                <div className="w-full flex flex-col gap-2 justify-center items-center">
                <div className="w-36  h-full flex justify-center items-center">
        <img
          alt="gallery"
          className="w-36 rounded-full  h-36 block "
          src={user}
        />
      </div>
      <h1 className="text-white text-2xl font-bold"> {message?.sender?.username}</h1>
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
export default UserProfile;
