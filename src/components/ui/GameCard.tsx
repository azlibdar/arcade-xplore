import { Game } from "../../hooks/useGame";
import PlatformIcons from "./PlatformIcons";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="bg-zinc-800 rounded-xl p-4 cursor-pointer">
      <img src={game.background_image} alt={game.name} className="w-full h-48 transition object-cover rounded-lg" />
      <div className="py-4 flex flex-col">
        <PlatformIcons platforms={game.parent_platforms.map((p) => p.platform)} />
        <h3 className="text-lg font-semibold text-zinc-200 mt-3">{game.name}</h3>
      </div>
    </div>
  );
};

export default GameCard;
