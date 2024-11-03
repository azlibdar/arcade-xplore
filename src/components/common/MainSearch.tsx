import { SearchIcon } from "@primer/octicons-react";

const MainSearch = () => {
  return (
    <div className="w-full max-w-3xl relative">
      <label htmlFor="search" className="sr-only">
        Search games
      </label>
      <input
        type="text"
        placeholder="Search games.."
        className="w-full py-3 px-3 pl-10 rounded-full text-base transition bg-zinc-800 text-zinc-200 placeholder:text-zinc-400 border-0 outline-none"
      />
      <div className="absolute pointer-events-none inset-0 h-full w-min px-4 flex justify-center items-center text-zinc-400">
        <SearchIcon size={16} />
      </div>
    </div>
  );
};

export default MainSearch;
