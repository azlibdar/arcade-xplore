import { Platform, Publisher, publishersData } from "../../constants";
import SelectInput from "../common/SelectInput";
import { platformsData } from "../../constants";

interface Props {
  onSelectPlatform: (platform: Platform | "") => void;
  onSelectPublisher: (publisher: Publisher | "") => void;
}

const SortControls = ({ onSelectPlatform, onSelectPublisher }: Props) => {
  return (
    <div className="flex gap-2">
      <SelectInput id="platform" onChange={onSelectPlatform} data={platformsData} defaultValue="Select Platform" />
      <SelectInput id="publisher" onChange={onSelectPublisher} data={publishersData} defaultValue="Sort by: Publisher" />
    </div>
  );
};

export default SortControls;
