import { useParams } from "react-router";
import { slides } from "../data/slides";
import { motion, AnimatePresence } from "motion/react";

export function SlideViewer() {
  const { id } = useParams();
  const currentId = parseInt(id || "1");
  const slide = slides.find((s) => s.id === currentId) || slides[0];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentId}
        initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full"
      >
        {slide.component}
      </motion.div>
    </AnimatePresence>
  );
}
