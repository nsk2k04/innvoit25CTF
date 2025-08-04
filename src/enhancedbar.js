import React, { useRef, useEffect, useState } from 'react';

// Flickering text effect component
const FlickeringText = ({ children, className }) => {
  const [isFlickering, setIsFlickering] = useState(false);
  
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      if (Math.random() < 0.1) { // 10% chance to flicker
        setIsFlickering(true);
        setTimeout(() => setIsFlickering(false), Math.random() * 200 + 50);
      }
    }, 500);
    
    return () => clearInterval(flickerInterval);
  }, []);
  
  return (
    <span className={`${className} ${isFlickering ? 'opacity-30' : ''} transition-opacity duration-75`}>
      {children}
    </span>
  );
};

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
    
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y <= -5 ? 105 : particle.y - particle.speed * 0.1,
        opacity: Math.sin(Date.now() * 0.001 + particle.id) * 0.3 + 0.4,
      })));
    };
    
    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute bg-red-500 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            boxShadow: '0 0 10px #ff0000',
          }}
        />
      ))}
    </div>
  );
};

// Enhanced navigation links with Stranger Things effects
const StrangerThingsLinks = () => {
  const links = [
    { name: 'HOME', href: '#home', effect: 'text-red-400 hover:text-red-300' },
    { name: 'THE UPSIDE DOWN', href: '#upside-down', effect: 'text-red-400 hover:text-red-300' },
    { name: 'HAWKINS', href: '#hawkins', effect: 'text-red-400 hover:text-red-300' },
    { name: 'CONTACT', href: '#contact', effect: 'text-red-400 hover:text-red-300' },
  ];
  
  return (
    <div className="flex space-x-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className={`
            ${link.effect} 
            text-sm font-bold tracking-wider
            transition-all duration-300 ease-in-out
            hover:drop-shadow-[0_0_8px_rgba(255,0,0,0.8)]
            hover:scale-105
            relative
            group
          `}
        >
          <FlickeringText>
            {link.name}
          </FlickeringText>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300 shadow-[0_0_5px_#ff0000]"></span>
        </a>
      ))}
    </div>
  );
};

// Glitch effect for title


// Static noise overlay
const StaticNoise = () => {
  const canvasRef = useRef();
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const generateNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise;     // red
        data[i + 1] = noise; // green  
        data[i + 2] = noise; // blue
        data[i + 3] = Math.random() * 50; // alpha (very low opacity)
      }
      
      ctx.putImageData(imageData, 0, 0);
    };
    
    const interval = setInterval(generateNoise, 100);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={100}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
      style={{ mixBlendMode: 'overlay' }}
    />
  );
};

// Simple 3D Demogorgon placeholder (since we can't use the actual GLB)
const DemogorgonPlaceholder = () => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-20 h-20 relative">
      <div 
        className="w-full h-full bg-gradient-to-b from-red-900 to-black rounded-lg shadow-lg"
        style={{
          transform: `rotateY(${rotation}deg)`,
          boxShadow: '0 0 20px rgba(255, 0, 0, 0.5), inset 0 0 20px rgba(0, 0, 0, 0.8)',
        }}
      >
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-4 left-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
        <div className="absolute top-4 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-ping delay-100"></div>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-red-700 rounded-full"></div>
      </div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-red-400 font-mono opacity-70">
        DEMOGORGON
      </div>
    </div>
  );
};

// Main enhanced navbar component
export default function EnhancedStrangerThingsNavbar() {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <nav 
      className="
        sticky top-5 mx-10 my-8 p-6
        border-4 border-red-600 rounded-2xl
        bg-black bg-opacity-95
        backdrop-blur-md
        z-20 relative overflow-hidden
        transition-all duration-500 ease-in-out
        hover:border-red-400 hover:shadow-[0_0_30px_rgba(255,0,0,0.6)]
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? '0 0 40px rgba(255, 0, 0, 0.8), 0 0 80px rgba(139, 0, 0, 0.6)' 
          : '0 0 20px rgba(255, 0, 0, 0.5), 0 0 40px rgba(139, 0, 0, 0.3)',
      }}
    >
      {/* Background effects */}
      <FloatingParticles />
      <StaticNoise />
      
      {/* Scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-red-500 opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 opacity-60 animate-pulse delay-1000"></div>
      
      {/* Main content */}
      <div className="flex justify-between items-center relative z-10">
        <div className="flex-1">
          <GlitchTitle />
          <div className="text-xs text-red-300 opacity-70 font-mono tracking-widest mt-1">
            [CLASSIFIED] - HAWKINS NATIONAL LABORATORY
          </div>
        </div>
        
        <div className="flex items-center space-x-8">
          <StrangerThingsLinks />
          <div className="border-l border-red-600 pl-6">
            <DemogorgonPlaceholder />
          </div>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-red-500 opacity-60"></div>
      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-red-500 opacity-60"></div>
      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-red-500 opacity-60"></div>
      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-red-500 opacity-60"></div>
    </nav>
  );
}