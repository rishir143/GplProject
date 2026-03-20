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

          <h1 className="text-7xl md:text-[10rem] font-black mb-6 leading-[0.9] tracking-tighter text-white">
            GPL <span className="text-hacker-cyan text-glow drop-shadow-[0_0_30px_rgba(0,194,255,0.3)]">1.0</span>
          </h1>
          
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <p className="text-2xl md:text-4xl font-bold text-white/90 mb-4 tracking-tight">
              Galgotias Programming League
            </p>
            <p className="text-lg md:text-2xl text-hacker-cyan/80 font-mono mb-16 tracking-[0.3em] uppercase">
              "Compete. Code. Conquer."
            </p>
          </Motion.div>

          <Motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-10 md:gap-16 mb-20 text-white/60"
          >
            <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-hacker-cyan/30 transition-colors backdrop-blur-md">
                <Calendar className="text-hacker-cyan w-7 h-7" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">5 April 2026</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-hacker-cyan/30 transition-colors backdrop-blur-md">
                <Users className="text-hacker-cyan w-7 h-7" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">~300 Spots</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-hacker-cyan/30 transition-colors backdrop-blur-md">
                <MapPin className="text-hacker-cyan w-7 h-7" />
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">Campus One</span>
            </div>
          </Motion.div>

          <Motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <a
              href="https://unstop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-16 py-6 bg-hacker-cyan text-black font-black text-xl rounded-2xl btn-glow flex items-center justify-center gap-3 overflow-hidden transition-all active:scale-95"
            >
              <span className="relative z-10">Secure Your Spot</span>
              <ChevronRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <p className="text-xs text-white/30 uppercase tracking-[0.4em] font-bold">
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
