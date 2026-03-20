import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

const Prizes: React.FC = () => {
  const prizePool = [
    {
      place: '2nd Place',
      amount: '₹ 15,000',
      icon: <Award className="w-12 h-12" />,
      color: 'border-white/10 shadow-white/5',
      delay: 0.1
    },
    {
      place: '1st Place',
      amount: '₹ 25,000',
      icon: <Trophy className="w-16 h-16" />,
      color: 'border-hacker-cyan/30 shadow-hacker-cyan/10 scale-110 z-10',
      delay: 0
    },
    {
      place: '3rd Place',
      amount: '₹ 10,000',
      icon: <Medal className="w-12 h-12" />,
      color: 'border-white/10 shadow-white/5',
      delay: 0.2
    }
  ];

  return (
    <section id="prizes" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <Motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tighter"
          >
            Prize <span className="text-hacker-cyan text-glow">Pool</span>
          </Motion.h2>
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto text-lg"
          >
            Total rewards exceeding ₹ 50,000+ for the top performers of GPL 1.0.
          </Motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {prizePool.map((prize, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prize.delay, duration: 0.6 }}
              className={`glass-card p-10 text-center flex flex-col items-center border ${prize.color} group`}
            >
              <div className="mb-8 p-4 rounded-2xl bg-hacker-cyan/10 text-hacker-cyan group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(0,194,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]">
                {prize.icon}
              </div>
              <h3 className="text-xl font-bold text-white/70 mb-2 uppercase tracking-widest">{prize.place}</h3>
              <p className="text-4xl font-black text-white text-glow mb-8">{prize.amount}</p>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-hacker-cyan/20 to-transparent mb-8" />
              <ul className="text-sm text-white/40 space-y-4 font-mono text-left w-full">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-hacker-cyan shadow-[0_0_8px_rgba(0,194,255,0.8)]" />
                  Exclusive SWAGs
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-hacker-cyan shadow-[0_0_8px_rgba(0,194,255,0.8)]" />
                  Merit Certificates
                </li>
                <li className="flex items-center gap-3">
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
