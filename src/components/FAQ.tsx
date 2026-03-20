import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: "Who can participate in GPL 1.0?",
      a: "GPL 1.0 is open to all college students. Whether you're a beginner or an expert, we have challenges for everyone."
    },
    {
      q: "What programming languages are supported?",
      a: "All major languages supported by Codeforces/HackerRank, including C++, Java, Python, and JavaScript."
    },
    {
      q: "Is it a solo or team-based competition?",
      a: "GPL 1.0 is a solo participant competition. It's an individual battle for the top spot."
    },
    {
      q: "What is the platform for the online round?",
      a: "The online qualifier will be hosted on a standard competitive programming platform (e.g., Codeforces/HackerRank). Links will be shared before the event."
    },
    {
      q: "Will there be registration fees?",
      a: "Registration is completely free for the online qualifier. For the grand finale, there may be a nominal entry fee."
    },
    {
      q: "Are there rules against plagiarism?",
      a: "Absolutely. We use advanced plagiarism detection tools. Any form of cheating will result in immediate disqualification."
    }
  ];

  return (
    <section id="faq" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="flex flex-col items-center text-center mb-20">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 rounded-2xl bg-hacker-cyan/10 border border-hacker-cyan/20 mb-6 backdrop-blur-md"
          >
            <MessageSquare className="w-6 h-6 text-hacker-cyan" />
          </Motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-[0.1em] text-white font-orbitron text-pop">
            Support <span className="text-heading-premium">Center</span>
          </h2>
          <p className="text-white/40 mt-4 text-lg max-w-2xl font-space">
            Everything you need to know about the Galgotias Programming League.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`glass-card overflow-hidden group transition-all duration-500 ${openIdx === idx ? 'border-hacker-cyan/50 bg-hacker-cyan/5 shadow-[0_0_30px_rgba(0,194,255,0.1)]' : ''}`}
            >
              <button
                className="w-full p-8 flex justify-between items-center gap-6 text-left"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <h3 className={`text-xl font-bold transition-colors font-orbitron uppercase tracking-wider ${openIdx === idx ? 'text-hacker-cyan' : 'text-white/90 group-hover:text-hacker-cyan'}`}>{faq.q}</h3>
                <div className={`p-2 rounded-full transition-all duration-500 ${openIdx === idx ? 'bg-hacker-cyan text-black rotate-180 shadow-[0_0_15px_rgba(0,194,255,0.5)]' : 'bg-white/5 text-hacker-cyan group-hover:bg-hacker-cyan/20'}`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              <AnimatePresence>
                {openIdx === idx && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="px-8 pb-8 text-white/70 text-lg leading-relaxed border-t border-white/5 pt-6 font-space">
                      {faq.a}
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
