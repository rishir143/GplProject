import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const Timeline: React.FC = () => {
  const events = [
    {
      date: '1 - 3 April',
      title: 'Registration Phase',
      desc: 'Sign up on Unstop and secure your spot for the qualifier round.'
    },
    {
      date: '5 April',
      title: 'The Qualifier',
      desc: 'Online algorithmic battle to select the top 50 finalists.'
    },
    {
      date: '7 April',
      title: 'Finalists Announcement',
      desc: 'Official list of selected participants for the grand finale.'
    },
    {
      date: '15 April',
      title: 'Grand Finale',
      desc: 'Offline showdown at Galgotias University campus.'
    }
  ];

  return (
    <section id="timeline" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-24 relative">
          <div className="section-glow" />
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-2xl bg-hacker-cyan/10 border border-hacker-cyan/20 mb-6 backdrop-blur-md"
          >
            <Clock className="w-6 h-6 text-hacker-cyan" />
          </Motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-[0.1em] text-white font-orbitron text-pop">
            Event <span className="text-heading-premium">Timeline</span>
          </h2>
          <p className="text-white/40 mt-4 text-lg max-w-2xl font-space">
            Mark your calendar. The road to victory is paved with these key milestones.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-hacker-cyan/50 via-hacker-cyan/10 to-transparent hidden md:block" />
          
          {events.map((event, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`relative flex items-center mb-20 last:mb-0 group`}
            >
              {/* Dot on the timeline */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-hacker-cyan rounded-full shadow-[0_0_15px_#00c2ff] z-10 group-hover:scale-150 transition-transform duration-500 animate-pulse" />
              
              <div className={`ml-10 md:ml-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:ml-auto'}`}>
                <div className="glass-card p-10 group-hover:border-hacker-cyan/50 transition-all duration-500">
                  <span className="text-hacker-cyan font-orbitron text-sm font-bold uppercase tracking-[0.3em] mb-4 block brightness-125">{event.date}</span>
                  <h3 className="text-2xl font-black mb-4 text-white group-hover:text-hacker-cyan transition-colors font-orbitron uppercase tracking-wider text-pop">{event.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed font-space group-hover:text-white/70 transition-colors">{event.desc}</p>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
