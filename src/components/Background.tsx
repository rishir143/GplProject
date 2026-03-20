import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const Background: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const loadVanta = () => {
      if (!vantaEffect && window.VANTA && vantaRef.current) {
        setVantaEffect(
          window.VANTA.NET({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0x00c2ff,
            backgroundColor: 0x08141f,
            points: 12.0,
            maxDistance: 22.0,
            spacing: 16.0,
            showDots: true
          })
        );
      }
    };

    if (!window.VANTA) {
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.onload = () => {
        const vantaScript = document.createElement('script');
        vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.net.min.js';
        vantaScript.onload = loadVanta;
        document.head.appendChild(vantaScript);
      };
      document.head.appendChild(threeScript);
    } else {
      loadVanta();
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="fixed inset-0 -z-10 bg-[#08141f]">
      <div ref={vantaRef} className="absolute inset-0 opacity-40" />
      
      {/* Dynamic Mouse-Following Glow */}
      <div 
        className="absolute w-[800px] h-[800px] bg-hacker-cyan/10 blur-[150px] rounded-full pointer-events-none transition-all duration-700 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Static Depth Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d2434] via-transparent to-[#08141f] opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,20,31,0.8)_100%)] pointer-events-none" />
      
      {/* Semi-transparent dark overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
    </div>
  );
};

export default Background;
