import { motion } from "motion/react";
import { Zap, Shield, Crown } from "lucide-react";

const tiers = [
  {
    name: "IRON",
    subtitle: "Event Partner",
    price: "50,000 ALL",
    icon: <Zap className="w-12 h-12 text-[#8e8e8e]" />,
    features: [
      "Logo on website",
      "Logo on LED stage screen",
      "Social Media Mentions"
    ],
    accent: "border-[#8e8e8e]",
    glow: "hover:shadow-[0_0_30px_rgba(142,142,142,0.3)]",
    featured: false,
    delay: 0.2
  },
  {
    name: "TITANIUM",
    subtitle: "",
    price: "150,000 ALL",
    icon: <Crown className="w-12 h-12 text-[#cc5500]" />,
    features: [
      "All iron package benefits",
      "Event naming rights",
      "3×5m exhibition space",
      "Professional Media Content"
    ],
    accent: "border-[#cc5500]",
    glow: "shadow-[0_0_30px_rgba(204,85,0,0.4)] hover:shadow-[0_0_50px_rgba(204,85,0,0.6)]",
    featured: true,
    delay: 0.4
  }
];

export function Slide7() {
  return (
    <div className="w-full h-full relative bg-[#121212] pt-20 px-16 flex flex-col items-center">
      {/* Carbon Fiber Background overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1728423462868-e547319fda21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBmaWJlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNzkxMDcwfDA&ixlib=rb-4.1.0&q=80&w=1920')",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply"
        }}
      />
      
      <motion.div 
        className="text-center z-10 mb-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="font-bebas text-6xl text-white tracking-widest chrome-text mb-4">
          BECOME A PARTNER
        </h1>
        <p className="font-mono text-[#8e8e8e] text-xl uppercase tracking-widest">
          Choose the best way to showcase your brand to 6,000 visitors.
        </p>
      </motion.div>

      <div className="w-full max-w-5xl z-10 flex gap-12 px-8 h-[550px] items-center pb-8">
        {tiers.map((tier) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: tier.delay, duration: 0.6 }}
            className={`flex-1 glass-panel transition-all duration-300 transform hover:-translate-y-4 cursor-pointer relative flex flex-col ${tier.featured ? `border-2 ${tier.accent} ${tier.glow} h-[110%] bg-[#1a1a1a] z-20` : `border-t-4 ${tier.accent} ${tier.glow} h-full`}`}
          >
            {/* Carbon fiber pseudo background specifically for card */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1728423462868-e547319fda21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJib24lMjBmaWJlciUyMHRleHR1cmV8ZW58MXx8fHwxNzcyNzkxMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080')] opacity-5 mix-blend-color-dodge z-0" />
            
            <div className="p-10 z-10 flex flex-col h-full relative">
              {tier.featured && (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-[#cc5500] text-black font-bebas px-6 py-2 text-2xl tracking-wider shadow-[0_0_15px_rgba(204,85,0,0.6)]">
                  OFFICIAL SPONSOR
                </div>
              )}
              
              <div className="flex justify-center mb-6">{tier.icon}</div>
              
              <h2 className="font-bebas text-5xl text-white text-center mb-2">{tier.name}</h2>
              {tier.subtitle ? (
                <p className="font-ruslan text-[#8e8e8e] text-center text-xl mb-6 border-b border-[#8e8e8e]/20 pb-6">
                  {tier.subtitle}
                </p>
              ) : (
                <div className="mb-6 border-b border-[#8e8e8e]/20 pb-6" />
              )}
              
              <div className="font-mono text-[#cc5500] text-2xl text-center mb-8 font-bold">
                {tier.price}
              </div>
              
              <ul className={`space-y-6 font-mono text-base text-[#8e8e8e] flex-1 mt-4 px-4 ${!tier.subtitle ? '-mt-4' : ''}`}>
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-[#cc5500] shrink-0" />
                    <span className={tier.featured ? "text-white" : ""}>{feature}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
