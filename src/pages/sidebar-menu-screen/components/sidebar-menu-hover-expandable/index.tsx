import { HTMLAttributes, useState } from "react";
import { ImPointRight } from "react-icons/im";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";
import { NavItemContracted, NavItemExpanded } from "./components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./styles.module.css";

function BrowserWindowExample({ children }: HTMLAttributes<HTMLElement>) {
  const [fullScreen, setFullScreen] = useState(false);

  return (
    <div className={`h-96 ${fullScreen ? "" : "overflow-hidden"}`}>
      <div
        className={`flex justify-between bg-gray-700 overflow-hidden ${
          fullScreen
            ? "fixed z-50 w-dvw h-dvh top-0 left-0"
            : "relative w-full h-full"
        }`}
      >
        {children}

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
                className="bg-purple-700 hover:bg-purple-500"
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

export function SidebarMenuHoverExpandable() {
  const [expanded, setExpanded] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState<null | number>(null);

  return (
    <BrowserWindowExample>
      <div
        className={`flex flex-col justify-between bg-purple-700 ${
          expanded ? "w-72" : "w-16"
        }`}
      >
        <div className="flex flex-col overflow-hidden">
          {expanded ? (
            <div
              className={`flex flex-col overflow-auto ${styles.noScrollbar}`}
            >
              <NavItemExpanded
                name="default submenu"
                menuId={1}
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              >
                x
              </NavItemExpanded>

              <NavItemExpanded
                name="another submenu"
                menuId={2}
                itemQuantity={3}
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              >
                y
              </NavItemExpanded>

              <NavItemExpanded
                name="large submenu"
                menuId={3}
                itemQuantity={40}
                selectedMenu={selectedMenu}
                setSelectedMenu={setSelectedMenu}
              >
                z
              </NavItemExpanded>
            </div>
          ) : (
            <div
              className={`flex flex-col overflow-auto ${styles.noScrollbar}`}
            >
              <NavItemContracted name="default submenu">x</NavItemContracted>
              <NavItemContracted name="another submenu" itemQuantity={3}>
                y
              </NavItemContracted>
              <NavItemContracted name="large submenu" itemQuantity={40}>
                z
              </NavItemContracted>
            </div>
          )}
        </div>

        <button
          onClick={() => setExpanded((cur) => !cur)}
          className="flex items-center justify-center min-h-16 hover:bg-purple-500"
        >
          {expanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
    </BrowserWindowExample>
  );
}
