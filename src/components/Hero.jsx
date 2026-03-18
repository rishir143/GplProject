import React from "react";
import { motion as Motion } from "framer-motion";
import { Calendar, Users, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <Motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-hacker-green/10 border border-hacker-green/20 text-hacker-green text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hacker-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-hacker-green"></span>
            </span>
            Registrations Open (1 Apr - 3 Apr)
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-4 leading-tight">
            GPL <span className="text-hacker-green text-glow">1.0</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-2">
            Galgotias Programming League
          </p>
          <p className="text-lg md:text-xl text-hacker-cyan font-mono mb-8">
            "Compete. Code. Conquer."
          </p>

          <div className="flex flex-wrap gap-6 mb-10 text-white/80">
            <div className="flex items-center gap-2">
              <Calendar className="text-hacker-green w-5 h-5" />
              <span>5 April 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="text-hacker-green w-5 h-5" />
              <span>~300 Participants</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-hacker-green w-5 h-5" />
              <span>Galgotias Campus</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://unstop.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-hacker-green text-black font-bold text-lg rounded-xl btn-glow flex items-center justify-center gap-2 hover:bg-hacker-green/90 transition-all"
            >
              Register Now
            </a>
            <p className="text-xs text-white/50 mt-4 sm:mt-0 sm:flex sm:items-center">
              Limited seats • First come first serve
            </p>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full aspect-square glass-card p-8 border-hacker-green/20 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-hacker-green/10 via-transparent to-hacker-cyan/10 group-hover:opacity-50 transition-opacity" />
            <div className="relative h-full w-full flex flex-col justify-center items-center text-center space-y-6">
              <div className="w-24 h-24 border-2 border-hacker-green rounded-full flex items-center justify-center animate-pulse">
                <span className="text-4xl font-bold">1.0</span>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-mono text-hacker-green">
                  SYSTEM STATUS: READY
                </p>
                <p className="text-sm font-mono text-hacker-cyan">
                  NETWORK: CONNECTED
                </p>
                <p className="text-sm font-mono text-white/40">
                  GPL_v1.0_INITIALIZED...
                </p>
              </div>
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-hacker-green/50 to-transparent" />
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-2xl font-bold text-hacker-green">10K+</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/50">
                    Lines of Code
                  </p>
                </div>
                <div className="text-center p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-2xl font-bold text-hacker-cyan">50+</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/50">
                    Problems
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative glows */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-hacker-green/20 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-hacker-cyan/20 rounded-full blur-[100px] animate-pulse-slow" />
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
