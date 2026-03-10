import { motion } from "motion/react";
import { TrendingUp, Coins, Building } from "lucide-react";

export function Slide6() {
  return (
    <div className="w-full h-full relative bg-[#121212] overflow-hidden flex items-center justify-center">
      {/* Background with subtle speedometer texture */}
      <img
        src="https://images.unsplash.com/photo-1681852855093-497b3746fe78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwc3BlZWRvbWV0ZXJ8ZW58MXx8fHwxNzcyNzg4OTU5fDA&ixlib=rb-4.1.0&q=80&w=1920"
        alt="Speedometer"
        className="absolute inset-0 w-full h-full object-cover opacity-[0.05] grayscale"
      />

      <div className="w-full max-w-7xl z-10 grid grid-cols-2 gap-16 px-16 items-center">
        {/* Left Stats Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel p-16 relative"
        >
          <div className="absolute -top-6 -left-6 text-[#cc5500] font-bebas text-8xl opacity-20">$$</div>
          <h2 className="font-ruslan text-[#8e8e8e] text-2xl tracking-widest mb-4 uppercase">
            Fueling Local Growth
          </h2>
          <h1 className="font-bebas text-white text-6xl tracking-widest mb-10 chrome-text">
            ECONOMIC BOOST
          </h1>

          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="p-4 glass-panel-orange rounded-full">
                <Coins className="w-8 h-8 text-[#cc5500]" />
              </div>
              <div>
                <div className="font-bebas text-4xl text-white">2,752,000 ALL</div>
                <div className="font-mono text-[#8e8e8e] text-sm tracking-wider uppercase">Budget being invested to make this festival happen.</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="p-4 glass-panel rounded-full">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="font-bebas text-4xl text-white">150% ROI</div>
                <div className="font-mono text-[#8e8e8e] text-sm tracking-wider uppercase">A massive crowd of fans and tourists ready to spend money at local businesses</div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="p-4 glass-panel rounded-full">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="font-bebas text-4xl text-white">100% full hotels</div>
                <div className="font-mono text-[#8e8e8e] text-sm tracking-wider uppercase">Every hotel and rental in Pogradec is expected to be full during the event.</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Info */}
        <div className="flex flex-col items-center justify-center w-full relative -mt-4">
          {/* Speedometer Infographic */}
          <motion.div
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
            className="relative flex justify-center items-center"
          >
            {/* Speedometer ring */}
            <svg className="w-[400px] h-[400px]" viewBox="0 0 200 200">
              {/* Background Arc */}
              <path
                d="M 20 160 A 90 90 0 1 1 180 160"
                fill="none"
                stroke="#222"
                strokeWidth="20"
                strokeLinecap="round"
              />
              {/* Value Arc (Orange) */}
              <motion.path
                d="M 20 160 A 90 90 0 1 1 180 160"
                fill="none"
                stroke="#cc5500"
                strokeWidth="20"
                strokeLinecap="round"
                strokeDasharray="400"
                initial={{ strokeDashoffset: 400 }}
                animate={{ strokeDashoffset: 100 }}
                transition={{ delay: 1, duration: 2, ease: "easeOut" }}
              />
              {/* Tick marks */}
              {Array.from({ length: 11 }).map((_, i) => {
                if (i === 0) return null; // Hide the first tick mark to avoid overlapping text
                const deg = 210 + i * 24; // starting angle
                return (
                  <g key={i} transform={`rotate(${deg}, 100, 100)`}>
                    <line x1="100" y1="25" x2="100" y2="35" stroke="#fff" strokeWidth="2" />
                  </g>
                );
              })}
            </svg>

            {/* Needle */}
            <motion.div
              className="absolute origin-bottom w-1 h-[160px] bg-white top-[40px] shadow-[0_0_15px_#fff]"
              initial={{ rotate: -120 }}
              animate={{ rotate: 70 }}
              transition={{ delay: 1, duration: 2, ease: "easeOut" }}
            >
              <div className="w-4 h-4 rounded-full bg-[#cc5500] absolute -left-[6px] bottom-0 shadow-[0_0_10px_#cc5500]" />
            </motion.div>

            <div className="absolute bottom-[60px] text-center w-full flex flex-col items-center">
              <span className="font-bebas text-6xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                MAX
              </span>
              <span className="font-mono text-[#cc5500] tracking-widest font-bold uppercase mt-2 text-sm">
                Economic Impact
              </span>
            </div>
          </motion.div>

          {/* The Contributors List */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="glass-panel p-6 w-full max-w-[420px] border-t-2 border-[#cc5500]"
          >
            <h3 className="font-bebas text-2xl text-white mb-4 tracking-wider border-b border-[#8e8e8e]/20 pb-2">THE CONTRIBUTORS LIST</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center group">
                <span className="font-mono text-[#8e8e8e] group-hover:text-white transition-colors duration-300 uppercase text-[13px] tracking-wide">Moto Club Pogradec</span>
                <span className="font-bebas text-[#cc5500] text-2xl">708,000 ALL</span>
              </li>
              <li className="flex justify-between items-center group">
                <span className="font-mono text-[#8e8e8e] group-hover:text-white transition-colors duration-300 uppercase text-[13px] tracking-wide">Bashkia Pogradec</span>
                <span className="font-bebas text-white text-2xl group-hover:text-[#cc5500] transition-colors duration-300">74,000 ALL</span>
              </li>
              <li className="flex justify-between items-center group">
                <span className="font-mono text-[#8e8e8e] group-hover:text-white transition-colors duration-300 uppercase text-[13px] tracking-wide">Fondacioni Kennedy & Seven</span>
                <span className="font-bebas text-white text-2xl group-hover:text-[#cc5500] transition-colors duration-300">24,000 ALL</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
