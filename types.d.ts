type User = {};

type Message = {
  owner: {
    username: string;
    photo: string;
    level: number | string;
    uid: string;
  };
  content: string;
  date: Date;
  room?: "global" | "support";
};

type Currency = "world-lock" | "diamond-lock";
