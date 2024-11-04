import usePlatforms from "../../hooks/usePlatforms";
import SelectInput from "../common/SelectInput";

const SortControls = () => {
  const { data: platforms, loading, error } = usePlatforms();

  const flattenedPlatforms = platforms.flat();

  return (
    <div className="w-full flex gap-2">
      <SelectInput loading={loading} error={error} data={flattenedPlatforms} defaultValue="Select Platform" />
    </div>
  );
};

export default SortControls;
