import { useState, useEffect } from "react";
import { Input } from "../../../../components";
import { convertCurrency, formatCurrency } from "../../helpes";
import { FaAnglesRight } from "react-icons/fa6";

export function ConvertCurrency() {
  const [value, setValue] = useState("0");
  const [formattedValue, setFormattedValue] = useState(value);

  useEffect(() => {
    const formattedValue = formatCurrency(value);

    setFormattedValue(convertCurrency(formattedValue));
  }, [value]);

  return (
    <div className="flex flex-col gap-3">
      <span>convert to currency with fixed decimals</span>

      <div className="flex gap-2 items-center">
        <Input
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />

        <FaAnglesRight />

        <span className="bg-slate-500 rounded-lg p-1 text-right">
          {formattedValue}
        </span>
      </div>
    </div>
  );
}
