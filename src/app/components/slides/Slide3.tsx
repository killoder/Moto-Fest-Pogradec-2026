import { motion } from "motion/react";

import { ImageWithFallback } from "../figma/ImageWithFallback";

const trinityData = [
  {
    id: "INTERNATIONAL RIDERS",
    desc: "1,200 bikers from Germany, Greece, and the Balkans showing off custom and handmade motorcycles in the heart of the city.",
    img: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Motors/Motors22.jpg",
    delay: 0.2
  },
  {
    id: "LAKE SPORTS",
    desc: "National Beach Volleyball championship, paragliding, and lake diving to show off the natural beauty and energy of Pogradec.",
    img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHZvbGxleXxlbnwxfHx8fDE3NzI3OTEwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    delay: 0.4
  },
  {
    id: "LIVE MUSIC",
    desc: "4 Rock & Pop bands and 4 top DJs performing live on the main beach stage for thousands of fans. Epic performances all night long.",
    img: "https://arypjtkzteqwlkdlirmr.supabase.co/storage/v1/object/public/Sherlock/Music/Music1.jpg",
    delay: 0.6
  }
];

export function Slide3() {
  return (
    <div className="w-full h-full flex flex-col pt-12 lg:pt-24 px-4 md:px-8 lg:px-16 bg-[#121212] overflow-y-auto lg:overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center z-20 mb-8 lg:mb-12 shrink-0"
      >
        <h1 className="font-bebas text-5xl md:text-7xl text-white tracking-widest chrome-text">
          THE TRINITY CONCEPT
        </h1>
        <p className="font-ruslan text-lg md:text-3xl text-[#cc5500] mt-2 tracking-widest uppercase">
          Three reasons thousands of people join us
        </p>
      </motion.div>

      <div className="flex-1 flex flex-col lg:flex-row w-full gap-4 pb-12 lg:pb-24">
        {trinityData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, skewX: 10, x: -50 }}
            animate={{ opacity: 1, skewX: -5, x: 0 }}
            transition={{ delay: item.delay, duration: 0.8, ease: "easeOut" }}
            className="flex-1 min-h-[300px] relative overflow-hidden border-2 border-[#8e8e8e]/20 group"
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-[120%] -left-[10%] skew-x-[5deg]">
              <ImageWithFallback
                src={item.img}
                alt={item.id}
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
            </div>

            {/* Content box skewing back to normal text */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 transform skew-x-[5deg]">
              <div className="glass-panel p-4 md:p-8 lg:translate-y-8 lg:group-hover:translate-y-0 transition-transform duration-500 border-b-4 border-b-[#cc5500]">
                <div className="font-bebas text-4xl md:text-6xl text-white mb-2 md:mb-4 drop-shadow-lg opacity-90">
                  {`0${index + 1}`}
                </div>
                <h2 className="font-bebas text-2xl md:text-4xl text-[#cc5500] mb-2 md:mb-4 tracking-wider">
                  {item.id}
                </h2>
                <p className="font-mono text-[#8e8e8e] text-xl leading-relaxed group-hover:text-white transition-colors duration-300">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
