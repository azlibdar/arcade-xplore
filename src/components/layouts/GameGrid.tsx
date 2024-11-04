import useGame from "../../hooks/useGame";
import ErrorMsg from "../common/ErrorMsg";
import GameCard from "../ui/GameCard";
import GameCardSkeleton from "../ui/GameCardSkeleton";

const GameGrid = () => {
  const { data, error, loading } = useGame();

  console.log(loading);

  if (error) return <ErrorMsg errorMsg={error} />;

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {loading
        ? [...Array(6)].map((_, index) => <GameCardSkeleton key={index} />)
        : data.map((game) => <GameCard key={game.id} game={game} />)}
    </div>
  );
};

export default GameGrid;
