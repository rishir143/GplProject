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

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen selection:bg-hacker-cyan selection:text-black bg-transparent overflow-x-hidden">
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <EventStructure />
        <Timeline />
        <Prizes />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
