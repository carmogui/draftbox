import { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "transparent" | "primary";
}

export function Button({ children, variant = "primary", ...rest }: Props) {
  if (variant === "transparent") {
    return (
      <button
        className="p-2 hover:bg-slate-600 bg-opacity-20 rounded-lg min-w-14"
        {...rest}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="p-2 bg-indigo-600 shadow-sm hover:bg-indigo-400 rounded-lg min-w-14"
      {...rest}
    >
      {children}
    </button>
  );
}
