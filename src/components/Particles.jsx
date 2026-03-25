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

    // Create particles (1000 nodes)
    if (particles.current.length === 0) {
      for (let i = 0; i < 800; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          // Reverted size (Small, star-like)
          size: Math.random() * 1.5 + 0.5,
          speedX: Math.random() * 0.4 - 0.2,
          speedY: Math.random() * 0.4 - 0.2,
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
        
        // Influence range (Particles move slightly away or towards)
        if (distance < 200) {
          const force = (200 - distance) / 200;
          p.x -= dx * force * 0.02;
          p.y -= dy * force * 0.02;
        }

        // Boundary wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Glowing star logic
        const flicker = Math.sin(Date.now() * 0.005 + index) * 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity + flicker})`;
        ctx.fill();

        // Very subtle connections in the distance
        if (index % 15 === 0 && distance < 150) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 120, 212, ${0.1 * (1 - distance / 150)})`;
          ctx.lineWidth = 0.3;
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
        zIndex: -1 
      }} 
    />
  );
};

export default Particles;
