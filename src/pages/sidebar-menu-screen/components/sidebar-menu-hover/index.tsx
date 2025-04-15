import { ImPointRight } from "react-icons/im";
import { NavItemWorking, NavItemWrongClose } from "./components";
import { useState } from "react";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

export function SidebarMenuHover() {
  const [fullScreen, setFullScreen] = useState(false);
  return (
    <div
      className={`flex justify-between bg-gray-700 min-h-96 overflow-hidden ${
        fullScreen ? "fixed z-50 w-dvw h-dvh top-0 left-0" : "relative w-full"
      }`}
    >
      <div className="flex flex-col bg-blue-700 w-16 min-h-96">
        <NavItemWrongClose>x</NavItemWrongClose>
        <NavItemWorking>y</NavItemWorking>

        <div className="flex flex-col flex-1 justify-end">
          <NavItemWorking>z</NavItemWorking>
        </div>
      </div>

      <div className="flex items-end">
        <div className="flex flex-col bg-white/10 h-fit gap-2 p-2">
          <span className="text-white/80 text-xs">
            space to simulate the browser window
          </span>

          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1">
              {fullScreen ? "go back to normal" : "try it on full screen"}
              <ImPointRight size={20} />
            </span>
            <button
              className="bg-blue-700 hover:bg-blue-500"
              onClick={() => setFullScreen((cur) => !cur)}
            >
              {fullScreen ? (
                <MdOutlineFullscreenExit size={40} />
              ) : (
                <MdOutlineFullscreen size={40} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
