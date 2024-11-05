import usePlatforms, { PlatformList } from "../../hooks/usePlatforms";
import usePublishers, { Publisher } from "../../hooks/usePublishers";
import SelectInput from "../common/SelectInput";

interface Props {
  onSelectPlatform: (platform: PlatformList | "") => void;
  onSelectPublisher: (publisher: Publisher | "") => void;
}

const SortControls = ({ onSelectPlatform, onSelectPublisher }: Props) => {
  const { data: platforms, loading, error } = usePlatforms();
  const { data: publishers, loading: publishersLoading, error: publishersError } = usePublishers();

  const flattenedPlatforms = platforms?.flat();
  const flattenedPublishers = publishers?.flat();

  return (
    <div className="flex gap-2">
      <SelectInput
        loading={loading}
        id="platform"
        onChange={onSelectPlatform}
        error={error}
        data={flattenedPlatforms}
        defaultValue="Sort by: Platform"
      />
      <SelectInput
        loading={publishersLoading}
        id="publisher"
        onChange={onSelectPublisher}
        error={publishersError}
        data={flattenedPublishers}
        defaultValue="Sort by: Publisher"
      />
    </div>
  );
};

export default SortControls;
