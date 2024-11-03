import { MarkGithubIcon, SidebarCollapseIcon } from "@primer/octicons-react";
import IconButton from "../common/IconButton";
import MainSearch from "../common/MainSearch";

interface Props {
  isSidebarOpen: boolean;
  onSidebarToggle: () => void;
}

const Main = ({ isSidebarOpen, onSidebarToggle }: Props) => {
  return (
    <main className="flex-1 bg-zinc-900 flex flex-col overflow-y-auto">
      <div className="w-full px-4 py-2 flex justify-between items-center border-b border-zinc-800">
        <div>
          {!isSidebarOpen && (
            <IconButton title="Open sidebar" onClick={onSidebarToggle}>
              <SidebarCollapseIcon size={24} className="text-zinc-400" />
            </IconButton>
          )}
        </div>
        <IconButton title="Contribute">
          <MarkGithubIcon size={24} className="text-zinc-400" />
        </IconButton>
      </div>
      <div className="px-4 py-8 sm:py-12 flex justify-center items-center flex-col gap-3 sm:gap-5">
        <h1 className="text-2xl sm:text-4xl font-semibold text-zinc-200">
          Arcade<span className="text-rose-400">Xplore</span>
        </h1>
        <MainSearch />
      </div>
    </main>
  );
};

export default Main;
