import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Currency } from "./pages/index.ts";
import { Routes } from "./constants/index.ts";
import { CoachMark } from "./pages/coach-mark/index.tsx";

const router = createBrowserRouter([
  {
    path: Routes.Home,
    element: <App />,
  },
  {
    path: Routes.Currency,
    element: <Currency />,
  },
  {
    path: Routes.CoachMark,
    element: <CoachMark />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
