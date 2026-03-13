import { motion } from "motion/react";
import { TrendingUp, Globe, Target } from "lucide-react";

export function Slide14() {
  return (
    <div className="relative w-full h-full bg-[#121212] overflow-hidden flex flex-col justify-center bg-noise">
      <motion.img
        src="https://images.unsplash.com/photo-1544141687-4a0477ba4ccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGlnaHdheSUyMHN1bnNldHxlbnwxfHx8fDE3NzI3OTI5NzZ8MA&ixlib=rb-4.1.0&q=80&w=1920"
        alt="Future Highway"
        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale"
        initial={{ x: -50, scale: 1.1 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 15, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-[#121212]/80 to-transparent" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20 h-full overflow-y-auto lg:overflow-visible py-12 lg:py-0">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-ruslan text-[#cc5500] text-xl md:text-2xl tracking-[0.3em] mb-2 md:mb-4">THE VISION</h2>
            <h1 className="font-bebas text-6xl md:text-8xl text-white tracking-tight leading-none mb-4 md:mb-6">
              BEYOND 2026
            </h1>
            <p className="font-mono text-[#8e8e8e] text-base md:text-xl mb-6 md:mb-10 leading-relaxed max-w-xl">
              Establishing Pogradec as the definitive Balkan Biker Capital. We are building an empire that will draw riders from across Europe by 2030.
            </p>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded bg-black border border-[#8e8e8e]/30 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-[#cc5500] w-8 h-8" />
                </div>
                <div>
                  <div className="font-bebas text-2xl md:text-3xl text-white tracking-wider">10,000+ ATTENDEES</div>
                  <div className="font-mono text-s text-[#8e8e8e]">Projected for Year 5 (2030)</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded bg-black border border-[#8e8e8e]/30 flex items-center justify-center shrink-0">
                  <Globe className="text-[#cc5500] w-8 h-8" />
                </div>
                <div>
                  <div className="font-bebas text-2xl md:text-3xl text-white tracking-wider">PAN-EUROPEAN REACH</div>
                  <div className="font-mono text-s text-[#8e8e8e]">Expanding marketing to Italy, Greece, and DACH</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-panel p-8 w-full border-[#cc5500]/20">
            <h3 className="font-mono text-[#8e8e8e] text-sm mb-6 uppercase tracking-widest flex items-center gap-2">
              <Target size={20} className="text-[#cc5500]"/> Growth Trajectory
            </h3>
            <div className="relative h-48 md:h-64 w-full border-l-2 border-b-2 border-[#8e8e8e]/30 flex items-end justify-between px-2 md:px-4 pb-2">
              {/* Fake Chart Bars */}
              {[
                { year: '2026', height: '40%', val: '6k' },
                { year: '2027', height: '55%', val: '7.5k' },
                { year: '2028', height: '70%', val: '8.5k' },
                { year: '2029', height: '85%', val: '9.2k' },
                { year: '2030', height: '100%', val: '10k+' }
              ].map((bar, i) => (
                <div key={bar.year} className="flex flex-col items-center group w-1/6 relative h-full justify-end">
                  <motion.div 
                    className="w-full bg-gradient-to-t from-[#cc5500]/20 to-[#cc5500] border-t-2 border-[#cc5500] relative"
                    initial={{ height: 0 }}
                    animate={{ height: bar.height }}
                    transition={{ duration: 1, delay: 0.8 + i * 0.2, ease: "easeOut" }}
                  >
                    <div className="w-full h-full opacity-0 group-hover:opacity-100 transition-opacity bg-white/10" />
                    
                    {/* The value floating above the animated bar */}
                    <motion.div 
                      className="absolute left-1/2 -translate-x-1/2 -top-8 font-ruslan text-[#cc5500] text-lg whitespace-nowrap"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
                    >
                      {bar.val}
                    </motion.div>
                  </motion.div>
                  
                  {/* The year below the chart */}
                  <motion.div 
                    className="font-bebas text-white text-xl mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                  >
                    {bar.year}
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
