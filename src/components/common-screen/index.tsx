import { HTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../constants";
import { FaChevronCircleLeft } from "react-icons/fa";

interface Props extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  goBack?: () => void;
}

export function CommonScreen({ children, title, goBack }: Props) {
  const navigate = useNavigate();
  function goBackAction() {
    goBack ? goBack() : navigate(Routes.Home);
  }

  return (
    <div className=" flex min-h-[100dvh]">
      <div className="custom-background flex flex-col w-full max-w-screen-xl min-h-full mx-auto p-16 gap-12">
        {title ? (
          <div className="flex flex-col w-full">
            <button
              onClick={goBackAction}
              className="flex gap-2 items-center hover:text-indigo-400"
            >
              <FaChevronCircleLeft />

              <span>go back {goBack ? "" : "home"}</span>
            </button>
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
        ) : null}

        {children}
      </div>
    </div>
  );
}
