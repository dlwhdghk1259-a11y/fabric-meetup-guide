import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Features from './components/Features';
import Guide from './components/Guide';
import Footer from './components/Footer';
import Menu from './components/Menu';

function App() {
  const [view, setView] = useState('landing'); // 'landing', 'menu', 'concept', 'features', 'guide'

  useEffect(() => {
    // Basic Intersection Observer for scroll animations (if needed in sections)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [view]);

  // Function to change view
  const navigateTo = (newView) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setView(newView);
  };

  return (
    <div className="app-container">
      <div className="mesh-background" />
      
      {/* Navbar only shows when not on landing */}
      {view !== 'landing' && <Navbar onHome={() => navigateTo('menu')} onNavigate={navigateTo} />}
      
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
