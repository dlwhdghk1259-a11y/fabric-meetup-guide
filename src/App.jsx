import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Features from './components/Features';
import Guide from './components/Guide';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Basic Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-up');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      <div className="mesh-background" />
      <Navbar />
      <Hero />
      <main>
        <Concept />
        <Features />
        <Guide />
      </main>
      <Footer />
    </div>
  );
}

export default App;
