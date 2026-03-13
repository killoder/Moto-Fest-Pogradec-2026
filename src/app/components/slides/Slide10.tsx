import { motion } from "motion/react";
import { Share2, Megaphone, Target } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Slide10() {
  const strategies = [
    {
      title: "DIGITAL ECOSYSTEM",
      items: [
        "Social & Online Media\n(2M+ Reach)",
        "Professional AV & Photo Content",
        "15+ Global Influencer Network"
      ],
      icon: Share2,
    },
    {
      title: "PHYSICAL & MEDIA",
      items: [
        "Posters, Banners & City Branding",
        "Official Press & Media Relations",
        "Full Visibility from Institutional Partners"
      ],
      icon: Megaphone,
    },
    {
      title: "STRATEGIC IMPACT",
      items: [
        "Direct Community Engagement",
        "Inclusive & Professional Standards",
        "Integrated Communication Plan"
      ],
      icon: Target,
    },
  ];

  return (
    <div className="relative w-full h-full bg-[#121212] overflow-hidden flex flex-col justify-center bg-noise">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 w-full h-full"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZGFya3xlbnwwfHx8fDE3MTUyMTY4MDR8MA&ixlib=rb-4.1.0&q=80&w=1920"
          alt="Marketing Background"
          className="w-full h-full object-cover grayscale mix-blend-luminosity"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-[#121212]/90" />

      <div className="relative z-10 max-w-[1700px] mx-auto px-16 w-full grid grid-cols-1 gap-16 items-center">
        <div className="flex flex-col w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h1 className="font-bebas text-8xl text-white tracking-wider mb-4 drop-shadow-lg">
              PROMOTION & <span className="text-[#cc5500]">VISIBILITY</span>
            </h1>
            <p className="font-mono text-[#8e8e8e] uppercase tracking-[0.2em] text-lg border-l-2 border-[#cc5500] pl-6">
              A professional, inclusive plan for maximum brand awareness.
            </p>
          </motion.div>

          <div className="flex gap-12 w-full">
            {strategies.map((strat, i) => (
              <motion.div
                key={strat.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.2 }}
                className="flex-1 glass-panel-orange p-6 md:p-8 flex flex-col items-start gap-6 relative border border-[#cc5500]/30 hover:border-[#cc5500] hover:-translate-y-2 transition-all duration-300 group bg-[#121212]/50"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#cc5500]/0 to-[#cc5500]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#121212] flex items-center justify-center border border-[#cc5500]/50 shadow-[0_0_15px_rgba(204,85,0,0.2)] group-hover:shadow-[0_0_25px_rgba(204,85,0,0.5)] group-hover:bg-[#cc5500]/10 transition-all duration-300 z-10">
                  <strat.icon className="w-8 h-8 text-[#cc5500] drop-shadow-[0_0_8px_rgba(204,85,0,0.8)]" strokeWidth={1.5} />
                </div>
                
                <div className="flex-1 z-10 w-full">
                  <h3 className="font-bebas text-3xl text-white mb-6 tracking-wider">{strat.title}</h3>
                  <div className="flex flex-col gap-4 w-full text-left">
                    {strat.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#cc5500] mt-2 shrink-0 shadow-[0_0_5px_rgba(204,85,0,0.5)]" />
                        <p className="font-mono text-[#8e8e8e] group-hover:text-white text-s leading-relaxed transition-colors whitespace-pre-line">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
