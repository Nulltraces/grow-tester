import { MenuHorizontalDotsIcon } from "@/assets/svgs";
import User1 from "@/assets/users/user-1.png";

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
    <div className="flex-1 overflow-auto py-3 space-y-4">
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
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          <h5 className="font-semibold">{props.owner.username}</h5>
          <span className="p-1 py-[2px] rounded uppercase bg-[rgb(161,152,121)] text-xs font-bold bg-amber text-gray-950">
            lvl{props.owner.level}
          </span>
          <span className="text-xs font-semibold text-gray-500">
            {props.date.toLocaleTimeString()}
          </span>
          <button>
            <MenuHorizontalDotsIcon className="w-4 aspect-square" />
          </button>
        </div>
        <div className="p-2 rounded-md bg-dark-800 w-fit text-sm font-semibold">
          {props.content}
        </div>
      </div>
    </div>
  );
}
