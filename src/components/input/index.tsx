import { InputHTMLAttributes, RefObject, forwardRef } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  forwardRef?: RefObject<HTMLInputElement>;
}

export const Input = forwardRef(function Input({ forwardRef, ...rest }: Props) {
  return (
    <input
      ref={forwardRef}
      className=" text-base px-3 py-2 rounded-md border-green-600 border-2 bg-slate-700 read-only:border-green-950"
      {...rest}
    />
  );
});
