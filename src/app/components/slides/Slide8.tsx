import { motion } from "motion/react";
import { Target, Trophy, ShieldCheck, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Slide8() {
  return (
    <div className="w-full h-full relative bg-[#121212] overflow-hidden flex items-center">
      {/* Dark industrial background texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1728423462868-e547319fda21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBmaWJlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNzkxMDcwfDA&ixlib=rb-4.1.0&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply"
        }}
      />
      
      {/* Heavy Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      <div className="w-full max-w-[1600px] mx-auto z-10 grid grid-cols-2 gap-16 px-16 h-[85%] items-center">
        
        {/* Left Side: Photo with Overlay Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col h-[90%] w-full"
        >
          {/* High-Impact Photo */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-[#8e8e8e]/20 group shadow-2xl">
            <ImageWithFallback 
              src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors19.jpg"
              alt="Moto Club Pogradeci in Action"
              className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            
            {/* Overlay Gradients to make text legible */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/90 via-[#121212]/20 to-transparent opacity-90" />
            
            {/* Decorative Corner Accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#cc5500]/50" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#cc5500]/50" />

            {/* Bottom Overlay Text */}
            <div className="absolute bottom-10 left-10 pr-10 z-20">
              <h1 className="font-bebas text-6xl xl:text-7xl text-white tracking-widest chrome-text leading-none mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                MOTO CLUB POGRADECI
              </h1>
              <div className="inline-block border-l-4 border-[#cc5500] pl-4 bg-[#121212]/60 backdrop-blur-sm py-2 pr-6 shadow-lg">
                <p className="font-mono text-[#cc5500] text-lg xl:text-xl uppercase tracking-widest drop-shadow-md">
                  The engine behind MotoFest 2026.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Content Sections */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center h-[90%] py-4 pl-4 xl:pl-8"
        >
          <div className="space-y-6 xl:space-y-8 h-full flex flex-col justify-center">
            {/* Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-panel p-6 xl:p-8 border-l-4 border-[#cc5500] relative bg-[#1a1a1a]/40 hover:bg-[#1a1a1a]/60 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-3 xl:mb-4">
                <Target className="w-7 h-7 xl:w-8 xl:h-8 text-[#cc5500] group-hover:scale-110 transition-transform" />
                <h3 className="font-bebas text-3xl xl:text-4xl text-white tracking-wider">OUR MISSION</h3>
              </div>
              <ul className="space-y-2 xl:space-y-3 font-mono text-[#8e8e8e] text-base xl:text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-[#cc5500] mt-1 text-xl leading-none">▹</span>
                  Scaling Pogradec as an international adventure destination.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#cc5500] mt-1 text-xl leading-none">▹</span>
                  Partnering with local authorities and humanitarian foundations for city-wide impact.
                </li>
              </ul>
            </motion.div>

            {/* Success */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass-panel p-6 xl:p-8 border-l-4 border-[#cc5500] relative bg-[#1a1a1a]/40 hover:bg-[#1a1a1a]/60 transition-colors group shrink-0"
            >
              <div className="flex items-center gap-4 mb-4 xl:mb-5">
                <Trophy className="w-7 h-7 xl:w-8 xl:h-8 text-[#cc5500] group-hover:scale-110 transition-transform" />
                <h3 className="font-bebas text-3xl xl:text-4xl text-white tracking-wider">PROVEN SUCCESS & LEGACY</h3>
              </div>
              
              <div className="flex flex-col xl:flex-row gap-5 xl:gap-8 items-start xl:items-center">
                <div className="flex flex-col gap-2 relative before:absolute before:inset-y-1 before:left-2 before:w-[2px] before:bg-[#8e8e8e]/20 ml-2 xl:flex-1">
                  <div className="relative pl-8">
                    <span className="absolute left-[3px] top-2 w-2 h-2 rounded-full bg-[#8e8e8e] -translate-x-1/2 shadow-[0_0_8px_rgba(142,142,142,0.8)]" />
                    <p className="font-mono text-[#8e8e8e] text-sm"><span className="text-white font-bold">2022:</span> Motofest Pogradeci</p>
                  </div>
                  <div className="relative pl-8">
                    <span className="absolute left-[3px] top-2 w-2 h-2 rounded-full bg-[#8e8e8e] -translate-x-1/2 shadow-[0_0_8px_rgba(142,142,142,0.8)]" />
                    <p className="font-mono text-[#8e8e8e] text-sm"><span className="text-white font-bold">2024:</span> Motofest Pogradeci</p>
                  </div>
                  <div className="relative pl-8">
                    <span className="absolute left-[3px] top-2 w-2 h-2 rounded-full bg-[#cc5500] -translate-x-1/2 shadow-[0_0_8px_#cc5500]" />
                    <p className="font-mono text-[#cc5500] text-sm"><span className="text-white font-bold">2025:</span> Brotherhood Fest</p>
                  </div>
                </div>

                <div className="bg-[#cc5500]/10 border border-[#cc5500]/30 px-4 py-3 shadow-[inset_0_0_15px_rgba(204,85,0,0.1)] flex items-center gap-4 group-hover:bg-[#cc5500]/20 transition-colors xl:flex-1 w-full">
                  <TrendingUp className="w-8 h-8 text-[#cc5500] shrink-0" />
                  <div>
                    <p className="font-bebas text-xl xl:text-2xl text-white tracking-widest leading-none mb-1">20% PROJECTED GROWTH</p>
                    <p className="font-mono text-[10px] xl:text-xs text-[#8e8e8e] uppercase tracking-wider leading-none">From 1,000 to 1,200+ Riders</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Commitment */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="glass-panel p-6 xl:p-8 border-l-4 border-[#8e8e8e]/50 relative bg-[#1a1a1a]/30 hover:bg-[#1a1a1a]/50 transition-colors group"
            >
              <div className="flex items-center gap-4 mb-3 xl:mb-4">
                <ShieldCheck className="w-6 h-6 xl:w-7 xl:h-7 text-[#8e8e8e] group-hover:scale-110 transition-transform" />
                <h3 className="font-bebas text-2xl xl:text-3xl text-white/80 tracking-wider">OUR COMMITMENT</h3>
              </div>
              <ul className="space-y-2 xl:space-y-3 font-mono text-[#8e8e8e] text-sm xl:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-[#8e8e8e] mt-1.5 text-xl leading-none">▹</span>
                  <span className="leading-relaxed">
                    Primary project contributor with <span className="text-white/90 font-medium">708,000 ALL</span> already invested.
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
