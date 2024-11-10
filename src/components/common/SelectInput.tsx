import { UnfoldMoreIcon } from "hugeicons-react";
import { Platform, Publisher } from "../../constants";

interface SelectInputProps {
  data: Platform[] | Publisher[] | undefined;
  defaultValue?: string;
  id: string;
  onChange: (platform: Platform | "") => void;
}

const SelectInput = ({ data, onChange, defaultValue = "Select", id }: SelectInputProps) => {
  return (
    <div className="relative select-none" title={`Sort by ${id}`}>
      <label htmlFor={id} className="sr-only">
        Sort by ${id}
      </label>
      <select
        onChange={(e) => {
          const platform = data?.find((option) => option.slug === e.target.value);
          if (platform) {
            onChange(platform);
          } else {
            onChange("");
          }
        }}
        id={id}
        className="w-full sm:w-min truncate block px-4 cursor-pointer disabled:pointer-events-none disabled:opacity-50 text-sm py-3 pr-8 transition outline-none focus:ring-2 focus:ring-inset focus:ring-rose-400 rounded-lg text-zinc-200 bg-zinc-800 appearance-none"
      >
        <option value="">{defaultValue}</option>
        {data?.map((option) => (
          <option key={option.id} value={option.slug}>
            {option.name}
          </option>
        ))}
      </select>
      <div className="absolute h-full pointer-events-none w-10 top-0 right-0 flex justify-center items-center text-zinc-400">
        <UnfoldMoreIcon size={20} />
      </div>
    </div>
  );
};

export default SelectInput;
