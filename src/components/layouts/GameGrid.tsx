import { GameQuery } from "../../App";
import useGame from "../../hooks/useGame";
import ErrorMsg from "../common/ErrorMsg";
import GameCard from "../ui/GameCard";
import GameCardSkeleton from "../ui/GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGame(gameQuery);

  if (error) return <ErrorMsg errorMsg={error} className="bg-zinc-800 py-6 gap-2 text-zinc-200 text-sm" />;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {loading ? (
        [...Array(6)].map((_, index) => <GameCardSkeleton key={index} />)
      ) : data && data.length > 0 ? (
        data.map((game) => <GameCard key={game.id} game={game} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">No games found</p>
      )}
    </div>
  );
};

export default GameGrid;
