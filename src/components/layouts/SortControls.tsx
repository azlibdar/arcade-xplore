import usePlatforms, { PlatformList } from "../../hooks/usePlatforms";
import SelectInput from "../common/SelectInput";

interface Props {
  onSelectPlatform: (platform: PlatformList | "") => void;
}

const SortControls = ({ onSelectPlatform }: Props) => {
  const { data: platforms, loading, error } = usePlatforms();

  const flattenedPlatforms = platforms.flat();

  return (
    <div className="w-full flex gap-2">
      <SelectInput loading={loading} onChange={onSelectPlatform} error={error} data={flattenedPlatforms} defaultValue="Select Platform" />
    </div>
  );
};

export default SortControls;
