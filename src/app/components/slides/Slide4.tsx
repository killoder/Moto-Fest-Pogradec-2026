import { motion } from "motion/react";
import { HeartPulse, Truck, Globe } from "lucide-react";

export function Slide4() {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-[#121212] overflow-hidden">
      {/* Massive '22' Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <h1 className="font-bebas text-[800px] text-white/[0.03] leading-none">
          22
        </h1>
      </div>

      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1695222833131-54ee679ae8e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHRydWNrfGVufDF8fHx8MTc3Mjk4NDQwM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Cargo Truck"
          className="w-full h-full object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      </div>

      <div className="z-10 w-full max-w-7xl px-16 flex justify-between items-center">
        {/* Left Stats */}
        <motion.div 
          className="flex-1 pr-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-bebas text-white text-7xl tracking-wide mb-2">
            HELPING OUR COMMUNITY
          </h1>
          <h2 className="font-ruslan text-[#cc5500] text-3xl tracking-widest mb-8 uppercase">
            Using our passion to support schools and hospitals
          </h2>
          
          <div className="space-y-8 glass-panel p-10 border-l-[#8e8e8e]">
            <div className="flex items-start gap-6">
              <Truck className="w-12 h-12 text-[#cc5500] shrink-0" />
              <div>
                <h3 className="font-bebas text-3xl text-white mb-2">Already Done</h3>
                <p className="font-mono text-[#8e8e8e] text-lg">
                  22 trucks of medical and school supplies delivered in past years.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <HeartPulse className="w-12 h-12 text-[#cc5500] shrink-0" />
              <div>
                <h3 className="font-bebas text-3xl text-white mb-2">Coming in 2026</h3>
                <p className="font-mono text-[#8e8e8e] text-lg">
                  10 more trucks of help are already confirmed for this year.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <Globe className="w-12 h-12 text-[#cc5500] shrink-0" />
              <div>
                <h3 className="font-bebas text-3xl text-white mb-2">German Partnership</h3>
                <p className="font-mono text-[#8e8e8e] text-lg">
                  Working with Biker-Brummi-Hilfe to bring aid to Albania.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Callout Box */}
        <motion.div 
          className="w-[450px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="glass-panel-orange p-12 text-center relative border border-[#cc5500]">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#cc5500]" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#cc5500]" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#cc5500]" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#cc5500]" />
            
            <h2 className="font-bebas text-[100px] text-white leading-none mb-4 text-glow-orange">
              22
            </h2>
            <p className="font-ruslan text-[#8e8e8e] text-2xl mb-6 uppercase">
              Full Trucks
            </p>
            <p className="font-mono text-white text-sm tracking-wider uppercase">
              "Riders with a Cause. Brotherly strength turned into actionable salvation."
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
