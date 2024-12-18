import GenreCard from "../ui/GenreCard";
import genresData, { Genre } from "../../constants";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <h3 className="text-sm uppercase tracking-wide text-zinc-400">Genres</h3>
      <div className="w-full grid grid-cols-1 pb-8">
        {genresData.map((genre) => (
          <GenreCard selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default GenreList;
