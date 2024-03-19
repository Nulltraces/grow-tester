import "./games.css";

type Game = {
  title: string;
  image: string;
};

const games: Game[] = [
  {
    image: "crash.webp",
    title: "crash",
  },
  {
    image: "roulette.webp",
    title: "roulette",
  },
  {
    image: "slots.webp",
    title: "slots",
  },
  {
    image: "blackjack.webp",
    title: "blackjack",
  },
  {
    image: "reme.webp",
    title: "reme",
  },
  {
    image: "limbo.webp",
    title: "limbo",
  },
  {
    image: "coinflip.webp",
    title: "coinflip",
  },
  {
    image: "towers.webp",
    title: "towers",
  },
  {
    image: "mines.webp",
    title: "mines",
  },
  {
    image: "unboxing.webp",
    title: "unboxing",
  },
  {
    image: "dice.webp",
    title: "dice",
  },
  {
    image: "keno.webp",
    title: "keno",
  },
  {
    image: "plinko.webp",
    title: "plinko",
  },
  {
    image: "cross_the_road.webp",
    title: "cross_the_road",
  },
];

export default function Games() {
  return (
    <div className="grid grid-flow-row gap-3 grid-cols-gamesGrid max-sm:grid-cols-gamesGridSm grid-rows-1 flex-1">
      {games.map((game, i) => (
        <div key={i} className="rounded-md overflow-clip">
          {/* <p>{game.i}</p> */}
          <img src={`/images/landing/games/${game.image}`} />
        </div>
      ))}
    </div>
  );
}
