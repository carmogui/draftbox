import { ButtonHTMLAttributes, useState } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children }: ButtonProps) {
  const [showSubmenu, setShowSubmenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowSubmenu((cur) => !cur)}
        className="size-16 hover:bg-black"
      >
        {children}
      </button>

      {showSubmenu && (
        <div className="absolute flex flex-col top-0 left-full bg-fuchsia-800 w-48">
          <span className="p-2 font-bold">submenu 1</span>
          <span className="p-2 pl-4 hover:bg-fuchsia-500 cursor-pointer">
            item 1
          </span>
          <span className="p-2 pl-4 hover:bg-fuchsia-500 cursor-pointer">
            item 2
          </span>
          <span className="p-2 pl-4 hover:bg-fuchsia-500 cursor-pointer">
            item 3
          </span>
        </div>
      )}
    </div>
  );
}

function ButtonPopover() {
  return (
    <>
      <button
        className={`${styles.anchorButton} size-16 hover:bg-black`}
        id="trigger"
        //@ts-ignore
        popovertarget="menu"
      >
        y
      </button>

      <div
        //@ts-ignore
        popover="auto"
        role="menu"
        id="menu"
        className={`${styles.popover} flex-col bg-purple-800 w-48`}
      >
        <span className="p-2 font-bold">submenu 2</span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 1
        </span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 2
        </span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 3
        </span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 4
        </span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 5
        </span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 6
        </span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 7
        </span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 8
        </span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 9
        </span>
        <span className="p-2 pl-4 hover:bg-purple-500 cursor-pointer">
          item 10
        </span>
      </div>
    </>
  );
}

export function SidebarMenuClick() {
  return (
    <div className="relative bg-indigo-800 w-16 min-h-96">
      <Button>x</Button>

      <ButtonPopover />
    </div>
  );
}
