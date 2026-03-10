import { motion } from "motion/react";

interface GenericSlideProps {
  title: string;
  content: string;
  bgImage?: string;
}

export function GenericSlide({ title, content, bgImage }: GenericSlideProps) {
  return (
    <div className="w-full h-full relative bg-[#121212] flex items-center justify-center overflow-hidden">
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </>
      )}

      <motion.div
        className="glass-panel p-20 max-w-5xl text-center z-10 border-t-4 border-t-[#cc5500]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-bebas text-7xl text-white tracking-widest mb-10 chrome-text">
          {title}
        </h1>
        <div className="h-1 w-32 bg-[#cc5500] mx-auto mb-10" />
        <p className="font-mono text-[#8e8e8e] text-2xl leading-relaxed">
          {content}
        </p>
      </motion.div>
    </div>
  );
}
