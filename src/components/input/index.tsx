import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: Props) {
  return (
    <input
      className=" text-base px-3 py-2 rounded-md border-green-600 border-2 bg-slate-700 read-only:border-green-950"
      {...rest}
    />
  );
}
