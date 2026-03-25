import React, { useEffect, useRef } from 'react';

const Particles = ({ mousePos, view }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const isLanding = view === 'landing';

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    // Reinitialize particles if view changes significantly or first load
    const numParticles = isLanding ? 250 : 100; // More dense on landing
    
    // Clear and rebuild to allow dynamic counts gracefully
    particles.current = [];
    for (let i = 0; i < numParticles; i++) {
        particles.current.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 1,
            speedX: Math.random() * 0.5 - 0.25,
            speedY: Math.random() * 0.5 - 0.25,
            opacity: Math.random() * 0.5 + 0.1,
            // Assign a color theme (Fabric colors)
            colorIndex: Math.floor(Math.random() * 3) // 0: Blue, 1: Purple, 2: Orange/Teal
        });
    }

    const colors = [
      '0, 120, 212', // Primary Blue
      '160, 17, 255', // Purple
      '0, 130, 114' // Teal
    ];

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const mouseX = mousePos.x;
      const mouseY = mousePos.y;

      particles.current.forEach((p, index) => {
        // Star drift
        p.x += p.speedX;
        p.y += p.speedY;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // INTERACTIVE: Connect to mouse and pull slightly
        const interactionRadius = isLanding ? 300 : 150;
        
        if (distance < interactionRadius) {
          const force = (interactionRadius - distance) / interactionRadius;
          if (isLanding) {
            // Magnetic pull only on landing
            p.x += dx * force * 0.05;
            p.y += dy * force * 0.05;
          }
          
          // Draw connecting line to mouse
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${colors[p.colorIndex]}, ${force * 0.4})`;
          ctx.lineWidth = force * 1.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
          
          // Boost opacity of the particle itself
          p.currentOpacity = Math.min(1, p.opacity + force * 0.8);
        } else {
          p.currentOpacity = p.opacity + Math.sin(Date.now() * 0.002 + index) * 0.2;
        }

        // Boundary wrap
        if (p.x < -10) { p.x = canvas.width + 10; p.speedX *= -1; }
        if (p.x > canvas.width + 10) { p.x = -10; p.speedX *= -1; }
        if (p.y < -10) { p.y = canvas.height + 10; p.speedY *= -1; }
        if (p.y > canvas.height + 10) { p.y = -10; p.speedY *= -1; }

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0, p.currentOpacity)})`;
        ctx.fill();

        // Connect nearby particles to form a constellation network
        if (isLanding || index % 2 === 0) { // Limit connections on inner pages for cleaner look
            particles.current.slice(index + 1, index + 8).forEach(p2 => {
              const dx2 = p.x - p2.x;
              const dy2 = p.y - p2.y;
              const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
              const linkDist = isLanding ? 120 : 80;
              
              if (dist2 < linkDist) {
                // If both are near the mouse, the link glows brighter
                const distToMouseMid = Math.sqrt(Math.pow(((p.x + p2.x)/2) - mouseX, 2) + Math.pow(((p.y + p2.y)/2) - mouseY, 2));
                const mouseGlow = distToMouseMid < interactionRadius ? ((interactionRadius - distToMouseMid) / interactionRadius) : 0;
                
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${colors[p.colorIndex]}, ${0.1 * (1 - dist2 / linkDist) + mouseGlow * 0.3})`;
                ctx.lineWidth = 0.5 + mouseGlow;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            });
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [mousePos, isLanding]);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        pointerEvents: 'none', 
        zIndex: -1 
      }} 
    />
  );
};

export default Particles;
