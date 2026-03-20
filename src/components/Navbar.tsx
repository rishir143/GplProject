import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/hero.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Structure', href: '#structure' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/40 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 rounded-xl bg-hacker-cyan/10 border border-hacker-cyan/20 group-hover:bg-hacker-cyan/20 transition-all duration-300">
            <img src={logo} alt="LOOP Logo" className="h-8 w-8 object-contain" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white font-orbitron">
            GPL <span className="text-hacker-cyan text-glow-little">1.0</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-[0.2em] text-white/50 hover:text-hacker-cyan transition-all duration-300 relative group font-orbitron"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-hacker-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://unstop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-hacker-cyan text-black text-xs font-black uppercase tracking-[0.2em] rounded-xl btn-glow hover:scale-105 active:scale-95 transition-all font-orbitron"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-hacker-dark/95 backdrop-blur-xl border-b border-white/10 py-6 px-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/70 hover:text-hacker-cyan"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://unstop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3 bg-hacker-cyan text-black font-bold rounded-lg btn-glow"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
