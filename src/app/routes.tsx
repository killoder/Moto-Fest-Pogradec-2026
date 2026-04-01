import { createBrowserRouter, Navigate } from "react-router";
import { PresentationLayout } from "./components/PresentationLayout";
import { SlideViewer } from "./components/SlideViewer";
import { MobilePresentation } from "./components/mobile/MobilePresentation";

function isMobileViewport() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 767px)").matches
  );
}

function ResponsiveEntry() {
  return <Navigate to={isMobileViewport() ? "/mobile" : "/slide/1"} replace />;
}

function DesktopOnlySlideEntry() {
  return <Navigate to={isMobileViewport() ? "/mobile" : "/slide/1"} replace />;
}

function MobileOnlyEntry() {
  return <Navigate to={isMobileViewport() ? "/mobile" : "/slide/1"} replace />;
}

export const router = createBrowserRouter([
  {
    path: "/mobile",
    children: [
      { index: true, Component: MobilePresentation },
      { path: "*", Component: MobileOnlyEntry },
    ],
  },
  {
    Component: PresentationLayout,
    children: [
      { index: true, Component: ResponsiveEntry },
      { path: "slide/:id", Component: SlideViewer },
      { path: "*", Component: DesktopOnlySlideEntry },
    ],
  },
  { path: "*", Component: ResponsiveEntry },
]);
