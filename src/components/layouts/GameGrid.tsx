import { GameQuery } from "../../App";
import useGame from "../../hooks/useGame";
import ErrorMsg from "../common/ErrorMsg";
import GameCard from "../ui/GameCard";
import GameCardSkeleton from "../ui/GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGame(gameQuery);

  if (error) return <ErrorMsg errorMsg={error.message} className="bg-zinc-800 py-6 gap-2 text-zinc-200 text-sm" />;

  return (
    <div className="container-type w-full">
      <div className="@container grid grid-cols-1 @[600px]:grid-cols-2 @[1000px]:grid-cols-3 @[1300px]:grid-cols-4 gap-4">
        {isLoading ? (
          [...Array(12)].map((_, index) => <GameCardSkeleton key={index} />)
        ) : data ? (
          data.results.map((game) => <GameCard key={game.id} game={game} />)
        ) : (
          <ErrorMsg errorMsg="No games found!" className="col-span-3 bg-zinc-800 py-6 gap-2 text-zinc-200 text-sm" />
        )}
      </div>
    </div>
  );
};

export default GameGrid;
