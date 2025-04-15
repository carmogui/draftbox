import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Props extends HTMLAttributes<HTMLElement> {
  name: string;
  itemQuantity?: number;
  menuId: number;
  selectedMenu: number | null;
  setSelectedMenu: Dispatch<SetStateAction<number | null>>;
}

export function NavItemExpanded({
  children,
  name,
  itemQuantity = 2,
  menuId,
  selectedMenu,
  setSelectedMenu,
}: Props) {
  return (
    <>
      <button
        onClick={() =>
          setSelectedMenu((cur) => (cur === menuId ? null : menuId))
        }
        className="flex justify-between hover:bg-purple-500"
      >
        <div className="flex items-center h-16">
          <a className="flex items-center justify-center size-16">{children}</a>
          <span>{name}</span>
        </div>
        <span className="flex items-center justify-center size-16">
          {selectedMenu === menuId ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {selectedMenu === menuId && (
        <div className="flex flex-col">
          {new Array(itemQuantity).fill(null).map((_, index) => (
            <span className="px-4 py-2 bg-purple-500 hover:bg-purple-400">
              item {index + 1}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
