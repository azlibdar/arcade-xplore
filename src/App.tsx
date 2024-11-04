import { useEffect, useState } from "react";
import Main from "./components/layouts/Main";
import Sidebar from "./components/layouts/Sidebar";
import useOnMobile from "./hooks/useOnMobile";
import { Genre } from "./hooks/useGenres";
import { PlatformList } from "./hooks/usePlatforms";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformList | null>(null);
  const { isMobile } = useOnMobile();

  const handleSelectPlatform = (platform: PlatformList | "") => {
    if (platform === "") {
      setSelectedPlatform(null);
      return;
    }
    setSelectedPlatform(platform);
  };

  const handleSelectGenre = (genre: Genre | null) => {
    setSelectedGenre(genre);

    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  const handleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="w-full h-dvh flex overflow-hidden bg-zinc-900">
      {isSidebarOpen && (
        <Sidebar onSelectGenre={handleSelectGenre} selectedGenre={selectedGenre} onSidebarToggle={handleSidebar} isMobile={isMobile} />
      )}
      <Main
        selectedPlatform={selectedPlatform}
        onSelectPlatform={handleSelectPlatform}
        selectedGenre={selectedGenre}
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleSidebar}
      />
    </div>
  );
}

export default App;
