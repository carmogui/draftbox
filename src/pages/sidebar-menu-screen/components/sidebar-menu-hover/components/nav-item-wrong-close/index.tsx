import { HTMLAttributes } from "react";
import styles from "../../styles.module.css";

function HoverSubMenu() {
  return (
    <div className="absolute top-0 left-full">
      <div className="flex flex-col w-60 text-white bg-red-900 text-sm">
        <span className="font-bold py-2 px-4">Unreachable Submenu</span>
        <span className="hover:bg-indigo-500 py-2 px-4 cursor-pointer">
          item 1
        </span>
        <span className="hover:bg-indigo-500 py-2 px-4 cursor-pointer">
          item 2
        </span>
      </div>
    </div>
  );
}

export function NavItemWrongClose({
  children,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="relative">
      <a
        className={`text-neutral-100 size-16 flex items-center justify-center hover:bg-blue-500 ${styles.navItemWrong}`}
      >
        {children}
      </a>

      <HoverSubMenu />
    </div>
  );
}
