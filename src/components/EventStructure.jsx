import React from "react";
import { motion as Motion } from "framer-motion";
import { Terminal, ShieldCheck } from "lucide-react";

const EventStructure = () => {
  return (
    <section
      id="structure"
      className="py-24 bg-hacker-dark-lighter/50 relative"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Event <span className="text-hacker-cyan">Structure</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            The competition is divided into two intense phases designed to
            filter the best of the best.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-hacker-green/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal className="w-24 h-24 text-hacker-green" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-hacker-green/10 rounded-2xl flex items-center justify-center text-hacker-green mb-8">
                <Terminal className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4">
                The <span className="text-hacker-green">Qualifier</span>
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                An online round hosted on Codeforces/HackerRank. Participants
                will solve 5-7 algorithmic problems within a 2-hour window. Top
                performers advance to the grand finale.
              </p>
              <ul className="space-y-3 text-sm font-mono text-white/50">
                <li className="flex items-center gap-2">
                  <span className="text-hacker-green">01</span> Online Platform
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-green">02</span> 120 Minutes
                  Duration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-green">03</span> Algorithmic
                  Focus
                </li>
              </ul>
            </div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-hacker-cyan/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <ShieldCheck className="w-24 h-24 text-hacker-cyan" />
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-hacker-cyan/10 rounded-2xl flex items-center justify-center text-hacker-cyan mb-8">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black mb-4">
                The <span className="text-hacker-cyan">Grand Finale</span>
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                An offline showdown at Galgotias Campus. The finalists will face
                off in a 4-hour high-pressure coding marathon with live
                leaderboards and spot prizes.
              </p>
              <ul className="space-y-3 text-sm font-mono text-white/50">
                <li className="flex items-center gap-2">
                  <span className="text-hacker-cyan">01</span> On-Campus Event
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-cyan">02</span> 4-Hour Marathon
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-hacker-cyan">03</span> Top 50 Finalists
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
