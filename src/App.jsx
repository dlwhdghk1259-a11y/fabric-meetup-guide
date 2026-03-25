import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Features from './components/Features';
import Guide from './components/Guide';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  const [view, setView] = useState('landing');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const navigateTo = (newView) => {
    if (view === newView) return;
    setIsTransitioning(true); // Fade out 시작
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      setView(newView);
      setIsTransitioning(false); // Fade in 시작
    }, 300); // 0.3초 대기
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
          transformStyle: 'preserve-3d',
          transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)'
        }}
      >
        <div className="mesh-background" />
      </div>
      
      <div 
        className="mouse-glow" 
        style={{ 
          left: `${mousePos.x}px`, 
          top: `${mousePos.y}px`,
          background: 'radial-gradient(circle, rgba(0, 120, 212, 0.25) 0%, transparent 70%)'
        }} 
      />
      
      {view !== 'landing' && <Navbar onHome={() => navigateTo('landing')} onNavigate={navigateTo} />}
      
      <main style={{ 
        opacity: isTransitioning ? 0 : 1, 
        transform: isTransitioning ? 'translateY(10px)' : 'translateY(0)',
        transition: 'all 0.3s ease-in-out' 
      }}>
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
