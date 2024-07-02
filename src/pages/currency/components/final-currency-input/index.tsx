import { useLayoutEffect, useRef, useState } from "react";
import {
  cleanString,
  convertCurrency,
  formatCurrency,
  formatEndEdge,
} from "../../helpers";

export function FinalCurrencyInput() {
  const [value, setValue] = useState("$ 12,345.00");
  const [selection, setSelection] = useState<
    [number | null, number | null] | null
  >(null);
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (selection && ref.current) {
      [ref.current.selectionStart, ref.current.selectionEnd] = selection;
    }
  }, [selection]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2 items-center">
        <input
          className=" text-base px-3 py-2 rounded-md border-amber-500 border-2 bg-slate-600 read-only:border-green-950"
          ref={ref}
          type="tel"
          value={value}
          onChange={(e) => {
            const { value: inputVal, selectionStart, selectionEnd } = e.target;

            const cleaned = cleanString(inputVal);

            const allowedStart = 2;
            const allowedEnd = value.length - 2;

            if (value.length === 0) {
              setSelection([allowedStart + 1, allowedStart + 1]);

              const formatted = formatCurrency(cleaned);
              const converted = convertCurrency(formatted);

              return setValue(converted);
            }

            if (value.length < inputVal.length) {
              if (selectionEnd && selectionEnd > allowedEnd) {
                const formattedValue = formatEndEdge({
                  newStr: cleaned,
                  allowedEnd,
                  currentEnd: selectionEnd,
                });

                const formatted = formatCurrency(formattedValue);
                const converted = convertCurrency(formatted);

                const caretPositionDiff = converted.length - inputVal.length;
                const newPos = allowedEnd + caretPositionDiff;

                setSelection([newPos, newPos]);

                return setValue(converted);
              }

              if (
                selectionStart === 0 ||
                (selectionStart && selectionStart < allowedStart)
              ) {
                const formattedValue = formatEndEdge({
                  newStr: cleaned,
                  allowedEnd: allowedStart - 1,
                  currentEnd: selectionStart,
                });

                const formatted = formatCurrency(formattedValue);
                const converted = convertCurrency(formatted);

                const caretPositionDiff = converted.length - inputVal.length;
                const newPos = allowedStart + caretPositionDiff + 1;

                setSelection([newPos, newPos]);

                return setValue(converted);
              }
            }

            const formatted = formatCurrency(cleaned);
            const converted = convertCurrency(formatted);

            const caretPositionDiff = converted.length - inputVal.length;
            const newPos = (selectionEnd || 0) + caretPositionDiff;

            setSelection([newPos, newPos]);

            setValue(converted);
          }}
        />
      </div>
    </div>
  );
}
