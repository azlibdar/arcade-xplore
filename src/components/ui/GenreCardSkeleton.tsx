const GenreCardSkeleton = () => {
  return (
    <div className="w-full p-2 bg-zinc-800 rounded animate-pulse flex items-center gap-2">
      <div className="w-8 min-w-8 aspect-square rounded-md bg-zinc-700"></div>
      <div className="w-3/4 h-3 rounded-sm bg-zinc-700"></div>
    </div>
  );
};

export default GenreCardSkeleton;
