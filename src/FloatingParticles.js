import React, { useEffect, useState } from 'react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 150; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.3,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();

    const animateParticles = () => {
      setParticles(prev =>
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.speedX > window.innerWidth || particle.x + particle.speedX < 0
            ? particle.x - particle.speedX : particle.x + particle.speedX,
          y: particle.y + particle.speedY > window.innerHeight || particle.y + particle.speedY < 0
            ? particle.y - particle.speedY : particle.y + particle.speedY,
          opacity: Math.max(0.2, Math.min(1, particle.opacity + (Math.random() - 0.5) * 0.02)),
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-particles" style={{
      position: 'fixed',
      top: 0, left: 0, width: '100vw', height: '100vh',
      pointerEvents: 'none', zIndex: 1
    }}>
      {particles.map(particle => (
        <div
          key={particle.id}
          style={{
            position: 'absolute',
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            background: 'rgba(255,255,255,0.8)',
            borderRadius: '50%',
            filter: 'blur(1px)',
            opacity: particle.opacity,
            animation: 'float 30s ease-in-out infinite alternate'
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;