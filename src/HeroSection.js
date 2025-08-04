import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import { SJCELogo } from './ComingSoon'; // Assuming SJCELogo is exported from ComingSoon.js
const HeroSection = () => {
  const smokeContainerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const createSmoke = () => {
      if (!smokeContainerRef.current) return;
      
      const smoke = document.createElement('div');
      smoke.className = 'smoke';
      smoke.style.left = `${Math.random() * 100}%`;
      smoke.style.animationDelay = `${Math.random() * 5}s`;
      smoke.style.animationDuration = `${Math.random() * 10 + 10}s`;
      smokeContainerRef.current.appendChild(smoke);

      setTimeout(() => {
        if (smoke.parentNode) {
          smoke.parentNode.removeChild(smoke);
        }
      }, 15000);
    };

    const smokeInterval = setInterval(createSmoke, 300);

    // Initial particles
    for (let i = 0; i < 20; i++) {
      setTimeout(createSmoke, i * 100);
    }

    // Flicker effect
    const addRandomFlicker = () => {
      const elements = document.querySelectorAll('.flicker');
      elements.forEach(el => {
        if (Math.random() < 0.1) {
          el.style.opacity = '0.3';
          setTimeout(() => {
            el.style.opacity = '1';
          }, 100);
        }
      });
    };

    const flickerInterval = setInterval(addRandomFlicker, 2000);

    return () => {
      clearInterval(smokeInterval);
      clearInterval(flickerInterval);
    };
  }, []);

  useEffect(() => {
    const targetDate = new Date('2025-09-13T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <section className="hero-section" style={{ paddingTop: '20px' }}>
      <div className="loading">
        <div className="loading-text">ENTERING THE UPSIDE DOWN...</div>
      </div>

      <div className="background"></div>

      <div className="smoke-container" ref={smokeContainerRef}></div>

      {/* <header className="flicker">
        <h1 className="main-title crt-effect">
          THE <span className="upside-down">UPSIDE DOWN</span>
        </h1>
      </header> */}
<div className="comingsoon-title-row">
              <SJCELogo />
              <span className="comingsoon-title">ST. JOSEPH'S COLLEGE OF ENGINEERING</span>
            </div>
      <div className="event-info">
      
        <div className="countdown-container">
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.days.toString().padStart(2, '0')}</div>
            <div className="countdown-label">DAYS</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="countdown-label">HOURS</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="countdown-label">MINUTES</div>
          </div>
          <div className="countdown-separator">:</div>
          <div className="countdown-item">
            <div className="countdown-number">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="countdown-label">SECONDS</div>
          </div>
        </div>
        <div className="hero-title-row">
    
    <span className="event-title12">INNOVIT 25</span>
    
    
  </div>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
  <img src="/assets/logo.jpeg" alt="SJCE Logo" className="hero-logo" />
  </div>
  <div className="event-dept">DEPARTMENT OF IT AND CYBER</div>

      </div>

      <style jsx>{`
        .event-info {
          
          margin-top: 4rem;
          font-family: 'StrangerFont', monospace;
          left:15px;
        }

        .event-title12 {
          font-size: 4.5rem;
          font-weight: bold;
          position: relative;
          left:15px;
          
          text-shadow: 
            0 0 10px #ff6b6b,
            0 0 20px #ff6b6b,
            0 0 30px #ff6b6b;
          letter-spacing: 0.2em;
          margin-bottom: 0.5rem;
          animation: glow 2s ease-in-out infinite alternate;
        }

        .event-dept {
          font-size: 2.2rem;
          color: #fff;
          opacity: 0.8;
          left: 50%;
          right:50%;
          text-align: center;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }

        .countdown-container {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .countdown-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          min-width: 80px;
        }

        .countdown-number {
          font-size: 3rem;
          font-weight: bold;
          color: #00ff41;
          text-shadow: 
            0 0 10px #00ff41,
            0 0 20px #00ff41;
          font-family: 'Courier New', monospace;
          line-height: 1;
          margin-bottom: 0.5rem;
          animation: pulse 2s ease-in-out infinite;
        }

        .countdown-label {
          font-size: 1rem;
          font-family: 'Courier New', monospace;
          color: #fff;
          opacity: 2;
          letter-spacing: 0.1em;
          font-weight: 800;
        }

        .countdown-separator {
          font-size: 2.5rem;
          color: #ff6b6b;
          font-weight: bold;
          opacity: 0.8;
          animation: blink 1s ease-in-out infinite;
        }

        @keyframes glow {
          from {
            text-shadow: 
              0 0 10px #ff6b6b,
              0 0 20px #ff6b6b,
              0 0 30px #ff6b6b;
          }
          to {
            text-shadow: 
              0 0 20px #ff6b6b,
              0 0 30px #ff6b6b,
              0 0 40px #ff6b6b;
          }
        }

        @keyframes pulse {
          0%, 100% { 
            transform: scale(1);
            opacity: 1;
          }
          50% { 
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }

        @media (max-width: 768px) {
          .event-title12 {
            font-size: 2rem;
          }
          
          .countdown-number {
            font-size: 2.5rem;
          }
          
          .countdown-container {
            gap: 0.5rem;
          }
          
          .countdown-item {
            min-width: 60px;
          }
        }

        @media (max-width: 480px) {
          .event-title12 {
            font-size: 1.5rem;
          }
          
          .countdown-number {
            font-size: 2rem;
          }
          
          .countdown-separator {
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;