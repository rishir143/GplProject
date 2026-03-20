import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

const Prizes: React.FC = () => {
  const prizePool = [
    {
      place: '1st Place',
      amount: '₹ 25,000',
      icon: Trophy,
      color: 'border-hacker-cyan/30 shadow-hacker-cyan/10 md:scale-110 z-10',
      delay: 0,
      order: 'order-1 lg:order-2'
    },
    {
      place: '2nd Place',
      amount: '₹ 15,000',
      icon: Award,
      color: 'border-white/10 shadow-white/5',
      delay: 0.1,
      order: 'order-2 lg:order-1'
    },
    {
      place: '3rd Place',
      amount: '₹ 10,000',
      icon: Medal,
      color: 'border-white/10 shadow-white/5',
      delay: 0.2,
      order: 'order-3 lg:order-3'
    }
  ];

  return (
    <section id="prizes" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-2 md:p-3 rounded-2xl bg-hacker-cyan/10 border border-hacker-cyan/20 mb-4 md:mb-6 backdrop-blur-md"
          >
            <Trophy className="w-5 h-5 md:w-6 md:h-6 text-hacker-cyan" />
          </Motion.div>
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 tracking-[0.1em] font-orbitron text-pop"
          >
            Prize <span className="text-heading-premium">Pool</span>
          </Motion.h2>
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl text-white/40 font-space"
          >
            Total rewards exceeding ₹ 50,000+ for the top performers of GPL 1.0.
          </Motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-center lg:items-end">
          {prizePool.map((prize, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prize.delay, duration: 0.6 }}
              className={`glass-card p-6 md:p-10 text-center flex flex-col items-center border ${prize.color} group ${prize.order}`}
            >
              <div className="mb-5 md:mb-8 p-3 md:p-4 rounded-xl md:rounded-2xl bg-hacker-cyan/10 text-hacker-cyan group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,194,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,194,255,0.4)]">
                <prize.icon className="w-6 h-6 md:w-12 md:h-12 filter drop-shadow-[0_0_8px_rgba(0,194,255,0.6)]" />
              </div>
              <h3 className="text-base md:text-xl font-bold text-white/70 mb-1 md:mb-2 uppercase tracking-[0.2em] font-orbitron">{prize.place}</h3>
              <p className="text-2xl md:text-4xl font-black text-white text-glow mb-5 md:mb-8 font-orbitron">{prize.amount}</p>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-hacker-cyan/20 to-transparent mb-5 md:mb-8" />
              <ul className="text-[10px] md:text-sm text-white/40 space-y-2 md:space-y-4 font-space text-left w-full">
                <li className="flex items-center gap-3 uppercase tracking-widest font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-hacker-cyan shadow-[0_0_8px_rgba(0,194,255,0.8)]" />
                  Exclusive SWAGs
                </li>
                <li className="flex items-center gap-3 uppercase tracking-widest font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-hacker-cyan shadow-[0_0_8px_rgba(0,194,255,0.8)]" />
                  Merit Certificates
                </li>
                <li className="flex items-center gap-3 uppercase tracking-widest font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-hacker-cyan shadow-[0_0_8px_rgba(0,194,255,0.8)]" />
                  Internship Opportunities
                </li>
              </ul>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
