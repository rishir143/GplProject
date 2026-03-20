import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Code2, Trophy, Cpu, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block p-3 rounded-2xl bg-hacker-cyan/10 border border-hacker-cyan/20 mb-8 backdrop-blur-md"
          >
            <Cpu className="w-6 h-6 text-hacker-cyan" />
          </Motion.div>
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-8 tracking-[0.05em] font-orbitron uppercase text-pop"
          >
            The Ultimate <span className="text-gradient">Battleground</span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 leading-relaxed font-space"
          >
            The Galgotias Programming League is more than just a contest; it's a battleground for the sharpest minds. 
            Join hundreds of developers in a high-octane environment where logic meets creativity. 
            Whether you're a seasoned competitive programmer or a rising star, GPL 1.0 is your chance to shine.
          </Motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Code2 />, title: "Pure Coding", desc: "Algorithmic challenges that test your core logic." },
            { icon: <Trophy />, title: "Huge Prizes", desc: "Win rewards for your technical excellence." },
            { icon: <Cpu />, title: "Tech Vibe", desc: "Immerse yourself in a futuristic hacker environment." },
            { icon: <Zap />, title: "Fast Paced", desc: "Race against time to solve complex problems." },
          ].map((item, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="glass-card p-10 group"
            >
              <div className="w-14 h-14 bg-hacker-cyan/10 rounded-2xl flex items-center justify-center text-hacker-cyan mb-8 border border-hacker-cyan/20 group-hover:bg-hacker-cyan group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(0,194,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-hacker-cyan transition-colors font-orbitron uppercase tracking-wider">{item.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm font-space">{item.desc}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
