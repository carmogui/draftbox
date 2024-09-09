import { useEffect, useState } from "react";
import { Input } from "../../../../components";
import { FaAnglesRight } from "react-icons/fa6";
import { cleanString, formatCurrency } from "../../helpers";

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
          placeholder="type some number"
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
