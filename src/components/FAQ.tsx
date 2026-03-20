import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare, ArrowRight } from "lucide-react";

const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqCategories = [
    {
      id: 'general',
      name: 'General',
      questions: [
        { q: 'Who can participate in GPL 1.0?', a: 'GPL 1.0 is open to all students of Galgotias University, regardless of branch or year.' },
        { q: 'Is prior competitive programming experience required?', a: 'No, beginners are welcome. However, basic programming knowledge will be helpful.' },
        { q: 'Is the contest individual or team-based?', a: 'The competition is strictly individual.' }
      ]
    },
    {
      id: 'technical',
      name: 'Technical',
      questions: [
        { q: 'What programming languages are supported?', a: 'Participants can use C, C++, Java, Python, JavaScript, and Go.' },
        { q: 'Which platform will be used for the contest?', a: 'The contest will be conducted on platforms like Codeforces or HackerEarth.' },
        { q: 'How will the contest be evaluated?', a: 'Ranking will be based on: Number of problems solved, Penalty time, and Submission time.' },
        { q: 'What is the penalty system?', a: 'Each incorrect submission before a correct one adds a 20-minute penalty.' }
      ]
    },
    {
      id: 'rounds',
      name: 'Rounds & Format',
      questions: [
        { q: 'How many rounds are there?', a: 'There are two rounds: Qualifier Round and Final Round.' },
        { q: 'How do I qualify for the final round?', a: 'Top 30–50 participants from the qualifier will advance to the final.' },
        { q: 'What is the difficulty level of the contest?', a: 'Problems will range from Easy to Hard, designed for all skill levels.' }
      ]
    },
    {
      id: 'registration',
      name: 'Registration',
      questions: [
        { q: 'What is the registration fee?', a: 'The participation fee is ₹200.' },
        { q: 'How can I register?', a: 'You can register through the official Unstop platform via the registration link.' },
        { q: 'What details are required during registration?', a: 'You will need to provide: Name, Student ID, Branch & Year, Phone number, and Programming handle.' }
      ]
    },
    {
      id: 'prizes',
      name: 'Prizes & Rewards',
      questions: [
        { q: 'What are the prizes?', a: 'Top performers will receive: Cash prizes, Certificates, Trophies, and Special recognition.' },
        { q: 'Are there any additional benefits?', a: 'Yes, top participants may receive: Tech merchandise, Internship opportunities, and Recognition within the coding community.' }
      ]
    },
    {
      id: 'rules',
      name: 'Rules & Fair Play',
      questions: [
        { q: 'Is plagiarism allowed?', a: 'No. Strict anti-cheating measures are in place. Any form of plagiarism will lead to disqualification.' },
        { q: 'Can I use external resources during the contest?', a: 'Participants must follow platform rules. Any unfair practices will result in penalties or disqualification.' }
      ]
    },
    {
      id: 'logistics',
      name: 'Logistics',
      questions: [
        { q: 'Where will the final round be conducted?', a: 'The final round will be held at Galgotias University campus.' },
        { q: 'Do I need to bring my own laptop?', a: 'Yes, participants are advised to bring their own laptops unless specified otherwise.' }
      ]
    },
    {
      id: 'support',
      name: 'Support',
      questions: [
        { q: 'Who can I contact for queries?', a: 'You can reach out to the organizing team via the official club contact channels or email.' }
      ]
    }
  ];

  const currentCategory = faqCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="faq" className="py-16 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-2 md:p-3 rounded-2xl bg-hacker-cyan/10 border border-hacker-cyan/20 mb-4 md:mb-6 backdrop-blur-md"
          >
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-hacker-cyan" />
          </Motion.div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.1em] text-white font-orbitron text-pop">
            Support <span className="text-heading-premium">Center</span>
          </h2>
          <p className="text-white/40 mt-3 md:mt-4 text-base md:text-lg max-w-2xl font-space">
            Everything you need to know about the Galgotias Programming League (GPL 1.0).
          </p>
        </div>

        {/* Category & FAQ Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-7xl mx-auto">
          {/* Categories Sidebar */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-3 lg:gap-2">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setOpenIdx(null);
                }}
                className={`px-4 py-3 md:px-6 md:py-4 rounded-2xl text-center lg:text-left transition-all duration-300 font-orbitron text-[10px] md:text-xs font-bold uppercase tracking-widest border ${
                  activeCategory === cat.id
                    ? 'bg-hacker-cyan border-hacker-cyan text-black shadow-[0_0_25px_rgba(0,194,255,0.3)] scale-105 z-10'
                    : 'bg-white/5 border-white/10 text-white/40 hover:border-hacker-cyan/30 hover:bg-hacker-cyan/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          
          {/* FAQ Accordions */}
          <div className="lg:col-span-9 space-y-4 min-h-[500px]">
            <AnimatePresence mode="wait">
              <Motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-4"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-black text-white font-orbitron uppercase tracking-widest mb-2">
                    {currentCategory?.name}
                  </h3>
                  <div className="h-1 w-20 bg-hacker-cyan rounded-full" />
                </div>

                {currentCategory?.questions.map((faq, idx) => (
                  <Motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`glass-card overflow-hidden group transition-all duration-500 ${
                      openIdx === idx 
                        ? 'border-hacker-cyan/50 bg-hacker-cyan/5 shadow-[0_0_30px_rgba(0,194,255,0.1)]' 
                        : 'hover:border-hacker-cyan/30'
                    }`}
                  >
                    <button
                      className="w-full p-6 md:p-8 flex justify-between items-center gap-4 md:gap-6 text-left"
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    >
                      <h3 className={`text-base md:text-lg font-bold transition-colors font-orbitron uppercase tracking-wider ${
                        openIdx === idx ? 'text-hacker-cyan' : 'text-white/90 group-hover:text-hacker-cyan'
                      }`}>
                        {faq.q}
                      </h3>
                      <div className={`p-1.5 md:p-2 rounded-full transition-all duration-500 ${
                        openIdx === idx 
                          ? 'bg-hacker-cyan text-black rotate-180 shadow-[0_0_15px_rgba(0,194,255,0.5)]' 
                          : 'bg-white/5 text-hacker-cyan group-hover:bg-hacker-cyan/20'
                      }`}>
                        <ChevronDown className="w-4 h-4 md:w-5 md:h-5" />
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
                          <div className="px-6 pb-6 md:px-8 md:pb-8 text-white/70 text-base md:text-lg leading-relaxed border-t border-white/5 pt-4 md:pt-6 font-space">
                            {faq.a}
                          </div>
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </Motion.div>
                ))}
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <Motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 flex flex-col items-center"
        >
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl text-center max-w-2xl w-full group hover:border-hacker-cyan/30 transition-all duration-500">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 font-orbitron">Still have questions?</h3>
            <p className="text-white/40 mb-8 font-space">Our team is here to help you with any queries regarding GPL 1.0.</p>
            <a 
              href="mailto:loop.galgotias@gmail.com"
              className="inline-flex items-center gap-2 text-hacker-cyan font-bold font-orbitron uppercase tracking-widest group-hover:gap-4 transition-all"
            >
              Contact us <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default FAQ;
