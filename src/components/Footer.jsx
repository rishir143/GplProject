import React from 'react';
import { Github, Twitter, Linkedin, Mail, Instagram } from 'lucide-react';
import logo from '../assets/hero.png';

const Footer = () => {
  return (
    <footer className="py-24 relative overflow-hidden bg-hacker-dark-lighter border-t border-white/5">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 items-start mb-16">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img src={logo} alt="LOOP Logo" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-bold tracking-tighter text-white">
              GPL <span className="text-hacker-green">1.0</span>
            </span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-8">
            The flagship competitive programming league of Galgotias University, organized by Club LOOP.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-hacker-green hover:border-hacker-green/40 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-hacker-cyan hover:border-hacker-cyan/40 transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-hacker-green hover:border-hacker-green/40 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-hacker-cyan hover:border-hacker-cyan/40 transition-all">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#about" className="hover:text-hacker-green transition-colors">About</a></li>
            <li><a href="#structure" className="hover:text-hacker-green transition-colors">Structure</a></li>
            <li><a href="#timeline" className="hover:text-hacker-green transition-colors">Timeline</a></li>
            <li><a href="#prizes" className="hover:text-hacker-green transition-colors">Prizes</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Resources</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li><a href="#" className="hover:text-hacker-cyan transition-colors">Rules & Regulations</a></li>
            <li><a href="#" className="hover:text-hacker-cyan transition-colors">Platform Guide</a></li>
            <li><a href="#" className="hover:text-hacker-cyan transition-colors">Previous Problems</a></li>
            <li><a href="#" className="hover:text-hacker-cyan transition-colors">Sponsorships</a></li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
          <ul className="space-y-4 text-sm text-white/40">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-hacker-green" />
              <span>loop.galgotias@gmail.com</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-4 h-4 flex items-center justify-center text-hacker-cyan">📍</span>
              <span>Galgotias University, Greater Noida</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs text-white/20 font-mono">
          &copy; 2026 GPL 1.0. ALL RIGHTS RESERVED. DESIGNED BY <span className="text-hacker-green">CLUB LOOP</span>.
        </p>
        <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-widest font-mono">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
