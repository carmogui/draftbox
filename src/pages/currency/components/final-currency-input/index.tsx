import { useLayoutEffect, useRef, useState } from "react";
import {
  cleanString,
  convertCurrency,
  formatCurrency,
  formatEndEdge,
} from "../../helpers";
import { Input } from "../../../../components";

export function FinalCurrencyInput() {
  const [value, setRawValue] = useState("");
  const [selection, setSelection] = useState<
    [number | null, number | null] | null
  >(null);
  const ref = useRef<HTMLInputElement>(null);

  useLayoutEffect(() => {
    if (selection && ref.current) {
      [ref.current.selectionStart, ref.current.selectionEnd] = selection;
    }
  }, [selection]);

  function setValue({ formattedValue }: { formattedValue: string }) {
    setRawValue(formattedValue);
  }

  return (
    <Input
      placeholder="type some number"
      forwardRef={ref}
      value={value}
      onChange={(e) => {
        const { value: inputVal, selectionStart, selectionEnd } = e.target;

        const cleaned = cleanString(inputVal);

        const allowedStart = 3;
        const allowedEnd = value.length - 2;

        if (value.length === 0) {
          const newPos = allowedStart + 1;

          setSelection([newPos, newPos]);

          const formatted = formatCurrency(cleaned);
          const converted = convertCurrency(formatted);

          return setValue({ formattedValue: converted });
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

            return setValue({ formattedValue: converted });
          }

          if (
            selectionStart === 0 ||
            (selectionStart && selectionStart <= allowedStart)
          ) {
            const formatted = formatCurrency(cleaned);
            const converted = convertCurrency(formatted);

            const newPos = allowedStart + 1;

            setSelection([newPos, newPos]);

            return setValue({ formattedValue: converted });
          }
        }

        const formatted = formatCurrency(cleaned);
        const converted = convertCurrency(formatted);

        const caretPositionDiff = converted.length - inputVal.length;
        const newPos = (selectionEnd || 0) + caretPositionDiff;

        setSelection([newPos, newPos]);

        setValue({ formattedValue: converted });
      }}
    />
  );
}
