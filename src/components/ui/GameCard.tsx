import { Game } from "../../hooks/useGame";
import CriticScore from "./CriticScore";
import PlatformIcons from "./PlatformIcons";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <div className="bg-zinc-800 rounded-xl p-4 cursor-pointer h-min">
      <img
        src={game.background_image}
        loading="lazy"
        alt={game.name}
        className="w-full aspect-video transition object-cover rounded-lg bg-zinc-900"
      />
      <div className="py-4 flex flex-col">
        <h3 className="text-lg font-semibold text-zinc-200">{game.name}</h3>
        <div className="flex justify-between gap-4 pt-3">
          <PlatformIcons platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
