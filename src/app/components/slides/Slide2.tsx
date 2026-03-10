import { motion } from "motion/react";
import { Quote } from "lucide-react";

export function Slide2() {
  return (
    <div className="w-full h-full flex bg-black">
      {/* Left Panel - Biker Patch */}
      <motion.div 
        className="w-1/2 h-full relative border-r-2 border-[#cc5500]/50"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/MotoFestTarga.png"
          alt="Leather Biker Patch"
          className="w-full h-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/10" />
        
        {/* Huge vertical text overlay */}
        <div className="absolute bottom-16 left-16 z-10">
          <h2 className="font-bebas text-[120px] text-white/10 leading-none [writing-mode:vertical-rl] transform rotate-180 tracking-widest">
            THE BRIEF
          </h2>
        </div>
      </motion.div>

      {/* Right Panel - Text Content */}
      <motion.div 
        className="w-1/2 h-full p-24 flex flex-col justify-center relative bg-[#121212]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <div className="glass-panel p-16 border-l-4 border-l-[#cc5500]">
          <Quote className="text-[#cc5500] w-16 h-16 mb-8 opacity-50" />
          
          <h3 className="font-ruslan text-4xl text-[#8e8e8e] mb-6 tracking-wider uppercase">
            The Mission
          </h3>
          
          <h1 className="font-bebas text-white text-6xl tracking-wide leading-tight mb-10 text-glow-orange">
            ELEVATING POGRADEC
          </h1>
          
          <p className="font-mono text-xl text-[#8e8e8e] leading-relaxed mb-8">
            We are making Pogradec a top destination for bikers and tourists from all over Europe. Our goal is to grow the local economy while helping the community.
          </p>
          
          <ul className="space-y-6 font-mono text-lg text-white">
            <li className="flex items-center space-x-4">
              <span className="w-12 h-[2px] bg-[#cc5500] shrink-0"></span>
              <span><strong className="text-[#cc5500]">Huge Crowd:</strong> Bringing 1,200 international bikers and over 5,000 total visitors to Pogradec.</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-12 h-[2px] bg-[#cc5500] shrink-0"></span>
              <span><strong className="text-[#cc5500]">Business Boost:</strong> Making sure local hotels, shops, and restaurants stay busy and full.</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="w-12 h-[2px] bg-[#cc5500] shrink-0"></span>
              <span><strong className="text-[#cc5500]">Community Aid:</strong> Bringing in 10 trucks of supplies for local schools and hospitals this year.</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
