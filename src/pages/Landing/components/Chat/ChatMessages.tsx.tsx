import { CurrencyNote, MenuHorizontalDotsIcon, UserIcon } from "@/assets/svgs";
import User1 from "@/assets/users/user-1.png";
import { AnimateInOut, UserProfile } from "@/components";
import store from "@/store";
import { triggerModal } from "@/store/slices/modal";
import { Menu } from "@headlessui/react";
import clsx from "clsx";

type MessageType = {
  owner: {
    username: string;
    photo: string;
    level: number | string;
    uid: string;
  };
  content: string;
  date: Date;
};

const viewUserProfile = (uid: string) => {
  store.dispatch(
    triggerModal({
      children: <UserProfile uid={uid} />,
      className: "h-[80%]",
    })
  );
};

const messages: MessageType[] = Array(15)
  .fill(0)
  .map(() => ({
    owner: {
      username: "noobish",
      photo: User1,
      level: 11,
      uid: Math.random().toString(),
    },
    content: "The best game is whatever one you prefer lol",
    date: new Date(),
  }));

export default function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-clip py-3 space-y-4">
      {messages.map((message, i) => (
        <Message key={i} {...message} />
      ))}
    </div>
  );
}

function Message(props: MessageType) {
  return (
    <div className="flex gap-2 mx-auto w-[95%]">
      <div className="flex items-center">
        <figure className="w-8 aspect-square bg-green-400 mt-3 rounded-full overflow-clip">
          <img src={props.owner.photo} />
        </figure>
      </div>
      <div className="-space-y-[1px]">
        <div className="flex items-center gap-1">
          <h5
            onClick={() => viewUserProfile(props.owner.uid)}
            className="font-semibold cursor-pointer"
          >
            {props.owner.username}
          </h5>
          {/* NOTE: Make this level thing a component */}
          <span className="p-1 py-[2px] rounded uppercase h-fit bg-[rgb(161,152,121)] text-xs font-bold bg-amber text-gray-950">
            lvl{props.owner.level}
          </span>
          <span className="text-xs font-semibold text-gray-500">
            {props.date.toLocaleTimeString()}
          </span>
          <MessageMenu uid={props.owner.uid} />
        </div>
        <div className="p-2 rounded-md bg-dark-800 w-fit text-sm font-semibold">
          {props.content}
        </div>
      </div>
    </div>
  );
}

function MessageMenu({ uid }: { uid: string }) {
  return (
    <Menu>
      {({ open }) => (
        <div className="relative">
          <Menu.Button>
            <MenuHorizontalDotsIcon className="w-4 aspect-square" />
          </Menu.Button>
          <AnimateInOut
            show={open}
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.4, opacity: 0 }}
            // transition={{ type: "keyframes" }}
            className="absolute top-6 !-right-16 whitespace-nowrap h-full_ bg-dark-700 rounded items-center justify-center p-2 overflow-clip capitalize"
          >
            <button
              onClick={() => viewUserProfile(uid)}
              className={clsx(
                "flex gap-2 transition-all duration-100 text-gray-500 font-semibold items-center w-full group"
              )}
            >
              <UserIcon
                className={clsx(
                  "!stroke-gray-500 !fill-gray-500 group-hover:!stroke-white group-hover:!fill-white"
                )}
              />
              <p className="group-hover:text-white">user profile</p>
            </button>
            <button
              className={clsx(
                "flex gap-2 transition-all duration-100 text-gray-500 font-semibold items-center group w-full"
              )}
            >
              <CurrencyNote
                className={clsx(
                  "!stroke-gray-500 !fill-gray-500 group-hover:!stroke-white group-hover:!fill-white"
                )}
              />
              <p className="group-hover:text-white">tip</p>
            </button>

            {/* </div> */}
          </AnimateInOut>
        </div>
      )}
    </Menu>
  );
}
