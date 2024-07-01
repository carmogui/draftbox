import { useEffect, useState } from "react";
import { Input } from "../../../../components";
import { FaAnglesRight } from "react-icons/fa6";
import { formatCurrency } from "../../helpers";

function cleanString(val: string) {
  const formattedValue = val.replace(/[^0-9]/g, "");
  const valueWithoutLast0One = removeLastZero(formattedValue);
  const valueWithoutLast0Two = removeLastZero(valueWithoutLast0One);

  return valueWithoutLast0Two;
}

function removeLastZero(val: string) {
  const charToDeleteIndex = val.lastIndexOf("0");

  if (charToDeleteIndex + 1 === val.length) {
    return val.substring(0, charToDeleteIndex);
  }

  const part1 = val.substring(0, charToDeleteIndex);
  const part2 = val.substring(charToDeleteIndex + 1);

  return `${part1}${part2}`;
}

export function CleanString() {
  const [value, setValue] = useState("$ 12,345.00");
  const [formattedValue, setFormattedValue] = useState("0");

  useEffect(() => {
    const formattedValue = formatCurrency(value);

    setFormattedValue(cleanString(formattedValue));
  }, [value]);

  return (
    <div className="flex flex-col gap-3">
      <span>convert text with symbols in text with only numbers</span>
      <span>also remove the last two zeros</span>

      <div className="flex gap-2 items-center">
        <Input
          type="tel"
          value={value}
          onChange={(e) => {
            const { value: inputVal } = e.target;

            setValue(inputVal);
          }}
        />

        <FaAnglesRight />

        <span className="bg-slate-500 rounded-lg p-1 text-right">
          {formattedValue || 0}
        </span>
      </div>
    </div>
  );
}
