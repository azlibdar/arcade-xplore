import usePlatforms, { PlatformList } from "../../hooks/usePlatforms";
import SelectInput from "../common/SelectInput";
import SelectInputDefault from "../common/SelectInputDefault";

interface Props {
  onSelectPlatform: (platform: PlatformList | "") => void;
}

const sortData = ["name", "released", "added", "created", "updated", "rating", "metacritic"];

const SortControls = ({ onSelectPlatform }: Props) => {
  const { data: platforms, loading, error } = usePlatforms();

  const flattenedPlatforms = platforms.flat();

  return (
    <div className="w-full flex gap-2">
      <SelectInput loading={loading} onChange={onSelectPlatform} error={error} data={flattenedPlatforms} defaultValue="Select Platform" />
      <SelectInputDefault data={sortData} selectedIndex={5} prefix="Sort by:" />
    </div>
  );
};

export default SortControls;
