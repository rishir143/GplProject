import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Code2, Trophy, Cpu, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            About <span className="text-hacker-green">GPL 1.0</span>
          </Motion.h2>
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/70 leading-relaxed mb-16"
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
              className="glass-card p-8 group hover:border-hacker-green/40 transition-all"
            >
              <div className="w-12 h-12 bg-hacker-green/10 rounded-lg flex items-center justify-center text-hacker-green mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
              <p className="text-sm text-white/50">{item.desc}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
