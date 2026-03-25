import React, { useEffect, useRef } from 'react';

const Particles = ({ mousePos }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

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

    // Create particles (increased by 20x -> 1000 particles)
    if (particles.current.length === 0) {
      for (let i = 0; i < 1000; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Size increased by 1.8x (original 1~3 -> now ~1.8~5.4)
          size: (Math.random() * 2 + 1) * 1.8,
          speedX: Math.random() * 1.5 - 0.75,
          speedY: Math.random() * 1.5 - 0.75,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.current.forEach((p, index) => {
        // Move towards mouse (magnetic effect)
        const dx = mousePos.x - p.x;
        const dy = mousePos.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Influence range
        if (distance < 250) {
          p.x += dx * 0.02;
          p.y += dy * 0.02;
        } else {
          p.x += p.speedX;
          p.y += p.speedY;
        }

        // Boundary check
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        // Distance based glow
        const glowFactor = Math.max(0, 1 - distance / 300);
        ctx.fillStyle = `rgba(0, 120, 212, ${p.opacity * (0.3 + glowFactor * 0.7)})`;
        ctx.fill();

        // Performance Check: Only draw lines for a subset or very close neighbors
        // With 1000 particles, we limit line drawing to prevent lag
        if (index % 10 === 0 && distance < 150) {
          particles.current.slice(index + 1, index + 20).forEach(p2 => {
            const dx2 = p.x - p2.x;
            const dy2 = p.y - p2.y;
            const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
            if (dist2 < 80) {
              ctx.beginPath();
              ctx.strokeStyle = `rgba(0, 120, 212, ${0.15 * (1 - dist2 / 80)})`;
              ctx.lineWidth = 0.5;
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
  }, [mousePos]);

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
