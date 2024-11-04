import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <div className="p-4 flex flex-col gap-4">
      <h3 className="text-sm uppercase tracking-wide text-zinc-400">Genres</h3>
      <div className="w-full flex flex-col gap-2">
        {data.map((genre) => (
          <div key={genre.id}>{genre.name}</div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
