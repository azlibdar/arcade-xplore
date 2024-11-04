import { PlatformList } from "../../hooks/usePlatforms";

interface SelectInputProps {
  data: PlatformList[] | undefined;
  loading: boolean;
  error: string | null;
  defaultValue?: string;
}

const SelectInput = ({ data, loading, error, defaultValue = "Select" }: SelectInputProps) => {
  return (
    <div className="relative">
      <select
        disabled={loading || error !== null}
        className="block px-4 cursor-pointer disabled:pointer-events-none disabled:opacity-50 text-sm py-2.5 pr-9 transition outline-none focus:ring-2 focus:ring-inset focus:ring-rose-400 rounded-lg text-zinc-200 bg-zinc-800 appearance-none"
        name="genre"
        id="genre"
      >
        <option value={""}>{defaultValue}</option>
        {data?.map((option) => (
          <option key={option.id} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="absolute h-full pointer-events-none w-10 top-0 right-0 flex justify-center items-center text-zinc-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
          <path
            fillRule="evenodd"
            d="M11.47 4.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 0 1-1.06-1.06l3.75-3.75Zm-3.75 9.75a.75.75 0 0 1 1.06 0L12 17.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0l-3.75-3.75a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectInput;