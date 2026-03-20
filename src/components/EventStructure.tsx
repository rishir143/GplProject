import React from "react";
import { motion as Motion } from "framer-motion";
import { Terminal, ShieldCheck, Code2 } from "lucide-react";

const EventStructure: React.FC = () => {
  return (
    <section id="structure" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-2 md:p-3 rounded-2xl bg-hacker-cyan/10 border border-hacker-cyan/20 mb-4 md:mb-6 backdrop-blur-md"
          >
            <Code2 className="w-5 h-5 md:w-6 md:h-6 text-hacker-cyan" />
          </Motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.1em] text-white font-orbitron text-pop">
            Event <span className="text-heading-premium">Roadmap</span>
          </h2>
          <p className="text-white/40 mt-3 md:mt-4 text-base md:text-lg max-w-2xl font-space">
            The competition is divided into two intense phases designed to filter the best of the best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <Terminal className="w-20 h-20 md:w-40 md:h-40 text-hacker-cyan" />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-hacker-cyan/10 rounded-xl md:rounded-2xl flex items-center justify-center text-hacker-cyan mb-5 md:mb-10 border border-hacker-cyan/20 group-hover:bg-hacker-cyan group-hover:text-black transition-all duration-500">
                <Terminal className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-6 font-orbitron uppercase tracking-wider">The <span className="text-hacker-cyan">Qualifier</span></h3>
              <p className="text-white/50 mb-6 md:mb-10 leading-relaxed text-sm md:text-lg font-space">
                An online round hosted on Codeforces/HackerRank. Participants will solve 5-7 algorithmic problems within a 2-hour window. Top performers advance to the grand finale.
              </p>
              <ul className="space-y-2 md:space-y-4 text-[10px] md:text-sm font-space text-white/40">
                <li className="flex items-center gap-2 md:gap-3 uppercase tracking-widest font-bold">
                  <span className="w-4 md:w-8 h-[1px] bg-hacker-cyan/30" /> Online Platform
                </li>
                <li className="flex items-center gap-2 md:gap-3 uppercase tracking-widest font-bold">
                  <span className="w-4 md:w-8 h-[1px] bg-hacker-cyan/30" /> 120 Minutes Duration
                </li>
                <li className="flex items-center gap-2 md:gap-3 uppercase tracking-widest font-bold">
                  <span className="w-4 md:w-8 h-[1px] bg-hacker-cyan/30" /> Algorithmic Focus
                </li>
              </ul>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-12 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 md:p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <ShieldCheck className="w-20 h-20 md:w-40 md:h-40 text-hacker-cyan" />
            </div>
            <div className="relative z-10">
              <div className="w-10 h-10 md:w-16 md:h-16 bg-hacker-cyan/10 rounded-xl md:rounded-2xl flex items-center justify-center text-hacker-cyan mb-5 md:mb-10 border border-hacker-cyan/20 group-hover:bg-hacker-cyan group-hover:text-black transition-all duration-500">
                <ShieldCheck className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-3xl font-black mb-3 md:mb-6 font-orbitron uppercase tracking-wider">The <span className="text-hacker-cyan">Grand Finale</span></h3>
              <p className="text-white/50 mb-6 md:mb-10 leading-relaxed text-sm md:text-lg font-space">
                An offline showdown at Galgotias Campus. The finalists will face off in a 4-hour high-pressure coding marathon with live leaderboards and spot prizes.
              </p>
              <ul className="space-y-2 md:space-y-4 text-[10px] md:text-sm font-space text-white/40">
                <li className="flex items-center gap-2 md:gap-3 uppercase tracking-widest font-bold">
                  <span className="w-4 md:w-8 h-[1px] bg-hacker-cyan/30" /> On-Campus Event
                </li>
                <li className="flex items-center gap-2 md:gap-3 uppercase tracking-widest font-bold">
                  <span className="w-4 md:w-8 h-[1px] bg-hacker-cyan/30" /> 4-Hour Marathon
                </li>
                <li className="flex items-center gap-2 md:gap-3 uppercase tracking-widest font-bold">
                  <span className="w-4 md:w-8 h-[1px] bg-hacker-cyan/30" /> Top 50 Finalists
                </li>
              </ul>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventStructure;
