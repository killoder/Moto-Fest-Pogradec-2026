import { createBrowserRouter, Navigate } from "react-router";
import { PresentationLayout } from "./components/PresentationLayout";
import { SlideViewer } from "./components/SlideViewer";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: PresentationLayout,
    children: [
      { index: true, element: <Navigate to="/slide/1" replace /> },
      { path: "slide/:id", Component: SlideViewer },
      { path: "*", element: <Navigate to="/slide/1" replace /> },
    ],
  },
]);
