import { useState } from "react";
import { ImPointRight } from "react-icons/im";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";
import { NavItemWithLib } from "./components";

export function SidebarMenuHoverWithLib() {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div className="min-h-96">
      <div
        className={`flex justify-between bg-gray-700 overflow-hidden ${
          fullScreen
            ? "fixed z-50 w-dvw h-dvh top-0 left-0"
            : "relative w-full h-full"
        }`}
      >
        <div className="flex flex-col justify-between bg-teal-700 w-16 min-h-96">
          <div className="flex flex-col">
            <NavItemWithLib name={"default submenu"}>x</NavItemWithLib>
            <NavItemWithLib name={"another submenu"} itemQuantity={3}>
              y
            </NavItemWithLib>
            <NavItemWithLib name={"large submenu"} itemQuantity={40}>
              z
            </NavItemWithLib>
          </div>

          <NavItemWithLib name={"bottom submenu"}>w</NavItemWithLib>
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
                className="bg-teal-700 hover:bg-teal-500"
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
    </div>
  );
}
