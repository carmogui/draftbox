import { HTMLAttributes } from "react";
import { usePopperTooltip } from "react-popper-tooltip";

interface Props extends HTMLAttributes<HTMLElement> {
  name: string;
  itemQuantity?: number;
}

export function NavItemContracted({ children, name, itemQuantity = 2 }: Props) {
  const { getTooltipProps, setTooltipRef, setTriggerRef, visible } =
    usePopperTooltip({
      placement: "right-start",
      trigger: "hover",
      interactive: true,
      offset: [0, 0],
    });

  function renderItems() {
    const arrayOfItems = new Array(itemQuantity).fill(null);

    return arrayOfItems.map((_, index) => (
      <span className="p-2 hover:bg-purple-400 cursor-pointer">
        item {index + 1}
      </span>
    ));
  }

  return (
    <div className="flex group">
      <a
        ref={setTriggerRef}
        className="flex items-center justify-center size-16 group-hover:bg-purple-500"
      >
        {children}
      </a>

      {visible && (
        <div
          ref={setTooltipRef}
          className="flex flex-col bg-purple-500 w-52 overflow-auto max-h-[80%]"
          {...getTooltipProps()}
        >
          <span className="font-bold p-2">{name}</span>

          {renderItems()}
        </div>
      )}
    </div>
  );
}
