import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';

const Prizes = () => {
  const prizePool = [
    {
      place: '2nd Place',
      amount: '₹ 15,000',
      icon: <Award className="w-12 h-12 text-gray-400" />,
      color: 'border-gray-400/20 shadow-gray-400/5',
      delay: 0.1
    },
    {
      place: '1st Place',
      amount: '₹ 25,000',
      icon: <Trophy className="w-16 h-16 text-yellow-400" />,
      color: 'border-yellow-400/30 shadow-yellow-400/10 scale-110',
      delay: 0
    },
    {
      place: '3rd Place',
      amount: '₹ 10,000',
      icon: <Medal className="w-12 h-12 text-orange-600" />,
      color: 'border-orange-600/20 shadow-orange-600/5',
      delay: 0.2
    }
  ];

  return (
    <section id="prizes" className="py-24 relative overflow-hidden bg-hacker-dark-lighter/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Prize <span className="text-hacker-green">Pool</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Total rewards exceeding ₹ 50,000+ for the top performers of GPL 1.0.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto items-end">
          {prizePool.map((prize, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prize.delay, duration: 0.6 }}
              className={`glass-card p-10 text-center flex flex-col items-center border-2 ${prize.color} hover:border-hacker-green/40 transition-all group`}
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                {prize.icon}
              </div>
              <h3 className="text-xl font-bold text-white/70 mb-2 uppercase tracking-widest">{prize.place}</h3>
              <p className="text-4xl font-black text-white text-glow mb-6">{prize.amount}</p>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
              <ul className="text-sm text-white/50 space-y-2 font-mono">
                <li>+ Exclusive SWAGs</li>
                <li>+ Merit Certificates</li>
                <li>+ Internship Opportunities</li>
              </ul>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;
