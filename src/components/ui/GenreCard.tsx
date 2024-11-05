import { Genre } from "../../constants";

interface GenreCardProps {
  genre: Genre;
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreCard = ({ genre, onSelectGenre, selectedGenre }: GenreCardProps) => {
  const isActive = selectedGenre?.id === genre.id;

  return (
    <button
      onClick={() => onSelectGenre(isActive ? null : genre)}
      className={`${
        isActive ? "text-rose-400" : "text-zinc-400 hover:text-zinc-200"
      } w-full flex items-center gap-2 py-2 border-b last:border-b-0 border-b-zinc-800 overflow-hidden transition active:opacity-90`}
    >
      <img src={genre.image_background} loading="lazy" alt={genre.name} className="w-9 min-w-9 aspect-square object-cover rounded-md" />
      <span className="text-sm font-mono font-medium truncate">{genre.name}</span>
    </button>
  );
};

export default GenreCard;
