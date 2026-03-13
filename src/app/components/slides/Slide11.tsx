import { motion } from "motion/react";
import { Music, Store, Car, PlusSquare } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Slide11() {
  const locations = [
    { name: "Main Stage & Arena", icon: Music, coords: { x: "40%", y: "30%" } },
    { name: "Partner & Expo Zone", icon: Store, coords: { x: "20%", y: "60%" } },
    { name: "VIP & Partner Parking", icon: Car, coords: { x: "70%", y: "45%" } },
    { name: "Medical & Safety Hub", icon: PlusSquare, coords: { x: "60%", y: "80%" } },
  ];

  return (
    <div className="relative w-full h-full bg-black overflow-hidden bg-noise flex items-center">
      {/* Map Background */}
      <motion.div 
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music6.JPG"
          alt="Map Background"
          className="w-full h-full object-cover opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </motion.div>

      <div className="relative z-20 max-w-[1700px] mx-auto px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 xl:col-span-5 max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-bebas text-7xl md:text-8xl text-white tracking-tight leading-none mb-6 mt-4 drop-shadow-lg">
                EVENT <span className="text-[#cc5500]">LAYOUT</span>
              </h1>
              <p className="font-mono text-white text-lg mb-10 leading-relaxed border-l-2 border-[#cc5500] pl-6">
                Strategically mapped for safety and high-visibility branding.
              </p>
            </motion.div>

            <motion.div 
              className="glass-panel p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-bebas text-3xl text-white mb-4 tracking-wider border-b border-[#8e8e8e]/20 pb-2">ZONES OF OPERATION</h3>
              <ul className="space-y-5">
                {locations.map((loc, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="p-3 rounded border border-[#cc5500]/30 bg-[#cc5500]/5 shadow-[0_0_10px_rgba(204,85,0,0.1)] group-hover:bg-[#cc5500]/20 group-hover:border-[#cc5500] group-hover:shadow-[0_0_15px_rgba(204,85,0,0.4)] transition-all duration-300">
                      <loc.icon className="text-[#cc5500] w-5 h-5 drop-shadow-[0_0_5px_rgba(204,85,0,0.8)]" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-[#8e8e8e] group-hover:text-white text-[18px] uppercase tracking-wide transition-colors duration-300">{loc.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-7 xl:col-span-7 w-full relative"
          >
            <div className="glass-panel p-2 md:p-4 rounded-xl shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#cc5500]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <ImageWithFallback
                src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Maps.png"
                alt="MotoFest Pogradec 2026 Event Layout Map"
                className="w-full h-auto object-cover rounded-lg filter sepia-[0.2] contrast-125 border border-[#8e8e8e]/20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
