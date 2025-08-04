import {useState } from 'react'

import './navbarst.css' // Assuming you have a CSS file for styling

const StrangerMenuSVG = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="6" y="8" width="20" height="3" rx="1.5" fill="#ff0000"/>
    <rect x="6" y="15" width="20" height="3" rx="1.5" fill="#ff0000"/>
    <rect x="6" y="22" width="20" height="3" rx="1.5" fill="#ff0000"/>
    <ellipse cx="16" cy="16" rx="15" ry="15" stroke="#ff0000" strokeWidth="2" fill="none" opacity="0.2"/>
  </svg>
);

function CassetteDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="drawer-backdrop"
          onClick={onClose}
        />
      )}
      
      {/* Cassette Drawer */}
      <div className={`cassette-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cassette-body">
          {/* Cassette reels */}
          <div className="cassette-reel left-reel">
            <div className="reel-center"></div>
            <div className="reel-holes">
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
            </div>
          </div>
          
          <div className="cassette-reel right-reel">
            <div className="reel-center"></div>
            <div className="reel-holes">
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
              <div className="hole"></div>
            </div>
          </div>
          
          {/* Navigation links in the cassette window */}
       
<div className="cassette-window">
  <div className="nav-links-mobile" style={{
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    wordBreak: 'break-word',
    fontSize: '1rem',
    padding: '0 4px'
  }}>
    <a href="#home" onClick={onClose}>HOME</a>
    <a href="#about" onClick={onClose}>ABOUT</a>
    <a href="#contact" onClick={onClose}>CONTACT</a>
  </div>
</div>

          
          {/* Cassette label */}
          <div className="cassette-label">
            <div className="label-text"></div>
            <div className="label-subtext">NAVIGATION MIX</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function StrangerThingsNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="stranger-navbar-container">
      <style jsx>{`
        .stranger-navbar-container {
          position: relative;
          color:transparent;
          width: 100%;
          background-color: transparent;
        }

        

        
        .navbar-content {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .navbar-title {
          font-family: 'Courier New', monospace;
          font-size: 1.8rem;
          font-weight: bold;
          color: #ff0000;
          text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000;
          letter-spacing: 2px;
          margin: 0;
        }

        .navbar-links {
          display: flex;
          gap: 2rem;
        }

        .navbar-links a {
          font-family: 'Courier New', monospace;
          color: #ffffff;
          text-decoration: none;
          font-weight: bold;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
        }

        .navbar-links a:hover {
          color: #ff0000;
          text-shadow: 0 0 10px #ff0000;
          transform: scale(1.05);
        }

        .mobile-menu-button {
          display: none;
          background: none;
          border: 2px solid #ff0000;
          color: #ff0000;
          padding: 0.5rem;
          right: 20px;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          position: fixed;
          
        }

        .mobile-menu-button:hover {
          background: rgba(212, 175, 55, 0.2);
          box-shadow: 0 0 15px rgba(212, 175, 55, 0.5);
        }

        .mobile-menu-button::before {
          content: '♪';
          position: absolute;
          left: -20px;
          transition: left 0.3s ease;
        }

        .mobile-menu-button:hover::before {
          left: 5px;
        }

       

        

        /* Cassette Drawer Styles */
        .drawer-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.8);
          z-index: 998;
        }

        .cassette-drawer {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 320px;
          height: 200px;
          background: linear-gradient(45deg, #2c2c2c, #1a1a1a);
          border: 3px solid #ff0000;
          border-radius: 15px;
          z-index: 999;
          opacity: 0;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 
            0 0 30px rgba(212, 175, 55, 0.6),
            inset 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        .cassette-drawer.open {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        .cassette-body {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0px;
        }

        .cassette-reel {
          position: absolute;
          width: 50px;
          height: 50px;
          border: 2px solid #ff0000;
          border-radius: 50%;
          background: radial-gradient(circle, #1a1a1a, #2c2c2c, #1a1a1a);
          animation: rotate 2s linear infinite;
        }

        .left-reel {
          top: 20px;
          left: 30px;
        }

        .right-reel {
          top: 20px;
          right: 30px;
        }

        .reel-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 15px;
          height: 15px;
          background: #ff0000;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
        }

        .reel-holes {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .hole {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #000;
          border-radius: 50%;
        }

        .hole:nth-child(1) { top: 8px; left: 50%; transform: translateX(-50%); }
        .hole:nth-child(2) { top: 50%; right: 8px; transform: translateY(-50%); }
        .hole:nth-child(3) { bottom: 8px; left: 50%; transform: translateX(-50%); }
        .hole:nth-child(4) { top: 50%; left: 8px; transform: translateY(-50%); }
        .hole:nth-child(5) { top: 20px; right: 20px; }
        .hole:nth-child(6) { bottom: 20px; left: 20px; }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .cassette-window {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 140px;
          height: 90px;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid #ff0000;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-links-mobile {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: center;
        }

        .nav-links-mobile a {
          font-family: 'Courier New', monospace;
          color: #ff0000;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: bold;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          text-shadow: 0 0 5px rgba(212, 175, 55, 0.5);
        }

        .nav-links-mobile a:hover {
          color: #ffffff;
          text-shadow: 0 0 10px #ff0000;
          transform: scale(1.1);
        }

        .cassette-label {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
        }

        .label-text {
          font-family: 'Courier New', monospace;
          color: #ff0000;
          font-size: 0.7rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .label-subtext {
          font-family: 'Courier New', monospace;
          color: #ffffff;
          font-size: 0.6rem;
          letter-spacing: 0.5px;
          margin-top: 2px;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .navbar {
            padding: 1rem;
          }

          .navbar-title {
            font-size: 1.2rem;
          }

          .navbar-links {
            display: none;
          }

          .mobile-menu-button {
            display: block;
            padding: 0.5rem 1rem;
          }

          .demogorgon-container {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .navbar-title {
            font-size: 1rem;
          }

          .cassette-drawer {
            width: 280px;
            height: 180px;
          }

          .cassette-reel {
            width: 40px;
            height: 40px;
          }

          .left-reel {
            left: 20px;
          }

          .right-reel {
            right: 20px;
          }

          .cassette-window {
            width: 120px;
            height: 50px;
          }
        }
      `}</style>

      <nav className="navbar">
        <video
          className="bg-video"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/mindflayerbg.mp4"
        />
        
        <div className="navbar-content">
          <div styles={{width: '10px', height: '10px'}}>
      <div className="navbar-logo" style={{marginRight: 18, display: 'flex', alignItems: 'center'}}>
            <img src='/assets/logo.jpeg' alt="Stranger Things Logo" style={{width: 120,display: 'block', alignItems: 'center'}} />
          </div>
       </div>
  <div class="hero-container">
          
    <h2 class="hero glitch layers" ><span styles={{color: 'red'}}>
</span></h2>
  </div>
          <div className="navbar-box">
          <div className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
</div>
          <button 
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
          >
            MENU
          </button>
        </div>

        
      </nav>

      <CassetteDrawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </div>
  )
}