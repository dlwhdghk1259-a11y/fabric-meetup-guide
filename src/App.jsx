import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Features from './components/Features';
import Guide from './components/Guide';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Particles from './components/Particles';

function App() {
  const [view, setView] = useState('landing');
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigateTo = (newView) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView(newView);
  };

  // Smooth 3D tilt
  const rotY = (mousePos.x / window.innerWidth - 0.5) * 15; // -7.5 to 7.5 deg
  const rotX = (mousePos.y / window.innerHeight - 0.5) * -15; // 7.5 to -7.5 deg

  return (
    <div className="app-container unselectable">
      {/* Dynamic CSS Mesh Background */}
      <div 
        className="space-scene" 
        style={{ 
          transform: `rotateY(${rotY}deg) rotateX(${rotX}deg) scale(1.05)`,
          transformStyle: 'preserve-3d' 
        }}
      >
        <div className="mesh-background" />
      </div>

      {/* Enhanced Particle System (Active globally now for maximum WOW) */}
      <Particles mousePos={mousePos} view={view} />
      
      <div 
        className="mouse-glow" 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(0, 120, 212, 0.25) 0%, transparent 70%)'
        }} 
      />
      
      {view !== 'landing' && <Navbar onHome={() => navigateTo('landing')} onNavigate={navigateTo} />}
      
      <main>
        {view === 'landing' && <Hero onStart={() => navigateTo('menu')} />}
        {view === 'menu' && <Menu onNavigate={navigateTo} />}
        {view === 'concept' && <Concept onBack={() => navigateTo('menu')} />}
        {view === 'features' && <Features onBack={() => navigateTo('menu')} />}
        {view === 'guide' && <Guide onBack={() => navigateTo('menu')} />}
      </main>
      
      {view !== 'landing' && <Footer />}
    </div>
  );
}

export default App;
