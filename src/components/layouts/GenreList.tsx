import useGenres, { Genre } from "../../hooks/useGenres";
import ErrorMsg from "../common/ErrorMsg";
import GenreCard from "../ui/GenreCard";
import GenreCardSkeleton from "../ui/GenreCardSkeleton";

interface Props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, loading, error } = useGenres();
  return (
    <div className="p-4 flex flex-col gap-4 overflow-y-auto scrollbar-thin">
      <h3 className="text-sm uppercase tracking-wide text-zinc-400">Genres</h3>
      {error ? (
        <ErrorMsg className="bg-zinc-800 gap-2 text-sm text-zinc-200 py-6 px-2" errorMsg={"Something went wrong while fetching genres"} />
      ) : (
        <div className="w-full grid grid-cols-1">
          {loading
            ? Array.from({ length: 20 }).map((_, index) => <GenreCardSkeleton key={index} />)
            : data.map((genre) => <GenreCard selectedGenre={selectedGenre} onSelectGenre={onSelectGenre} key={genre.id} genre={genre} />)}
        </div>
      )}
    </div>
  );
};

export default GenreList;
