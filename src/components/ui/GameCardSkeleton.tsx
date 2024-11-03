const GameCardSkeleton = () => {
  return (
    <div className="w-full bg-zinc-800 rounded-xl p-4">
      <div className="w-full aspect-video rounded-lg bg-zinc-700 animate-pulse" />

      <div className="py-4 flex flex-col animate-pulse">
        <div className="flex justify-between gap-4">
          <div className="flex gap-2">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="w-8 h-8 rounded-lg bg-zinc-700" />
            ))}
          </div>

          {/* Critic score skeleton */}
          <div className="w-10 h-6 rounded bg-zinc-700" />
        </div>

        {/* Title skeleton */}
        <div className="h-4 w-3/4 bg-zinc-700 rounded mt-4" />
      </div>
    </div>
  );
};

export default GameCardSkeleton;
