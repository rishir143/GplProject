import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);

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
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Frequently Asked <span className="text-hacker-cyan text-glow">Questions</span></h2>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card overflow-hidden border-white/5 hover:border-hacker-cyan/20 transition-all cursor-pointer"
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <div className="p-6 flex justify-between items-center gap-4">
                <h3 className="text-lg font-bold text-white/90">{faq.q}</h3>
                <div className="text-hacker-cyan">
                  {openIdx === idx ? <ChevronUp /> : <ChevronDown />}
                </div>
              </div>
              <AnimatePresence>
                {openIdx === idx && (
                  <Motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-white/50 text-sm leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
