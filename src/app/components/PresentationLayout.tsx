import { Outlet, useNavigate, useLocation } from "react-router";
import { slides } from "../data/slides";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export function PresentationLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentId = parseInt(location.pathname.split('/').pop() || "1") || 1;

  const goNext = () => {
    if (currentId < slides.length) navigate(`/slide/${currentId + 1}`);
  };

  const goPrev = () => {
    if (currentId > 1) navigate(`/slide/${currentId - 1}`);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        goNext();
      } else if (e.key === "ArrowLeft") {
        goPrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentId]);

  return (
    <div className="w-screen h-screen bg-black text-[#8e8e8e] flex flex-col items-center justify-center overflow-hidden font-mono bg-noise relative">
      <div 
        className="relative shadow-2xl overflow-hidden bg-[#121212] flex flex-col"
        style={{ width: "100%", maxWidth: "1920px", aspectRatio: "16/9", maxHeight: "100vh" }}
      >
        {/* Main Content Area */}
        <div className="flex-1 relative">
          <Outlet />
        </div>

        {/* Global UI Overlays */}
        <div className="absolute top-8 left-8 z-40">
          <h1 className="font-bebas text-3xl tracking-widest text-white/50 border-b-2 border-[#cc5500] pb-1 uppercase">
            MotoFest Pogradec 2026
          </h1>
        </div>
        
        <div className="absolute bottom-8 right-8 z-40 text-xl font-bebas text-white/30 tracking-widest">
          {currentId.toString().padStart(2, "0")} // {slides.length.toString().padStart(2, "0")}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-8 z-40 flex gap-4">
          <button
            onClick={goPrev}
            disabled={currentId === 1}
            className="p-3 glass-panel rounded-full hover:bg-white/10 disabled:opacity-30 transition-all text-[#cc5500] border border-[#cc5500]/30"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goNext}
            disabled={currentId === slides.length}
            className="p-3 glass-panel rounded-full hover:bg-white/10 disabled:opacity-30 transition-all text-[#cc5500] border border-[#cc5500]/30"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 bg-white/5 z-50">
          <div 
            className="h-full bg-[#cc5500] transition-all duration-500 ease-out shadow-[0_0_10px_#cc5500]"
            style={{ width: `${(currentId / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
