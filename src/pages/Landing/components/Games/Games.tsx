import { games } from "@/data/games";
import "./games.css";

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
