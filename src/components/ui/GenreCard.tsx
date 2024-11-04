import { Genre } from "../../hooks/useGenres";

interface GenreCardProps {
  genre: Genre;
}

const GenreCard = ({ genre }: GenreCardProps) => {
  return (
    <button className="w-full flex items-center gap-2 py-2 border-b last:border-b-0 border-b-zinc-800 text-zinc-400 overflow-hidden transition hover:text-zinc-200">
      <img src={genre.image_background} loading="lazy" alt={genre.name} className="w-9 min-w-9 aspect-square object-cover rounded-md" />
      <span className="text-sm font-mono font-medium truncate">{genre.name}</span>
    </button>
  );
};

export default GenreCard;
