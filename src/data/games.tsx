import {
  BlackJack,
  CoinFlip,
  Crash,
  Dice,
  Keno,
  Limbo,
  Mines,
  Plinko,
  Reme,
  Roulette,
  Slots,
  Towers,
  Unboxing,
} from "@/pages/games";

type Game = {
  title: string;
  image: string;
  element?: React.ReactNode;
};

export const games: Game[] = [
  {
    image: "crash.webp",
    title: "crash",
    element: <Crash />,
  },
  {
    image: "roulette.webp",
    title: "roulette",
    element: <Roulette />,
  },
  {
    image: "slots.webp",
    title: "slots",
    element: <Slots />,
  },
  {
    image: "blackjack.webp",
    title: "blackjack",
    element: <BlackJack />,
  },
  {
    image: "reme.webp",
    title: "reme",
    element: <Reme />,
  },
  {
    image: "limbo.webp",
    title: "limbo",
    element: <Limbo />,
  },
  {
    image: "coinflip.webp",
    title: "coinflip",
    element: <CoinFlip />,
  },
  {
    image: "towers.webp",
    title: "towers",
    element: <Towers />,
  },
  {
    image: "mines.webp",
    title: "mines",
    element: <Mines />,
  },
  {
    image: "unboxing.webp",
    title: "unboxing",
    element: <Unboxing />,
  },
  {
    image: "dice.webp",
    title: "dice",
    element: <Dice />,
  },
  {
    image: "keno.webp",
    title: "keno",
    element: <Keno />,
  },
  {
    image: "plinko.webp",
    title: "plinko",
    element: <Plinko />,
  },
];
