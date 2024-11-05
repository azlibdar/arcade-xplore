import { useEffect, useState } from "react";
import Main from "./components/layouts/Main";
import Sidebar from "./components/layouts/Sidebar";
import useOnMobile from "./hooks/useOnMobile";
import { Genre, Platform, Publisher } from "./constants";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  publisher: Publisher | null;
  searchQuery: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { isMobile } = useOnMobile();

  const handleSearchQuery = (query: string | null) => {
    setGameQuery({ ...gameQuery, searchQuery: query });
  };

  const handleSelectPublisher = (publisher: Publisher | "") => {
    if (publisher === "") {
      setGameQuery({ ...gameQuery, publisher: null });
      return;
    }
    setGameQuery({ ...gameQuery, publisher });
  };

  const handleSelectPlatform = (platform: Platform | "") => {
    if (platform === "") {
      setGameQuery({ ...gameQuery, platform: null });
      return;
    }
    setGameQuery({ ...gameQuery, platform });
  };

  const handleSelectGenre = (genre: Genre | null) => {
    setGameQuery({ ...gameQuery, genre });

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
        <Sidebar onSelectGenre={handleSelectGenre} selectedGenre={gameQuery.genre} onSidebarToggle={handleSidebar} isMobile={isMobile} />
      )}
      <Main
        onSelectPlatform={handleSelectPlatform}
        onSelectPublisher={handleSelectPublisher}
        isSidebarOpen={isSidebarOpen}
        onSidebarToggle={handleSidebar}
        onSearchQuery={handleSearchQuery}
        gameQuery={gameQuery}
      />
    </div>
  );
}

export default App;
