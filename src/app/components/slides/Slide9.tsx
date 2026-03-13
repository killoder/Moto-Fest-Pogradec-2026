import { motion } from "motion/react";
import { Guitar, Headphones, Trophy, Wind, Waves, Bike, Wrench, Gamepad2 } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Slide9() {
  const categories = [
    {
      title: "Music & Stage",
      items: [
        { label: "Rock Bands", text: "FRANK IBRAHIMI\nNIKI ZAIMI\nOFFCHESTRA", icon: Guitar },
        { label: "Live DJ", text: "VJ ERION\nDJ CL4US", icon: Headphones },
      ],
    },
    {
      title: "Sports & Adrenaline",
      items: [
        { text: "Beach Volley Championship\n(Cash Prizes)", icon: Trophy },
        { text: "Paragliding", icon: Wind },
        { text: "Lake Diving", icon: Waves },
      ],
    },
    {
      title: "Culture & Family",
      items: [
        { text: "Cycling to Lin", icon: Bike },
        { text: "Retro Bike & Car Expo", icon: Wrench },
        { text: "Family Games", icon: Gamepad2 },
      ],
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#121212] overflow-hidden flex items-center justify-center">
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: "linear" }}
        className="absolute inset-0 w-full h-full"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1605958610903-43aa1dfc9697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcm9jayUyMGNvbmNlcnR8ZW58MXx8fHwxNzcyOTg2ODE4fDA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Festival Lineup Background"
          className="w-full h-full object-cover opacity-40 grayscale mix-blend-luminosity"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/90 via-[#121212]/60 to-[#121212]/90" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/95 via-transparent to-[#121212]/95" />
      
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-16 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 border-l-4 border-[#cc5500] pl-6"
        >
          <h1 className="font-bebas text-7xl text-white tracking-widest uppercase chrome-text mb-3">
            THE FESTIVAL LINEUP
          </h1>
          <h2 className="font-mono text-[#cc5500] text-2xl tracking-[0.2em] uppercase text-glow-orange">
            Pogradec Public Beach | July 17 – 18, 2026
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.8 }}
              className="glass-panel p-8 border border-[#8e8e8e]/20 bg-black/40 backdrop-blur-md relative group hover:border-[#cc5500]/50 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#cc5500]/0 via-[#cc5500] to-[#cc5500]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="font-bebas text-4xl text-white mb-8 tracking-wider border-b border-[#8e8e8e]/20 pb-4">
                {cat.title}
              </h3>
              
              <div className="space-y-6">
                {cat.items.map((item, j) => (
                  <motion.div 
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (i * 0.2) + (j * 0.15), duration: 0.5 }}
                    className="flex items-center gap-5 group/item hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 shrink-0 rounded bg-[#cc5500]/5 border border-[#cc5500]/30 flex items-center justify-center group-hover/item:bg-[#cc5500]/20 group-hover/item:border-[#cc5500] transition-colors shadow-[0_0_15px_rgba(204,85,0,0.1)] group-hover/item:shadow-[0_0_20px_rgba(204,85,0,0.4)]">
                      <item.icon className="w-6 h-6 text-[#cc5500] drop-shadow-[0_0_8px_rgba(204,85,0,0.8)]" strokeWidth={1.5} />
                    </div>
                    <p className="font-mono text-[#8e8e8e] group-hover/item:text-white text-[18px] tracking-widest uppercase transition-colors whitespace-pre-line leading-relaxed">
                      {item.label && <span className="text-[#cc5500] font-bold block mb-1">{item.label}</span>}
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
