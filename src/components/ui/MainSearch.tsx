import { CancelCircleIcon, Search01Icon } from "hugeicons-react";
import { useState } from "react";

interface Props {
  onSearchQuery: (query: string | null) => void;
}

const MainSearch = ({ onSearchQuery }: Props) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchQuery(searchQuery);
    }
  };

  return (
    <form className="w-full relative" onSubmit={handleSubmission}>
      <label htmlFor="search" className="sr-only">
        Search games
      </label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        enterKeyHint="go"
        placeholder="Press enter to search.."
        className="w-full p-3 pl-8 pr-9 rounded-lg sm:text-sm transition bg-zinc-800 text-zinc-200 placeholder:text-zinc-400 border-0 outline-none"
      />
      <div className="absolute pointer-events-none left-0 top-0 h-full w-min px-3 flex justify-center items-center text-zinc-400">
        <Search01Icon size={15} />
      </div>
      {searchQuery.trim() && (
        <div className="absolute top-0 right-0 h-full w-min flex justify-center items-center">
          <button
            title="Clear search"
            onClick={() => {
              setSearchQuery("");
              onSearchQuery(null);
            }}
            type="button"
            className="p-2 pr-3 rounded-md flex justify-center items-center text-zinc-400 transition hover:text-rose-400 active:translate-y-[1px]"
          >
            <CancelCircleIcon size={18} />
          </button>
        </div>
      )}
    </form>
  );
};

export default MainSearch;
