import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Linkedin, Instagram, Mail, MessageSquare } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  const socials = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageSquare, href: '#', label: 'Discord' },
    { icon: Mail, href: 'mailto:loop.galgotias@gmail.com', label: 'Email' },
  ];

  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <div className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-[100] hidden md:block">
        <Motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-4 md:gap-6 p-3 md:p-4 rounded-full bg-black/20 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,194,255,0.05)] hover:border-hacker-cyan/30 hover:bg-black/30 transition-all duration-500 group"
        >
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-2 text-white/40 hover:text-hacker-cyan transition-all duration-300 hover:scale-125 group/icon"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4 md:w-5 md:h-5 filter group-hover/icon:drop-shadow-[0_0_8px_rgba(0,194,255,0.8)]" />
              <div className="absolute left-full ml-4 px-2 py-1 rounded bg-hacker-cyan text-black text-[10px] font-black uppercase tracking-widest opacity-0 group-hover/icon:opacity-100 translate-x-[-10px] group-hover/icon:translate-x-0 transition-all pointer-events-none whitespace-nowrap hidden md:block">
                {social.label}
              </div>
            </a>
          ))}
        </Motion.div>
      </div>

      {/* Right Sidebar - Vertical Email (Matching reference image) */}
      <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-[100] hidden md:block">
        <Motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 md:gap-8 py-4 md:py-8 px-1 md:px-2"
        >
          <div className="h-12 md:h-20 w-[1px] bg-gradient-to-b from-transparent via-hacker-cyan/30 to-hacker-cyan/30" />
          <a 
            href="mailto:loop.galgotias@gmail.com" 
            className="vertical-text text-[8px] md:text-[10px] font-black tracking-[0.4em] uppercase text-white/30 hover:text-hacker-cyan transition-all duration-300 hover:translate-y-[-4px] font-orbitron"
            style={{ writingMode: 'vertical-rl' }}
          >
            loop.galgotias@gmail.com
          </a>
          <div className="h-12 md:h-20 w-[1px] bg-gradient-to-t from-transparent via-hacker-cyan/30 to-hacker-cyan/30" />
        </Motion.div>
      </div>
    </>
  );
};

export default SocialSidebar;
