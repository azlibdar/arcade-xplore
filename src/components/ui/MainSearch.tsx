import { Search01Icon } from "hugeicons-react";

interface Props {
  onSearchQuery: (query: string | null) => void;
}

const MainSearch = ({ onSearchQuery }: Props) => {
  const handleSubmission = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const query = form.get("search") as string;

    if (query.length === 0) {
      onSearchQuery(null);
    }
    onSearchQuery(query);
  };

  return (
    <form className="w-full relative" onSubmit={(e) => handleSubmission(e)}>
      <label htmlFor="search" className="sr-only">
        Search games
      </label>
      <input
        type="text"
        id="search"
        name="search"
        enterKeyHint="go"
        placeholder="Press enter to search.."
        className="w-full p-3 pl-8 rounded-lg sm:text-sm transition bg-zinc-800 text-zinc-200 placeholder:text-zinc-400 border-0 outline-none"
      />
      <div className="absolute pointer-events-none inset-0 h-full w-min px-3 flex justify-center items-center text-zinc-400">
        <Search01Icon size={15} />
      </div>
    </form>
  );
};

export default MainSearch;
