import { MdAutoAwesome } from "react-icons/md";
import styles from "./styles.module.css";

function HoverSubMenu({ showBackground = false }) {
  return (
    <div
      className={`absolute -top-2 left-full pl-1 pt-2 pr-2 pb-2 ${
        showBackground && "bg-red-600/30"
      }`}
    >
      <div className="flex flex-col w-60 text-white bg-indigo-950 rounded-sm text-sm">
        <span className="font-bold py-2 px-4">Submenu</span>
        <span className="hover:bg-indigo-500 py-2 px-4 cursor-pointer border-t border-t-gray-500 border-solid">
          nav item 1
        </span>
        <span className="hover:bg-indigo-500 py-2 px-4 cursor-pointer border-t border-t-gray-500 border-solid rounded-b-sm">
          nav item 2
        </span>
      </div>
    </div>
  );
}

function NavItem({ showBackground = false }) {
  return (
    <div className={`group relative ${styles.navItem}`}>
      <a
        href="/"
        className="text-neutral-100 w-14 h-14 flex items-center justify-center group-hover:bg-indigo-500"
      >
        <MdAutoAwesome size={24} />
      </a>

      <HoverSubMenu showBackground={showBackground} />
    </div>
  );
}

interface Props {
  showBackground?: boolean;
}

export function SidebarMenu({ showBackground = false }: Props) {
  return (
    <div className="flex flex-col items-center h-full bg-indigo-950  w-16">
      <NavItem showBackground={showBackground} />
      <NavItem showBackground={showBackground} />
    </div>
  );
}
