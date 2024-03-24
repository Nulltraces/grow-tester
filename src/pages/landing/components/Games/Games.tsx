import { games } from "@/data/games";
import "./games.css";
import { Link } from "react-router-dom";

export default function Games() {
  return (
    <div className="grid grid-flow-row gap-3  grid-cols-gamesGridSm sm:grid-cols-gamesGrid grid-rows-1 flex-1">
      {games.map((game, i) => (
        <Link
          to={`/games/${game.title}`}
          key={i}
          className="rounded-md cursor-pointer hover:-translate-y-1 transition-all duration-100 overflow-clip"
        >
          {/* <p>{game.i}</p> */}
          <img src={`/images/landing/games/${game.image}`} />
        </Link>
      ))}
    </div>
  );
}
