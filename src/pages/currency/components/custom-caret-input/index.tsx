import { useState } from "react";
import { Input } from "../../../../components";

export function CustomCaretInput() {
  const [inputValue, setValue] = useState("$ 100,00");

  return (
    <div className="flex flex-col gap-3">
      <span>convert to currency with fixed decimals</span>

      <div className="flex gap-2 items-center">
        <Input
          value={inputValue}
          onChange={(e) => {
            console.log(e.target.value);
            const { value, selectionStart, selectionEnd } = e.target;

            console.log("selection");
            console.log(selectionStart);
            console.log(selectionEnd);

            const allowedStart = 3;
            const allowedEnd = value.length - 3;

            if (
              inputValue.length < value.length &&
              selectionEnd &&
              selectionEnd > allowedEnd
            ) {
              const newValue =
                value.slice(0, selectionEnd - 1) + value.slice(selectionEnd);

              console.log("value: ", value);
              console.log("inputValue: ", inputValue);
              console.log("newValue: ", newValue);
              const typedValue = value.charAt(selectionEnd - 1);

              const formattedStr =
                newValue.slice(0, allowedEnd - 1) +
                typedValue +
                newValue.slice(allowedEnd - 1);

              console.log("typedValue: ", typedValue);

              console.log("formattedStr: ", formattedStr);

              setTimeout(() => {
                e.target.setSelectionRange(allowedEnd, allowedEnd);
              }, 100);

              return setValue(formattedStr);
            }

            if (selectionStart && selectionStart < allowedStart) {
              e.target.setSelectionRange(allowedStart, allowedStart);
            } else if (selectionEnd && selectionEnd > allowedEnd) {
              e.target.setSelectionRange(allowedEnd, allowedEnd);
            }

            setValue(value);
          }}
        />
      </div>
    </div>
  );
}
