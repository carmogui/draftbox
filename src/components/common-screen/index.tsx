import { HTMLAttributes } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";
import { FaChevronCircleLeft } from "react-icons/fa";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function CommonScreen({ children, title }: Props) {
  return (
    <div className=" flex min-w-[100dvw] min-h-[100dvh]">
      <div className="custom-background flex items-center flex-col w-full max-w-screen-xl min-h-full mx-auto p-16 gap-12">
        {title ? (
          <div className="flex flex-col w-full">
            <Link
              to={Routes.Home}
              className="flex gap-2 items-center hover:text-indigo-400"
            >
              <FaChevronCircleLeft />
              <span>go back home</span>
            </Link>
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
        ) : null}

        {children}
      </div>
    </div>
  );
}
