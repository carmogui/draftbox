import { HTMLAttributes, useState } from "react";
import styles from "../../styles.module.css";

function HoverSubMenu() {
  const [showBackground, setShowBackground] = useState(false);
  const [moveSubmenu, setMoveSubmenu] = useState(false);

  return (
    <div
      className={`absolute -top-2 left-full pt-2 pr-2 pb-2 ${
        showBackground && "bg-red-600/30"
      } ${moveSubmenu ? "pl-3" : "pl-0"}`}
    >
      <div className="flex flex-col w-72 text-white bg-indigo-700 text-sm">
        <span className="font-bold py-2 px-4">Submenu</span>
        <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-indigo-500">
          <input
            className="size-4"
            type="checkbox"
            name=""
            checked={showBackground}
            onChange={(e) => setShowBackground(e.target.checked)}
          />
          <span>show submenu safe zone</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer p-2 hover:bg-indigo-500">
          <input
            className="size-4"
            type="checkbox"
            name=""
            checked={moveSubmenu}
            onChange={(e) => setMoveSubmenu(e.target.checked)}
          />
          <span>move submenu far from the sidebar</span>
        </label>
        <span className="hover:bg-indigo-500 py-2 px-4 cursor-pointer">
          nav item 1
        </span>
        <span className="hover:bg-indigo-500 py-2 px-4 cursor-pointer">
          nav item 2
        </span>
      </div>
    </div>
  );
}

export function NavItemWorking({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`relative ${styles.navItem}`}>
      <a
        onMouseEnter={(e) => console.log(e)}
        className="text-neutral-100 size-16 flex items-center justify-center hover:bg-blue-500"
      >
        {children}
      </a>

      <HoverSubMenu />
    </div>
  );
}
