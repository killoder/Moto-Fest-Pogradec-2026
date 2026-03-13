import { motion } from "motion/react";
import { 
  MapPin, 
  HeartHandshake, 
  Users, 
  Plus 
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Slide12() {
  const allies = [
    {
      name: "MOTO CLUB POGRADEC",
      image: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/MotoClub.jpeg",
      badge: "Founding Partner",
      type: "main"
    },
    {
      name: "SHERLOCK IRISH PUB",
      image: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Sherlock.jpg",
      badge: null,
      type: "main"
    },
    {
      name: "BASHKIA POGRADEC",
      image: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Bashkia.PNG",
      badge: null,
      type: "main"
    },
    {
      name: "POLICIA E SHTETIT",
      image: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Policia.PNG",
      badge: null,
      type: "main"
    },
    { 
      name: "VISIT POGRADEC", 
      image: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Visitpg.jpg", 
      type: "partner" 
    },
    { 
      name: "FONDACIONI KENNEDY", 
      image: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Logos/Kennedy.jpg", 
      type: "partner" 
    },
    { 
      name: "FONDACIONI SEVEN", 
      icon: Users, 
      type: "partner" 
    },
    { 
      name: "YOUR LOGO HERE", 
      subtitle: "50,000 ALL", 
      icon: Plus, 
      type: "placeholder" 
    }
  ];

  return (
    <div className="w-full h-full relative bg-[#121212] overflow-hidden flex flex-col items-center justify-center">
      {/* Background Textures */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1728423462868-e547319fda21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBmaWJlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNzkxMDcwfDA&ixlib=rb-4.1.0&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply"
        }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay pointer-events-none" />

      {/* Inner Content with Safety Margins & Max Width for Square Ratios */}
      <div className="absolute inset-0 z-10 px-[10%] py-[8%] flex flex-col items-center justify-center">
        
        {/* Header Container */}
        <motion.div 
          className="w-full max-w-[1400px] flex-shrink-0 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-bebas text-6xl text-white tracking-widest chrome-text leading-none">
            SPONSORS & PARTNERS
          </h1>
        </motion.div>

        {/* 1x1 Square Grid Container */}
        {/* max-w-[1200px] ensures the 4 columns don't stretch too wide, meaning their aspect-square height will safely fit on screen */}
        <div className="w-full max-w-[1300px] grid grid-cols-4 grid-rows-2 gap-6">
          {allies.map((item, idx) => {
            
            // Dynamic Placeholder Box
            if (item.type === "placeholder") {
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 * idx }}
                  className="aspect-square flex flex-col items-center p-6 border-4 border-dashed border-[#cc5500]/40 rounded-xl bg-[#cc5500]/5 relative overflow-hidden group cursor-pointer hover:border-[#cc5500] transition-colors"
                >
                  <div className="absolute inset-0 bg-[#cc5500]/10 animate-pulse" />
                  
                  {/* Flexible Top Area for Icon */}
                  <div className="flex-1 w-full min-h-0 relative mb-4 flex items-center justify-center">
                    <div className="p-5 rounded-full bg-[#cc5500]/20 group-hover:bg-[#cc5500]/30 transition-colors z-10">
                      <item.icon className="w-12 h-12 text-[#cc5500]" />
                    </div>
                  </div>

                  {/* Fixed Bottom Area for Text */}
                  <div className="shrink-0 w-full flex flex-col items-center justify-center z-10 text-center">
                    <span className="font-mono text-[#8e8e8e] text-xs uppercase tracking-widest mb-1 leading-none">
                      {item.subtitle}
                    </span>
                    <h3 className="font-ruslan text-2xl text-[#cc5500] tracking-wider leading-[1.1] drop-shadow-[0_0_8px_rgba(204,85,0,0.8)]">
                      {item.name}
                    </h3>
                  </div>
                </motion.div>
              );
            }

            // Partner & Sponsor Square Box
            return (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="aspect-square glass-panel border-t-4 border-t-[#8e8e8e]/30 flex flex-col p-6 group hover:border-t-[#cc5500] hover:bg-white/5 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Flexible Top Area for Image with object-contain to enforce "fit to size" */}
                <div className="flex-1 w-full min-h-0 relative mb-4 flex items-center justify-center transition-all duration-500 drop-shadow-[0_0_0px_rgba(204,85,0,0)] group-hover:drop-shadow-[0_0_25px_rgba(204,85,0,0.7)]">
                  {item.image ? (
                    <ImageWithFallback 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />
                  ) : item.icon ? (
                    <item.icon className="w-16 h-16 text-[#8e8e8e] group-hover:text-white transition-colors" />
                  ) : null}
                </div>

                {/* Fixed Bottom Area for Text (prevents overflow/cutting off) */}
                <div className="shrink-0 w-full flex flex-col items-center justify-center text-center">
                  {item.badge && (
                    <span className="font-mono text-[#cc5500] text-[10px] uppercase tracking-[0.2em] mb-1 leading-none text-center">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="font-bebas text-3xl text-[#8e8e8e] group-hover:text-white transition-colors tracking-widest leading-[1.1]">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}