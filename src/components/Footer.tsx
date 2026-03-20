import React from 'react';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import logo from '../assets/hero.png';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 relative overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 items-start mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-hacker-cyan/10 border border-hacker-cyan/20">
              <img src={logo} alt="LOOP Logo" className="h-8 w-8 object-contain" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-white font-orbitron">
              GPL <span className="text-hacker-cyan text-glow-little">1.0</span>
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8 font-medium font-space">
            The flagship competitive programming league of Galgotias University, organized by Club LOOP.
          </p>
          <div className="flex gap-4">
            {[Github, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a 
                key={idx} 
                href="#" 
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/40 hover:text-hacker-cyan hover:border-hacker-cyan/40 hover:bg-hacker-cyan/5 transition-all duration-300 group"
              >
                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em] font-orbitron">Navigation</h4>
          <ul className="space-y-4 text-sm text-white/40 font-medium font-space">
            {['About', 'Structure', 'Timeline', 'Prizes', 'FAQ'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-hacker-cyan hover:translate-x-1 inline-block transition-all duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em] font-orbitron">Resources</h4>
          <ul className="space-y-4 text-sm text-white/40 font-medium font-space">
            {['Rules & Regulations', 'Platform Guide', 'Previous Problems', 'Sponsorships'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-hacker-cyan hover:translate-x-1 inline-block transition-all duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-bold mb-8 text-xs uppercase tracking-[0.2em] font-orbitron">Contact</h4>
          <ul className="space-y-6 text-sm text-white/40 font-medium font-space">
            <li className="flex items-center gap-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-hacker-cyan group-hover:bg-hacker-cyan/10 group-hover:border-hacker-cyan/30 transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <span className="group-hover:text-white transition-colors">loop.galgotias@gmail.com</span>
            </li>
            <li className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-hacker-cyan">
                <span className="text-xs">📍</span>
              </div>
              <span className="group-hover:text-white transition-colors leading-snug">Galgotias University,<br />Greater Noida</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 font-space">
        <p className="text-[10px] text-white/20 font-mono tracking-widest uppercase">
          &copy; 2026 GPL 1.0. ALL RIGHTS RESERVED. DESIGNED BY <span className="text-hacker-cyan font-bold">CLUB LOOP</span>.
        </p>
        <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.2em] font-mono">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
