import React from "react";
import { motion as Motion } from "framer-motion";
import { Calendar, Users, MapPin, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="z-10 max-w-5xl"
        >
          <Motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-hacker-cyan/5 border border-hacker-cyan/20 text-hacker-cyan text-xs font-bold uppercase tracking-[0.2em] mb-10 backdrop-blur-md"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hacker-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-hacker-cyan shadow-[0_0_10px_#00c2ff]"></span>
            </span>
            Registrations Open • 1 Apr - 3 Apr
          </Motion.div>

          <div className="relative mb-8">
            <div className="absolute inset-0 bg-hacker-cyan/10 blur-[120px] rounded-full -z-10" />
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] -z-10 rounded-3xl scale-110" />
            <h1 className="text-7xl md:text-[10rem] font-black leading-[0.9] tracking-[-0.04em] text-white font-orbitron text-pop">
              GPL <span className="text-gradient-cyan text-glow-neon-sharp">1.0</span>
            </h1>
          </div>
          
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <p className="text-2xl md:text-4xl font-bold text-white mb-6 tracking-[0.1em] font-orbitron uppercase text-pop brightness-125">
              Galgotias Programming League
            </p>
            <p className="text-lg md:text-2xl text-hacker-cyan font-orbitron mb-16 tracking-[0.6em] uppercase font-black text-pop brightness-110">
              "Compete. Code. Conquer."
            </p>
          </Motion.div>

          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-10 md:gap-16 mb-24 text-white/80"
          >
            {[
              { icon: Calendar, text: "5 April 2026" },
              { icon: Users, text: "~300 Spots" },
              { icon: MapPin, text: "Campus One" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-4 group">
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 group-hover:border-hacker-cyan/50 group-hover:bg-hacker-cyan/5 transition-all duration-500 backdrop-blur-xl shadow-[0_0_30px_rgba(0,194,255,0.05)] group-hover:shadow-[0_0_40px_rgba(0,194,255,0.2)]">
                  <item.icon className="text-hacker-cyan w-8 h-8 filter drop-shadow-[0_0_12px_rgba(0,194,255,0.8)] brightness-125" />
                </div>
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 group-hover:text-white transition-colors font-orbitron text-pop">{item.text}</span>
              </div>
            ))}
          </Motion.div>

          <Motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            <a
              href="https://unstop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-20 py-8 bg-hacker-cyan text-black font-black text-2xl rounded-2xl btn-glow-premium animate-pulse-glow-subtle flex items-center justify-center gap-4 overflow-hidden font-orbitron"
            >
              <span className="relative z-10 uppercase tracking-widest">Secure Your Spot</span>
              <ChevronRight className="relative z-10 w-8 h-8 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </a>
            <p className="text-xs text-white/50 uppercase tracking-[0.6em] font-black font-orbitron text-pop brightness-125">
              Finalists receive exclusive swag kits
            </p>
          </Motion.div>
        </Motion.div>
      </div>
      
      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-hacker-dark to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
