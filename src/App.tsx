import { useEffect, useState } from "react";
import Main from "./components/layouts/Main";
import Sidebar from "./components/layouts/Sidebar";
import useOnMobile from "./hooks/useOnMobile";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { isMobile } = useOnMobile();

  const handleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="w-full h-dvh flex overflow-hidden bg-zinc-900">
      {isSidebarOpen && <Sidebar onSidebarToggle={handleSidebar} isMobile={isMobile} />}
      <Main isSidebarOpen={isSidebarOpen} onSidebarToggle={handleSidebar} />
    </div>
  );
}

export default App;
