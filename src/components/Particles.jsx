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

    // Create particles (800 nodes)
    if (particles.current.length === 0) {
      for (let i = 0; i < 800; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.6 - 0.3,
          speedY: Math.random() * 0.6 - 0.3,
          opacity: Math.random() * 0.5 + 0.3
        });
      }
    }

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
        
        // INTERACTIVE: Gravitize toward cursor
        if (distance < 400) {
          const force = (400 - distance) / 400;
          // Soft pull toward cursor
          p.x += dx * force * 0.04;
          p.y += dy * force * 0.04;
        }

        // Boundary wrap
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Glowing star logic (with mouse proximity glow)
        const proximityGlow = Math.max(0, 1 - distance / 200);
        const flicker = Math.sin(Date.now() * 0.005 + index) * 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.min(1, p.opacity + flicker + proximityGlow)})`;
        ctx.fill();

        // Subtle connections to cursor (if very close)
        if (index % 12 === 0 && distance < 180) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 120, 212, ${0.2 * (1 - distance / 180)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseX, mouseY);
          ctx.stroke();
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
        zIndex: 1 // Slightly higher to be over the background but under UI
      }} 
    />
  );
};

export default Particles;
