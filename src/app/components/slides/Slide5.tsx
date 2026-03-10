import { motion } from "motion/react";
import { Users, Crosshair, Bike, Globe, Banknote } from "lucide-react";

export function Slide5() {
  return (
    <div className="w-full h-full relative bg-[#121212] overflow-hidden p-16 flex flex-col justify-center font-mono">
      {/* Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(142, 142, 142, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(142, 142, 142, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1769147339214-076740872485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobmljYWwlMjBkcmF3aW5nJTIwYmx1ZXByaW50fGVufDF8fHx8MTc3Mjc5MTA3MHww&ixlib=rb-4.1.0&q=80&w=1920')] opacity-5 mix-blend-screen grayscale object-cover" />

      {/* Blueprint Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex gap-12 text-[#8e8e8e]">
        
        {/* Left Column */}
        <motion.div 
          className="flex-1 flex flex-col justify-center border-l-2 border-[#cc5500]/50 pl-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 text-[#cc5500] uppercase tracking-widest text-lg flex items-center gap-3">
            <Crosshair size={20} /> Target Demographics
          </div>
          <h1 className="font-bebas text-6xl text-white tracking-widest mb-10 border-b border-[#8e8e8e]/30 pb-4">
            WHO IS COMING?
          </h1>

          <div className="space-y-12">
            <div className="relative">
              <h2 className="font-ruslan text-3xl text-white mb-2 relative z-10">6,000+ Expected Visitors</h2>
              <p className="text-xl leading-relaxed">
                We are bringing together a huge, diverse crowd of local and international visitors.
              </p>
            </div>

            <div className="relative">
              <h2 className="font-ruslan text-3xl text-white mb-2 relative z-10">International Reach</h2>
              <p className="text-xl leading-relaxed">
                A mix of local fans and foreign tourists looking for high-energy music and lake adventures.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Data Modules) */}
        <motion.div 
          className="flex-1 grid grid-cols-2 gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Module 1 */}
          <div className="border border-[#cc5500]/30 p-8 bg-[#121212]/80 backdrop-blur flex flex-col items-center justify-center text-center group hover:border-[#cc5500] transition-colors">
            <Bike className="w-16 h-16 text-[#cc5500] mb-4" />
            <div className="font-bebas text-5xl text-white mb-2 group-hover:text-glow-orange transition-all">1,200 Bikers</div>
            <div className="text-sm uppercase tracking-wider">20% more than our 2022 event</div>
          </div>

          {/* Module 2 */}
          <div className="border border-[#cc5500]/30 p-8 bg-[#121212]/80 backdrop-blur flex flex-col items-center justify-center text-center group hover:border-[#cc5500] transition-colors">
            <Users className="w-16 h-16 text-[#cc5500] mb-4" />
            <div className="font-bebas text-5xl text-white mb-2 group-hover:text-glow-orange transition-all">6,000+ Fans</div>
            <div className="text-sm uppercase tracking-wider">Fans of rock music and motorcycles</div>
          </div>

          {/* Module 3 */}
          <div className="border border-[#cc5500]/30 p-8 bg-[#121212]/80 backdrop-blur flex flex-col items-center justify-center text-center group hover:border-[#cc5500] transition-colors">
            <Globe className="w-16 h-16 text-[#cc5500] mb-4" />
            <div className="font-bebas text-5xl text-white mb-2 group-hover:text-glow-orange transition-all">Global Tourists</div>
            <div className="text-sm uppercase tracking-wider">Visitors from Albania and all over Europe</div>
          </div>

          {/* Module 4 */}
          <div className="border border-[#cc5500]/30 p-8 bg-[#121212]/80 backdrop-blur flex flex-col items-center justify-center text-center group hover:border-[#cc5500] transition-colors">
            <Banknote className="w-16 h-16 text-[#cc5500] mb-4" />
            <div className="font-bebas text-5xl text-white mb-2 group-hover:text-glow-orange transition-all">Local Businesses</div>
            <div className="text-sm uppercase tracking-wider">Hotels, bars and restaurants benefit from increased tourism</div>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative Technical UI */}
      <div className="absolute bottom-16 right-16 flex items-center gap-4 text-xs tracking-widest text-[#8e8e8e]/50">
        <span className="w-2 h-2 rounded-full bg-[#cc5500] animate-pulse" />
      </div>
    </div>
  );
}
