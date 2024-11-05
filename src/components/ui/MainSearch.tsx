import { SearchIcon } from "@primer/octicons-react";
import { useState } from "react";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const query = form.get("search") as string;

    if (query.length === 0) {
      return;
    }
    setQuery(query);
  };

  return (
    <form className="w-full max-w-3xl relative" onSubmit={(e) => handleSubmission(e)}>
      <label htmlFor="search" className="sr-only">
        Search games
      </label>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Press enter to search.."
        className="w-full py-3 px-3 pl-10 rounded-full text-base transition bg-zinc-800 text-zinc-200 placeholder:text-zinc-400 border-0 outline-none"
      />
      <div className="absolute pointer-events-none inset-0 h-full w-min px-4 flex justify-center items-center text-zinc-400">
        <SearchIcon size={16} />
      </div>
    </form>
  );
};

export default MainSearch;
