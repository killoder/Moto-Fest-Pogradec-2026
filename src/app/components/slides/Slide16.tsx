import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const RAW_IMAGES = [
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors1.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors2.jpg",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors3.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors4.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors5.jpg",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors6.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors7.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors8.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors9.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors10.jpg",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors11.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors12.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors13.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors14.jpg",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors15.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors16.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors17.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors18.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors19.jpg",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors20.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors21.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors22.jpg",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors23.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors24.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors25.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors26.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors27.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors28.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music1.jpg",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music2.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music3.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music4.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music5.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music6.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music7.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music8.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music9.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music10.jpg",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music11.JPG",
  "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music12.jpg"
];

const SLOTS = [
  { id: 0, className: "col-span-2 row-span-2" },
  { id: 1, className: "col-span-1 row-span-1" },
  { id: 2, className: "col-span-1 row-span-2" },
  { id: 3, className: "col-span-1 row-span-1" },
  { id: 4, className: "col-span-1 row-span-1" },
  { id: 5, className: "col-span-1 row-span-1" },
  { id: 6, className: "col-span-2 row-span-1" }
];

export function Slide16() {
  const [slotImages, setSlotImages] = useState<string[]>([]);

  useEffect(() => {
    // Generate the initial array of 7 randomly shuffled images when the component mounts on the client
    const shuffledPool = [...RAW_IMAGES].sort(() => Math.random() - 0.5);
    setSlotImages(SLOTS.map((_, i) => shuffledPool[i]));

    // Preload all images for smooth transitions
    RAW_IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Animate a random tile every 3 seconds
    const interval = setInterval(() => {
      setSlotImages(prev => {
        if (prev.length === 0) return prev;
        
        const slotToUpdate = Math.floor(Math.random() * SLOTS.length);
        const availableImages = RAW_IMAGES.filter(img => !prev.includes(img));
        
        if (availableImages.length === 0) return prev;
        
        const newImage = availableImages[Math.floor(Math.random() * availableImages.length)];
        const next = [...prev];
        next[slotToUpdate] = newImage;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full bg-[#121212] overflow-hidden">
      {/* Seamless, borderless grid */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 gap-0 w-full h-full overflow-hidden">
        {SLOTS.map((slot) => {
          const imageSrc = slotImages[slot.id];
          return (
            <div key={slot.id} className={`relative overflow-hidden ${slot.className}`}>
              {/* Base dark tint and contrast enhancing overlay (z-20 so it stays over fading images) */}
              <div className="absolute inset-0 bg-[#121212]/30 mix-blend-multiply z-20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#121212]/40 to-transparent z-20 pointer-events-none" />
              
              <AnimatePresence>
                {imageSrc && (
                  <motion.div
                    key={imageSrc}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ 
                      opacity: 1, 
                      scale: [1.05, 1.12, 1.05]
                    }}
                    exit={{ opacity: 0, scale: 1.12 }}
                    transition={{
                      opacity: { duration: 1.5, ease: "easeInOut" },
                      scale: { duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }
                    }}
                    className="absolute inset-0 w-full h-full origin-center"
                  >
                    <img
                      src={imageSrc}
                      alt="Gallery Section Image"
                      className="w-full h-full object-cover grayscale mix-blend-luminosity brightness-75 contrast-125"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Cinematic Lighting & Orange Lens Flares */}
      
      {/* Top right lens flare */}
      <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-[#cc5500]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none z-30" />
      <div className="absolute top-[5%] right-[15%] w-[10%] h-[10%] bg-[#cc5500]/40 blur-[40px] rounded-full mix-blend-screen pointer-events-none z-30" />
      
      {/* Bottom left lens flare */}
      <div className="absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] bg-[#cc5500]/15 blur-[150px] rounded-full mix-blend-screen pointer-events-none z-30" />
      
      {/* Subtle center flare trace */}
      <div className="absolute top-[40%] left-[20%] w-[60%] h-[1px] bg-gradient-to-r from-transparent via-[#cc5500]/30 to-transparent blur-[2px] -rotate-12 pointer-events-none z-30" />
      
      {/* Heavy Film Grain overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none z-40" />
      
      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#121212_100%)] pointer-events-none z-50" />

      {/* Title Overlay */}
      <div className="absolute top-24 left-8 z-[60] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-ruslan text-[#cc5500] text-2xl tracking-[0.3em] uppercase drop-shadow-lg">
            GALLERY
          </h2>
        </motion.div>
      </div>
    </div>
  );
}
