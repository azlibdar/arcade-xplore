import useGenres from "../../hooks/useGenres";
import GenreCard from "../ui/GenreCard";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <div className="p-4 flex flex-col gap-4 overflow-y-auto scrollbar-thin">
      <h3 className="text-sm uppercase tracking-wide text-zinc-400">Genres</h3>
      <div className="w-full grid grid-cols-1">
        {data.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </div>
  );
};

export default GenreList;
