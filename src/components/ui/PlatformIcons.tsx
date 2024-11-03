import { Platform } from "../../hooks/useGame";
import logoMac from "../../assets/logo/logo-mac.svg";
import logoLinux from "../../assets/logo/logo-linux.svg";
import logoWindows from "../../assets/logo/logo-windows.svg";
import logoPlaystation from "../../assets/logo/logo-playstation.svg";
import logoXbox from "../../assets/logo/logo-xbox.svg";
import logoNintendo from "../../assets/logo/logo-nintendo.svg";
import logoIos from "../../assets/logo/logo-ios.svg";
import logoAndroid from "../../assets/logo/logo-android.svg";
import logoWeb from "../../assets/logo/logo-web.svg";

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconMap: { [K in Platform["slug"]]: string } = {
    pc: logoWindows,
    playstation: logoPlaystation,
    xbox: logoXbox,
    nintendo: logoNintendo,
    linux: logoLinux,
    mac: logoMac,
    ios: logoIos,
    android: logoAndroid,
    web: logoWeb,
  };

  return (
    <div className="flex items-baseline gap-2 flex-wrap">
      {platforms.map((platform) => (
        <span key={platform.id} title={platform.name} className="p-1 bg-zinc-700 rounded-lg flex justify-center items-center">
          <img src={iconMap[platform.slug]} alt={platform.name} className="min-w-6 opacity-50" />
        </span>
      ))}
    </div>
  );
};

export default PlatformIcons;
