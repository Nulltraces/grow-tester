import { Table } from "@/components";

type TableValues = {
  game: string;
  player: string;
  bet: string;
  profit: string;
  multiplier: string;
  time: string;
};

const games: TableValues[] = Array(9)
  .fill(0)
  .map(() => ({
    game: "roulette",
    player: "Malik",
    bet: "0.2",
    profit: "-0.3",
    multiplier: "0.01*",
    time: "20:00",
    // key: i,
  }));

type TableValue = TableValues[keyof TableValues];

export default function Bets() {
  return (
    <div className="mt-6">
      <div className="w-full mt-6 flex text-sm font-bold text-white uppercase">
        <h3>all bets</h3>
        <div className="ml-auto flex items-center gap-4 w-fit">
          <h3>all bets</h3>
          <h3>big bets</h3>
          <h3>race</h3>
        </div>
      </div>
      <div className="relative flex-1 mt-2 text-white after:w-full after:h-32 after:z-10 after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-b after:from-transparent after:to-body">
        <Table<TableValues, TableValue>
          head={["game", "player", "bet", "profit", "multiplier", "time"]}
          // body={[["me", "yyyyy"], ["you"], ["us"], ["them"], ["They"]]}
          body={games.map((game) => Object.entries(game))}
          title="Bets"
          fullData={games}
        />
      </div>
    </div>
  );
}
