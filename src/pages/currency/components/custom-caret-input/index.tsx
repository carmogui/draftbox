import { useState } from "react";
import { Input } from "../../../../components";
import { formatEndEdge } from "../../helpers";

export function CustomCaretInput() {
  const [inputValue, setValue] = useState("$ 100,00");

  return (
    <div className="flex flex-col gap-3">
      <span>forces input caret to not move to the edges</span>

      <div className="flex gap-2 items-center">
        <Input
          value={inputValue}
          onChange={(e) => {
            e.preventDefault();

            const { value, selectionStart, selectionEnd } = e.target;

            const allowedStart = 3;
            const allowedEnd = value.length - 3;

            if (inputValue.length < value.length) {
              if (selectionEnd && selectionEnd > allowedEnd) {
                const formattedValue = formatEndEdge({
                  newStr: value,
                  allowedEnd,
                  currentEnd: selectionEnd,
                });

                setTimeout(() => {
                  e.target.setSelectionRange(allowedEnd, allowedEnd);
                });

                return setValue(formattedValue);
              }

              if (
                selectionStart === 0 ||
                (selectionStart && selectionStart < allowedStart)
              ) {
                const formattedValue = formatEndEdge({
                  newStr: value,
                  allowedEnd: allowedStart,
                  currentEnd: selectionStart,
                });

                setTimeout(() => {
                  e.target.setSelectionRange(allowedStart, allowedStart);

                  e.target.scrollTo(0, 0);
                });

                return setValue(formattedValue);
              }
            }

            setValue(value);
          }}
        />
      </div>
    </div>
  );
}
