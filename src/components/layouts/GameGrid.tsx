import useGame from "../../hooks/useGame";
import ErrorMsg from "../common/ErrorMsg";
import GameCard from "../ui/GameCard";

const GameGrid = () => {
  const { games, error } = useGame();

  if (error) return <ErrorMsg errorMsg={error} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameGrid;
