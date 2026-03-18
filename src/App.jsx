import React, { useEffect } from 'react';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventStructure from './components/EventStructure';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScrollReveal);
    handleScrollReveal(); // Initial check

    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-hacker-green selection:text-black">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <div className="scroll-reveal">
          <About />
        </div>
        <div className="scroll-reveal">
          <EventStructure />
        </div>
        <div className="scroll-reveal">
          <Timeline />
        </div>
        <div className="scroll-reveal">
          <Prizes />
        </div>
        <div className="scroll-reveal">
          <FAQ />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
