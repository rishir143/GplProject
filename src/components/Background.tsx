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

  useEffect(() => {
    const loadVanta = () => {
      if (!vantaEffect && window.VANTA && vantaRef.current) {
        // Using NET effect which feels like a mix of particles and connectivity
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
            color: 0x00c2ff, // Neon cyan
            backgroundColor: 0x08141f, // Deep navy
            points: 10.0,
            maxDistance: 20.0,
            spacing: 15.0,
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
        // Loading NET effect as it matches the premium tech feel better
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
    <div className="fixed inset-0 -z-10 bg-deep-gradient">
      <div ref={vantaRef} className="absolute inset-0" />
      {/* Semi-transparent dark overlay with slight backdrop blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] pointer-events-none" />
      {/* Bottom gradient for smooth transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hacker-dark pointer-events-none" />
    </div>
  );
};

export default Background;
