import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Currency, Onboarding, OnboardingSubpage } from "./pages/index.ts";
import { Routes } from "./constants/index.ts";

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
    path: Routes.Onboarding,
    element: <Onboarding />,
  },
  {
    path: Routes.OnboardingSubpage,
    element: <OnboardingSubpage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
