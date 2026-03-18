import React from 'react';
import { motion as Motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      date: 'April 1 - 3',
      title: 'Registration Period',
      desc: 'Sign up on Unstop to secure your spot in the league. Limited entries available.',
    },
    {
      date: 'April 4',
      title: 'Mock Contest',
      desc: 'Get familiar with the platform and testing environment. Not scored.',
    },
    {
      date: 'April 5 | 10:00 AM',
      title: 'GPL 1.0 Qualifier',
      desc: 'The online battle begins. 2 hours of algorithmic challenges.',
    },
    {
      date: 'April 5 | 03:00 PM',
      title: 'Finalists Announcement',
      desc: 'The top 50 participants who qualify for the grand finale are announced.',
    },
    {
      date: 'April 10',
      title: 'Grand Finale & Ceremony',
      desc: 'The offline showdown at Galgotias Campus, followed by the prize ceremony.',
    },
  ];

  return (
    <section id="timeline" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">Event <span className="text-hacker-green">Timeline</span></h2>
        
        <div className="max-w-4xl mx-auto">
          {events.map((event, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex items-center mb-16 last:mb-0 group"
            >
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-hacker-green rounded-full shadow-[0_0_15px_#00FF41] z-10 group-hover:scale-125 transition-transform" />
              {idx < events.length - 1 && (
                <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-4 w-[2px] h-[calc(100%+64px)] bg-gradient-to-b from-hacker-green/50 to-transparent" />
              )}
              
              <div className={`ml-10 md:ml-0 w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                <div className="glass-card p-6 border-white/5 hover:border-hacker-green/20 transition-all">
                  <span className="text-hacker-green font-mono text-sm mb-2 block">{event.date}</span>
                  <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{event.desc}</p>
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
