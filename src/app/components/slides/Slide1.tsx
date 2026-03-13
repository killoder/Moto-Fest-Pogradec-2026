import { motion } from "motion/react";

export function Slide1() {
  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1695037688416-9863d3efc8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWF2eSUyMHRvdXJpbmclMjBtb3RvcmN5Y2xlJTIwYmxhY2slMjBhbmQlMjB3aGl0ZSUyMGdyYWlufGVufDF8fHx8MTc3Mjc5MTA2OXww&ixlib=rb-4.1.0&q=80&w=1920"
        alt="Heavy Touring Motorcycle"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40 grayscale mix-blend-luminosity"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "linear" }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />

      {/* Main Content Box (Glassmorphism) */}
      <motion.div
        className="relative z-10 glass-panel border-[#8e8e8e]/30 px-24 py-16 text-center max-w-5xl"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, type: "spring" }}
      >
        <h2 className="font-ruslan text-[#8e8e8e] text-3xl md:text-5xl mb-6 uppercase tracking-[0.3em]">
          Pogradec, Albania
        </h2>
        <h1 className="font-bebas text-white text-7xl md:text-[140px] leading-none tracking-tight mb-8 drop-shadow-2xl">
          MOTO FEST <span className="text-[#cc5500]">2026</span>
        </h1>
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#cc5500] to-transparent mb-8" />
        <p className="font-mono text-[#8e8e8e] text-3xl tracking-[0.5em] uppercase mb-6">
          The Legend Returns
        </p>
        <p className="font-bebas text-[#cc5500] text-4xl tracking-widest uppercase">
          17-18 July 2026
        </p>
      </motion.div>
    </div>
  );
}
