import { motion } from "motion/react";
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook } from "lucide-react";

export function Slide15() {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden flex items-center justify-center bg-noise">
      <motion.img
        src="https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music12.jpg"
        alt="Group Ride"
        className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black" />

      <div className="relative z-10 w-full max-w-4xl text-center px-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-24 h-1 bg-[#cc5500] mx-auto mb-8" />
          <h1 className="font-bebas text-8xl md:text-[120px] text-white tracking-tighter leading-none mb-6 drop-shadow-2xl">
            RIDE WITH <span className="text-[#cc5500]">US</span>
          </h1>
          <p className="font-mono text-[#8e8e8e] text-xl mb-12 uppercase tracking-[0.2em]">
            Join the core team. Secure your partnership.
          </p>
        </motion.div>

        <motion.div
          className="glass-panel p-10 max-w-2xl mx-auto border-[#cc5500]/40"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full border border-[#8e8e8e]/30 group-hover:border-[#cc5500] transition-colors shrink-0">
                <Mail className="text-[#cc5500] w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <div className="font-mono text-xs text-[#8e8e8e] uppercase">Sponsorship Inquiries</div>
                <div className="font-bebas text-2xl text-white tracking-wide">dritanhoxha@protonmail.com</div>
              </div>
              <ArrowRight className="text-[#8e8e8e] group-hover:text-[#cc5500] group-hover:translate-x-2 transition-all w-5 h-5" />
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8e8e8e]/20 to-transparent" />

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full border border-[#8e8e8e]/30 group-hover:border-[#cc5500] transition-colors shrink-0">
                <div className="flex gap-1">
                  <Instagram className="text-[#cc5500] w-4 h-4" />
                  <Facebook className="text-[#cc5500] w-4 h-4" />
                </div>
              </div>
              <div className="text-left flex-1">
                <div className="font-mono text-xs text-[#8e8e8e] uppercase">Social Media</div>
                <div className="font-bebas text-2xl text-white tracking-wide">MC POGRADECI</div>
              </div>
              <ArrowRight className="text-[#8e8e8e] group-hover:text-[#cc5500] group-hover:translate-x-2 transition-all w-5 h-5" />
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8e8e8e]/20 to-transparent" />

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full border border-[#8e8e8e]/30 group-hover:border-[#cc5500] transition-colors shrink-0">
                <Phone className="text-[#cc5500] w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <div className="font-mono text-xs text-[#8e8e8e] uppercase">Core Team Direct Line</div>
                <div className="font-bebas text-2xl text-white tracking-wide">+355 69 44 09 129</div>
              </div>
              <ArrowRight className="text-[#8e8e8e] group-hover:text-[#cc5500] group-hover:translate-x-2 transition-all w-5 h-5" />
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8e8e8e]/20 to-transparent" />

            <div className="flex items-center gap-6">
              <div className="w-12 h-12 bg-black flex items-center justify-center rounded-full border border-[#8e8e8e]/30 shrink-0">
                <MapPin className="text-[#cc5500] w-5 h-5" />
              </div>
              <div className="text-left flex-1">
                <div className="font-mono text-xs text-[#8e8e8e] uppercase">Adresa</div>
                <div className="font-bebas text-2xl text-white tracking-wide">Bulevardi "Dëshmorët e Pojskës" Pogradec</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
