import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Currency,
  Onboarding,
  OnboardingSubpage,
  SidebarMenuScreen,
  ViewScroll,
} from "./pages";
import { Routes } from "./constants";

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
  {
    path: Routes.ViewScroll,
    element: <ViewScroll />,
  },
  {
    path: Routes.SidebarMenu,
    element: <SidebarMenuScreen />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
