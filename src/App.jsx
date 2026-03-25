import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Features from './components/Features';
import Guide from './components/Guide';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Particles from './components/Particles';

// Planets Assets
import planet1 from './assets/planet1.png';
import planet2 from './assets/planet2.png';
import planet3 from './assets/planet3.png';

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

  // Rotation logic for 360-degree feel
  const rotY = (mousePos.x / window.innerWidth - 0.5) * 20; // -10 to 10 deg
  const rotX = (mousePos.y / window.innerHeight - 0.5) * -20; // 10 to -10 deg

  return (
    <div className="app-container unselectable">
      {/* 360-Degree Space Scene */}
      <div className="space-scene" style={{ transform: `rotateY(${rotY}deg) rotateX(${rotX}deg)` }}>
        <div 
          className="mesh-background" 
          style={{ 
            transform: `translate(${mousePos.x * -0.05}px, ${mousePos.y * -0.05}px)` 
          }} 
        />
        
        {/* Planets with different parallax depth */}
        <img 
          src={planet1} 
          className="planet unselectable" 
          alt="planet1"
          style={{ 
            width: '300px', 
            top: '15%', 
            left: '10%', 
            transform: `translate(${mousePos.x * 0.08}px, ${mousePos.y * 0.08}px)`,
            opacity: 0.8
          }} 
        />
        <img 
          src={planet2} 
          className="planet unselectable" 
          alt="planet2"
          style={{ 
            width: '450px', 
            top: '50%', 
            right: '5%', 
            transform: `translate(${mousePos.x * -0.06}px, ${mousePos.y * -0.06}px)`,
            opacity: 0.6
          }} 
        />
        <img 
          src={planet3} 
          className="planet unselectable" 
          alt="planet3"
          style={{ 
            width: '200px', 
            bottom: '10%', 
            left: '30%', 
            transform: `translate(${mousePos.x * 0.1}px, ${mousePos.y * 0.1}px)`,
            opacity: 0.7
          }} 
        />
      </div>

      {view === 'landing' && <Particles mousePos={mousePos} />}
      
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
