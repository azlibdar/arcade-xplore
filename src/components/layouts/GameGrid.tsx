import useGame from "../../hooks/useGame";
import ErrorMsg from "../common/ErrorMsg";

const GameGrid = () => {
  const { games, error } = useGame();

  if (error) return <ErrorMsg errorMsg={error} />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {games.map((game) => (
        <div key={game.id} className="bg-zinc-800 rounded-xl p-4 cursor-pointer">
          <img src={game.background_image} alt={game.name} className="w-full h-48 transition object-cover rounded-lg" />
          <div>
            <div>
              {game.platforms.map(({ platform }) => (
                <span key={platform.id} className="text-xs font-semibold text-zinc-200">
                  {platform.name}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-zinc-200">{game.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameGrid;
