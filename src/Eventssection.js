import React, { useState, useEffect } from 'react';

import { motion, AnimatePresence } from "framer-motion";
import './Eventssection.css'; // Assuming you have a CSS file for styling
import Switch from './Switch';
import EventsCarousel from './carousel/eventssec';
const EVENTS = [
  "CODE THE UPSIDE DOWN",
  "VECNA'S VISION", 
  "HAWKINS HUNT",
  "THE 11th EFFECT",
  "GHOST IN THE MACHINE"
];

const BULB_COLORS = [
  '#ff6b6b', // Red
  '#4ecdc4', // Teal
  '#45b7d1', // Blue
  '#f9ca24', // Yellow
  '#f0932b', // Orange
  '#eb4d4b', // Dark Red
  '#6c5ce7', // Purple
  '#a29bfe', // Light Purple
  '#fd79a8', // Pink
  '#00b894'  // Green
];

const EventsSectionOne = () => {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [activeBulbs, setActiveBulbs] = useState(new Set());
  const [flickeringBulbs, setFlickeringBulbs] = useState(new Set());

  // Random bulb flickering effect
  useEffect(() => {
    const interval = setInterval(() => {
      const randomBulb = Math.floor(Math.random() * 50); // 5 rows × 10 bulbs
      setFlickeringBulbs(prev => {
        const newSet = new Set(prev);
        newSet.add(randomBulb);
        return newSet;
      });

      // Remove flickering after animation
      setTimeout(() => {
        setFlickeringBulbs(prev => {
          const newSet = new Set(prev);
          newSet.delete(randomBulb);
          return newSet;
        });
      }, 1500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleRowHover = (rowIndex) => {
    setHoveredRow(rowIndex);
    // Light up bulbs for this row
    const newActiveBulbs = new Set();
    for (let i = rowIndex * 10; i < (rowIndex + 1) * 10; i++) {
      newActiveBulbs.add(i);
    }
    setActiveBulbs(newActiveBulbs);
  };

  const handleRowLeave = () => {
    setHoveredRow(null);
    setActiveBulbs(new Set());
  };

  return (
    <div className='events-wall-bg' style={{ 
  //'linear-gradient(135deg, #2c1810 0%, #1a0f0a 50%, #0d0804 100%)',
      minHeight: '100vh',
      padding: '60px 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Nosifer&display=swap');
        
        .events-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .title {
           font-family: 'Stranger-Things-Outlined', 'Benguiat-Bold', sans-serif;
    
          font-size: 3rem;
          color: #f0e5e5ff;
          text-align: center;
          margin-bottom: 60px;
          text-shadow: 
            0 0 10px #8b0000,
            0 0 20px #8b0000,
            0 0 30px #ff0000;
          animation: titlePulse 2s ease-in-out infinite alternate;
        }

        @keyframes titlePulse {
          0% { 
            text-shadow: 
              0 0 10px #8b0000,
              0 0 20px #8b0000,
              0 0 30px #ff0000;
          }
          100% { 
            text-shadow: 
              0 0 15px #8b0000,
              0 0 25px #8b0000,
              0 0 35px #ff0000,
              0 0 45px #ff4444;
          }
        }

        .events-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .event-row {
          position: relative;
          margin: 80px 0;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lights-wire {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 1800px;
          height: 60px;
          z-index: 2;
        }

        .wire {
          position: absolute;
          top: 0px;
          left: 0;
          right: 0;
          height: 4px;
          background: #333;
          border-radius: 1px;
          box-shadow: 0 1px 3px rgba(237, 231, 231, 0.79);
        }

        .bulb {
          position: absolute;
          top: 0;
          width: 20px;
          height: 30px;
          background: #f1e9e9ff;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          box-shadow: 
            inset 0 2px 4px rgba(250, 245, 245, 1),
            0 4px 8px rgba(244, 240, 240, 1);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border: 1px solid #444;
        }

        .bulb::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: 'white;
          border-radius: 2px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }

        .bulb::after {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 26px;
          background: #333;
          z-index: -1;
        }

        .bulb.active {
          box-shadow: 
            inset 0 2px 4px rgba(244, 238, 238, 0.97),
            0 0 20px currentColor,
            0 0 40px currentColor,
            0 4px 8px rgba(0,0,0,0.3);
          animation: bulbGlow 0.6s ease-out;
        }

        .bulb.flickering {
          animation: randomFlicker 1.5s ease-in-out;
        }

        @keyframes bulbGlow {
          0% {
            transform: translateX(-50%) scale(1);
            filter: brightness(2);
          }
          50% {
            transform: translateX(-50%) scale(1.1);
            filter: brightness(4);
          }
          100% {
            transform: translateX(-50%) scale(1);
            filter: brightness(6);
          }
        }

        @keyframes randomFlicker {
          0%, 100% { 
            background: #2a2a2a;
            box-shadow: 
              inset 0 2px 4px rgba(255,255,255,0.1),
              0 4px 8px rgba(0,0,0,0.5);
          }
          10%, 30%, 50%, 70%, 90% { 
            box-shadow: 
              inset 0 2px 4px rgba(255,255,255,0.3),
              0 0 15px currentColor,
              0 0 30px currentColor,
              0 4px 8px rgba(0,0,0,0.3);
          }
          200%,20%, 40%, 60%, 80%,100%,150% { 
            background: #2a2a2a;
            box-shadow: 
              inset 0 2px 4px rgba(255,255,255,0.1),
              0 4px 8px rgba(0,0,0,0.5);
          }
        }

        .event-text {
           font-family: 'Stranger-Things-Outlined', 'Benguiat-Bold', sans-serif;
    
          font-size: 2.5rem;
          color: 'white';
          letter-spacing: 0.2em;
          margin-top: 40px;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .event-text.glowing {
          color: #fff;
          text-shadow: 
            0 0 20px #fff,
            0 0 40px #fff,
            0 0 60px #fff,
            2px 2px 8px rgba(0,0,0,0.8);
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        @keyframes textGlow {
          0% {
            text-shadow: 
              0 0 20px #fff,
              0 0 40px #fff,
              0 0 60px #fff,
              2px 2px 8px rgba(0,0,0,0.8);
          }
          100% {
            text-shadow: 
              0 0 30px #fff,
              0 0 50px #fff,
              0 0 70px #fff,
              0 0 90px #ffff00,
              2px 2px 8px rgba(0,0,0,0.8);
          }
        }

        .ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }

        .ambient-glow.active {
          opacity: 1;
          animation: ambientPulse 2s ease-in-out infinite alternate;
        }

        @keyframes ambientPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.1;
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 2rem;
          }
          
          .event-text {
            font-size: 1.8rem;
          }
          
          .bulb {
            width: 16px;
            height: 24px;
          }

          .lights-wire {
            width: 95%;
          }
        }
      `}</style>

      <div className="events-container">
       
        <h1 className="title">EVENTS</h1>
        
        <ul className="events-list">
          {EVENTS.map((event, rowIndex) => (
            <li
              key={rowIndex}
              className="event-row"
              onMouseEnter={() => handleRowHover(rowIndex)}
              onMouseLeave={handleRowLeave}
            >
              <div className="lights-wire">
                <div className="wire"></div>
                {[...Array(10)].map((_, bulbIndex) => {
                  const globalBulbIndex = rowIndex * 10 + bulbIndex;
                  const isActive = activeBulbs.has(globalBulbIndex);
                  const isFlickering = flickeringBulbs.has(globalBulbIndex);
                  const bulbColor = BULB_COLORS[bulbIndex % BULB_COLORS.length];
                  
                  return (
                    <div
                      key={bulbIndex}
                      className={`bulb ${isActive ? 'active' : ''} ${isFlickering ? 'flickering' : ''}`}
                      style={{
                        left: `${(bulbIndex / 9) * 100}%`,
                        background: isActive || isFlickering ? bulbColor : '#2a2a2a',
                        color: bulbColor
                      }}
                    />
                  );
                })}
              </div>
              
              <div className={`event-text ${hoveredRow === rowIndex ? 'glowing' : ''}`} styles={{color: '#e83e3eff'}}>
                {event}
              </div>
              
              <div className={`ambient-glow ${hoveredRow === rowIndex ? 'active' : ''}`}></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Stranger Things-like font, inject in your index.html or dynamically:

const EventsSectionTwo = () =>{
  const creepsterFont = `
@import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');
`;

const EVENTSS = [
  { name: "CODE THE UPSIDE DOWN", details: "Experience coding challenges from Hawkins’ alternate realm. Will your algorithms survive the upside down?" },
  { name: "VECNA'S VISION", details: "Tackle cryptic logical puzzles inspired by Vecna. Can you see through the chaos?" },
  { name: "HAWKINS HUNT", details: "A code scavenger hunt through Hawkins. Solve clues, uncover mysteries, win the prize!" },
  { name: "THE 11th EFFECT", details: "Test the limits of your coding superpowers in rapid-fire mini-challenges. How far can you push the rules?" },
  { name: "GHOST IN THE MACHINE", details: "Debug haunted programs and find the phantom bugs lurking within. Only the bravest will succeed." },
];

const cardVariants = {
  rest: { scale: 1, boxShadow: "0 8px 36px #000d" },
  hover: { scale: 1.13, boxShadow: "0 0 40px #e50914", zIndex: 2 },
  tap: { scale: 0.97 }
};

const detailVariants = {
  initial: direction => ({
    y: 200,
    scale: 0.85,
    opacity: 0,
    rotate: direction === "left" ? -15 : 15,
    originX: direction === "left" ? 1 : 0
  }),
  animate: { y: 0, scale: 1, opacity: 1, rotate: 0 },
  exit: direction => ({
    y: 200,
    scale: 0.85,
    opacity: 0,
    rotate: direction === "left" ? 15 : -15,
    originX: direction === "left" ? 0 : 1
  })
};

  const [selected, setSelected] = useState(null);
  const [direction, setDirection] = useState("right"); // for rotate animation

  function selectCard(idx) {
    if (selected === null) {
      setDirection("right");
      setSelected(idx);
    } else if (idx !== selected) {
      setDirection(idx > selected ? "right" : "left");
      setTimeout(() => setSelected(idx), 350); // allow exit animation before switching
    }
  }

  function closeDetails() {
    setDirection("left");
    setTimeout(() => setSelected(null), 350);
  }

  // Font injection (for demo—use in your global CSS in prod)
  React.useEffect(() => {
    const style = document.createElement("style");
    style.appendChild(document.createTextNode(creepsterFont));
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="events2-bg">
      <div className="events2-row">
        {EVENTS.map((event, idx) => (
          <motion.div
            key={event.name}
            className={`events2-card${selected === idx ? " selected" : ""}`}
            variants={cardVariants}
            initial="rest"
            animate={selected === idx ? "hover" : "rest"}
            whileHover="hover"
            whileTap="tap"
            onClick={() => selectCard(idx)}
            tabIndex={0}
          >
            <div className="events2-title">{event.name}</div>
            
          </motion.div>
        ))}
      </div>

      {/* Details Panel */}
      <AnimatePresence custom={direction} mode="wait">
        {selected !== null && (
          <motion.div
            className="events2-detail"
            key={selected}
            custom={direction}
            variants={detailVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              type: "spring", stiffness: 170, damping: 22, duration: 0.8
            }}
            style={{
              // Pull the detail section up visually, add "cinematic" effect
              boxShadow: "0 0 80px #e50914cc, 0 0 0 #fff",
              background:
                "linear-gradient(120deg, rgba(34,0,0,0.98) 85%, #e5091844 120%)"
            }}
          >
            <h2 className="events2-detail-title">{console.log(EVENTSS[selected].name)}{EVENTSS[selected].name}</h2>
            <p className="events2-detail-desc">{EVENTSS[selected].details}</p>
            <motion.button
              className="close-btn"
              whileHover={{
                scale: 1.07,
                backgroundColor: "#b2060f"
              }}
              onClick={closeDetails}
            >
              CLOSE
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inline CSS for demo, move to your CSS/SCSS files */}
      <style>{`
      .events2-bg {
        min-height: 100vh;
        background: linear-gradient(120deg, #222 60%, #3b0202 100%);
        padding: 60px 0 220px 0;
        font-family: 'Creepster', cursive, Arial, sans-serif;
        letter-spacing: .05em;
        overflow-x: hidden;
        position: relative;
      }

.events2-row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.2rem;
  margin-bottom: 150px;
  position: relative;
  z-index: 2;
}

.events2-card {
  width: 220px;
  height: 300px;
  background: linear-gradient(145deg, #101012 82%, #e5091822 120%);
  color: #fff;
  border-radius: 22px;
  font-family: 'Stranger-Things-Outlined', 'Benguiat-Bold', 'Creepster', cursive, Arial, sans-serif;
  box-shadow: 0 8px 36px #000b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  border: 3px solid #390000;
  transition: box-shadow 0.4s, border 0.24s, background 0.3s;
  user-select: none;
  outline: none;
  margin-bottom: 1.5rem;
  text-align: center;
}

.events2-card.selected {
  border: 3.5px solid #e50914;
}

.events2-title {
  padding: 0 10px;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffeaea;
  text-shadow: 0 2px 8px #e50918aa, 0 0 24px #000a;
  letter-spacing: 1.2px;
  margin-top: 12px;
  margin-bottom: 12px;
  word-break: break-word;
  line-height: 1.2;
}

/* Responsive styles */
@media (max-width: 1100px) {
  .events2-row {
    gap: 1.2rem;
  }
  .events2-card {
    width: 170px;
    height: 220px;
    font-size: 0.95rem;
  }
}

@media (max-width: 800px) {
  .events2-row {
    gap: 0.8rem;
  }
  .events2-card {
    width: 130px;
    height: 170px;
    font-size: 0.85rem;
    padding: 0 2px;
  }
  .events2-title {
    font-size: 1rem;
    padding: 0 2px;
  }
}

@media (max-width: 600px) {
  .events2-row {
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;
  }
  .events2-card {
    width: 95vw;
    max-width: 320px;
    min-width: 180px;
    height: 90px;
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
    border-radius: 14px;
    padding: 0 2px;
  }
  .events2-title {
    font-size: 0.98rem;
    padding: 0 2px;
  }
}
      .st-btn {
        background: #e50914;
        color: #fff;
        font-family: 'Creepster', cursive;
        border: 2.5px solid #fff;
        border-radius: 14px;
        padding: 0.68rem 1.8rem;
        font-size: 1.13rem;
        box-shadow: 0 2px 8px #e5091488;
        letter-spacing: 2.3px;
        margin-bottom: 28px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: background .22s, box-shadow .21s;
      }
      .st-btn-txt {
        position: relative;
        z-index: 1;
        font-weight: 700;
        font-size: 1.16em;
        letter-spacing: 2px;
        text-shadow: 0 0 10px #222e, 0 1px 8px #ffd7;
      }
      .st-btn .scanline {
        display: block;
        pointer-events: none;
        position: absolute;
        left: 0; top: 0; width: 100%; height: 100%;
        background: repeating-linear-gradient(
          0deg,
          transparent 2px,
          #ffeded11 8px,
          transparent 14px
        );
        opacity: 0.32;
        animation: scanline 2.4s linear infinite;
      }
      @keyframes scanline {
        100% { background-position-y: 44px; }
      }

      .events2-detail {
        position: absolute;
        left: 0; right: 0; bottom: 0;
        margin: auto;
        margin-bottom: 28px;
        width: 58vw;
        min-width: 290px;
        max-width: 720px;
        min-height: 212px;
        max-height: 330px;
        background: rgba(34,0,0,0.95);
        color: #fff;
        border-radius: 33px 33px 22px 22px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 40px 38px 30px 38px;
        z-index: 28;
        font-family: 'Creepster', cursive;
        font-size: 1.32rem;
        box-shadow: 0 0 60px #e50914dd, 0 14px 36px #000d;
        border: 2.5px solid #e50914;
        overflow: hidden;
        will-change: transform, opacity;
      }
      .events2-detail-title {
        color: #e50914;
        font-size: 1.8rem;
        letter-spacing: 2.2px;
        margin-bottom: 14px;
        text-shadow: 0 0 12px #99121266, 0 7px 42px #000b;
      }
      .events2-detail-desc {
        color: #fff;
        font-size: 1.18rem;
        text-align: center;
        margin-bottom: 22px;
        max-width: 85%;
        line-height: 1.37;
        font-family: Arial, sans-serif;
      }
      .close-btn {
        background: #e50914;
        color: #fff;
        font-family: inherit;
        border: none;
        border-radius: 11px;
        padding: 0.52em 1.3em;
        font-size: 1.08rem;
        margin-top: 8px;
        font-weight: 700;
        box-shadow: 0 0 15px #e5091880;
        letter-spacing: 1.1px;
        cursor: pointer;
        transition: transform 0.12s, background 0.18s;
      }

      @media (max-width: 900px) {
        .events2-row {
          gap: 1rem;
        }
        .events2-card {
          width: 130px;
          height: 190px;
        }
        .events2-detail {
          width: 93vw;
          max-width: 96vw;
          min-width: 0;
          padding: 18px 6vw 20px 6vw;
        }
      }
      `}
      </style>
    </div>
  );
}

// const EventsSectionTwo = () => {
//   const [developingPhotos, setDevelopingPhotos] = useState(new Set());
//   const [hoveredPhoto, setHoveredPhoto] = useState(null);

//   const EVENTS_ROWS = [
//     ["CODE THE UPSIDE DOWN", "VECNA'S VISION", "HAWKINS HUNT"],
//     ["THE 11th EFFECT", "GHOST IN THE MACHINE"]
//   ];

//   useEffect(() => {
//     // Auto-develop random photos
//     const interval = setInterval(() => {
//       const totalPhotos = EVENTS_ROWS.flat().length;
//       const randomPhoto = Math.floor(Math.random() * totalPhotos);
      
//       setDevelopingPhotos(prev => {
//         const newSet = new Set(prev);
//         newSet.add(randomPhoto);
//         return newSet;
//       });

//       setTimeout(() => {
//         setDevelopingPhotos(prev => {
//           const newSet = new Set(prev);
//           newSet.delete(randomPhoto);
//           return newSet;
//         });
//       }, 3000);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const getPhotoIndex = (rowIndex, photoIndex) => {
//     let index = 0;
//     for (let i = 0; i < rowIndex; i++) {
//       index += EVENTS_ROWS[i].length;
//     }
//     return index + photoIndex;
//   };

//   return (
//     <div className="events-section-two">
//       <div className="darkroom-container">
//         <h1 className="darkroom-title">EVENTS</h1>
        
//         <div className="photo-rows">
//           {EVENTS_ROWS.map((row, rowIndex) => (
//             <div key={rowIndex} className="photo-row">
//               <div className="hanging-wire"></div>
//               <div className="photos-container">
//                 {row.map((event, photoIndex) => {
//                   const globalPhotoIndex = getPhotoIndex(rowIndex, photoIndex);
//                   const isDeveloping = developingPhotos.has(globalPhotoIndex);
//                   const isHovered = hoveredPhoto === globalPhotoIndex;
                  
//                   return (
//                     <div
//                       key={photoIndex}
//                       className={`photo-frame ${isDeveloping ? 'developing' : ''} ${isHovered ? 'glowing' : ''}`}
//                       onMouseEnter={() => setHoveredPhoto(globalPhotoIndex)}
//                       onMouseLeave={() => setHoveredPhoto(null)}
//                     >
//                       <div className="clothespin"></div>
//                       <div className="photo-content">
//                         <div className="photo-text">{event}</div>
//                         <div className="photo-overlay"></div>
//                         <div className="developing-effect"></div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="red-light"></div>
//       </div>
//     </div>
//   );
// };
const EventsSection = () => {
  const [isLightsMode, setIsLightsMode] = useState(true);
  const [switchAnimating, setSwitchAnimating] = useState(false);

  const [isPulling, setIsPulling] = useState(false);

 

  const handlePull = () => {
    setIsPulling(true);
    handleSwitchToggle();
    setTimeout(() => setIsPulling(false), 300);
  };

  const handleSwitchToggle = () => {
    setSwitchAnimating(true);
    setTimeout(() => {
      setIsLightsMode(!isLightsMode);
      setSwitchAnimating(false);
    }, 500);
  };

  return (
    <div className="main-container">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Nosifer&display=swap');
        
        .main-container {
          
          position: relative;
          transition: all 0.8s ease;
        }

        /* Vintage Switch Styles */
        

        .vintage-switch {
          width: 120px;
          height: 260px;
          background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
          border: 3px solid #444;
          border-radius: 8px;
          position: relative;
          cursor: pointer;
          box-shadow: 
            0 8px 16px rgba(0,0,0,0.3),
            inset 0 2px 4px rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .vintage-switch:hover {
          box-shadow: 
            0 12px 20px rgba(0,0,0,0.4),
            inset 0 2px 4px rgba(255,255,255,0.2),
            0 0 20px rgba(255,0,0,0.3);
        }

        .switch-lever {
          position: absolute;
          top: 8px;
          width: 40px;
          height: 44px;
          background: linear-gradient(145deg, #666, #333);
          border: 2px solid #555;
          border-radius: 6px;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          box-shadow: 
            0 4px 8px rgba(0,0,0,0.3),
            inset 0 1px 2px rgba(255,255,255,0.2);
          transform-origin: center;
        }

        .switch-lever.lights-mode {
          left: 8px;
          background: linear-gradient(145deg, #ff6b6b, #ff4444);
          box-shadow: 
            0 4px 8px rgba(255,68,68,0.4),
            inset 0 1px 2px rgba(255,255,255,0.3),
            0 0 15px rgba(255,68,68,0.6);
        }

        .switch-lever.dark-mode {
          left: 66px;
          background: linear-gradient(145deg, #333, #111);
          box-shadow: 
            0 4px 8px rgba(0,0,0,0.6),
            inset 0 1px 2px rgba(255,255,255,0.1);
        }

        .switch-lever.animating {
          transform: rotateY(180deg) scale(1.1);
        }

        .switch-labels {
          position: absolute;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 15px;
           font-family: 'Stranger-Things-Outlined', 'Benguiat-Bold', sans-serif;
    
          font-size: 0.7rem;
          font-weight: bold;
          pointer-events: none;
        }

        .switch-label {
          color: #888;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
          transition: all 0.3s ease;
        }

        .switch-label.active {
          color: #fff;
          text-shadow: 
            0 0 10px currentColor,
            1px 1px 2px rgba(0,0,0,0.8);
        }

        /* Events Section One Styles */
        .events-section-one {
          background: linear-gradient(135deg, #2c1810 0%, #1a0f0a 50%, #0d0804 100%);
          min-height: 100vh;
          padding: 60px 20px;
          position: relative;
        }

        .events-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
        }

        .title {
           font-family: 'Stranger-Things-Outlined', 'Benguiat-Bold', sans-serif;
    
          font-size: 3rem;
          color: #8b0000;
          text-align: center;
          margin-bottom: 60px;
          text-shadow: 
            0 0 10px #8b0000,
            0 0 20px #8b0000,
            0 0 30px #ff0000;
          animation: titlePulse 2s ease-in-out infinite alternate;
        }

        @keyframes titlePulse {
          0% { 
            text-shadow: 
              0 0 10px #8b0000,
              0 0 20px #8b0000,
              0 0 30px #ff0000;
          }
          100% { 
            text-shadow: 
              0 0 15px #8b0000,
              0 0 25px #8b0000,
              0 0 35px #ff0000,
              0 0 45px #ff4444;
          }
        }

        .events-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .event-row {
          position: relative;
          margin: 80px 0;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lights-wire {
          position: absolute;
          top: -40px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          max-width: 800px;
          height: 60px;
          z-index: 2;
        }

        .wire {
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 2px;
          background: #333;
          border-radius: 1px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }

        .bulb {
          position: absolute;
          top: 0;
          width: 20px;
          height: 30px;
          background: #2a2a2a;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,0.1),
            0 4px 8px rgba(0,0,0,0.5);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border: 1px solid #444;
        }

        .bulb::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: #666;
          border-radius: 2px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }

        .bulb::after {
          content: '';
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 26px;
          background: #333;
          z-index: -1;
        }

        .bulb.active {
          box-shadow: 
            inset 0 2px 4px rgba(255,255,255,0.3),
            0 0 20px currentColor,
            0 0 40px currentColor,
            0 4px 8px rgba(0,0,0,0.3);
          animation: bulbGlow 0.6s ease-out;
        }

        .bulb.flickering {
          animation: randomFlicker 1.5s ease-in-out;
        }

        @keyframes bulbGlow {
          0% {
            transform: translateX(-50%) scale(1);
            filter: brightness(1);
          }
          50% {
            transform: translateX(-50%) scale(1.1);
            filter: brightness(1.5);
          }
          100% {
            transform: translateX(-50%) scale(1);
            filter: brightness(1.2);
          }
        }

        @keyframes randomFlicker {
          0%, 100% { 
            background: #2a2a2a;
            box-shadow: 
              inset 0 2px 4px rgba(255,255,255,0.1),
              0 4px 8px rgba(0,0,0,0.5);
          }
          10%, 30%, 50%, 70%, 90% { 
            box-shadow: 
              inset 0 2px 4px rgba(255,255,255,0.3),
              0 0 15px currentColor,
              0 0 30px currentColor,
              0 4px 8px rgba(0,0,0,0.3);
          }
          20%, 40%, 60%, 80% { 
            background: #2a2a2a;
            box-shadow: 
              inset 0 2px 4px rgba(255,255,255,0.1),
              0 4px 8px rgba(0,0,0,0.5);
          }
        }

        .event-text {
           font-family: 'Stranger-Things-Outlined', 'Benguiat-Bold', sans-serif;
    
          font-size: 2.5rem;
          color: #666;
          letter-spacing: 0.2em;
          margin-top: 40px;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
          transition: all 0.4s ease;
          position: relative;
          z-index: 1;
        }

        .event-text.glowing {
          color: #fff;
          text-shadow: 
            0 0 20px #fff,
            0 0 40px #fff,
            0 0 60px #fff,
            2px 2px 8px rgba(0,0,0,0.8);
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        @keyframes textGlow {
          0% {
            text-shadow: 
              0 0 20px #fff,
              0 0 40px #fff,
              0 0 60px #fff,
              2px 2px 8px rgba(0,0,0,0.8);
          }
          100% {
            text-shadow: 
              0 0 30px #fff,
              0 0 50px #fff,
              0 0 70px #fff,
              0 0 90px #ffff00,
              2px 2px 8px rgba(0,0,0,0.8);
          }
        }

        .ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          z-index: 0;
        }

        .ambient-glow.active {
          opacity: 1;
          animation: ambientPulse 2s ease-in-out infinite alternate;
        }

        @keyframes ambientPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.1;
          }
        }

        /* Events Section Two Styles */
        

        .darkroom-container {
         
        }

        .darkroom-title {
           font-family: 'Stranger-Things-Outlined', 'Benguiat-Bold', sans-serif;
    
          font-size: 3rem;
          color: #efeaeaff;
          text-align: center;
          margin-bottom: 80px;
          text-shadow: 
            0 0 20px #8b0000,
            0 0 40px #8b0000;
          animation: darkroomPulse 3s ease-in-out infinite alternate;
        }

        @keyframes darkroomPulse {
          0% { 
            text-shadow: 
              0 0 20px #8b0000,
              0 0 40px #8b0000;
          }
          100% { 
            text-shadow: 
              0 0 30px #8b0000,
              0 0 50px #8b0000,
              0 0 70px #ff0000;
          }
        }

        .photo-rows {
          display: flex;
          flex-direction: column;
          gap: 120px;
        }

        .photo-row {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .hanging-wire {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 90%;
          height: 5px;
          background: linear-gradient(90deg, transparent 0%, #444 20%, #444 80%, transparent 100%);
          box-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }

        .photos-container {
          display: flex;
          gap: 80px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .photo-frame {
          position: relative;
          width: 280px;
          height: 320px;
          cursor: pointer;
          transition: all 0.5s ease;
          filter: sepia(100%) saturate(0%) brightness(0.4);
        }

        .photo-frame:hover {
          transform: translateY(-10px) scale(1.05);
          filter: sepia(50%) saturate(50%) brightness(0.8);
        }

        .photo-frame.glowing {
          filter: sepia(0%) saturate(100%) brightness(1.2);
          transform: translateY(-15px) scale(1.08);
        }

        .clothespin {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 25px;
          height: 45px;
          background: linear-gradient(145deg, #8b4513, #654321);
          border-radius: 8px 8px 4px 4px;
          z-index: 3;
          box-shadow: 
            0 2px 4px rgba(0,0,0,0.3),
            inset 0 1px 2px rgba(255,255,255,0.2);
        }

        .clothespin::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 2px;
          height: 15px;
          background: #333;
          border-radius: 1px;
        }

        .clothespin::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 8px;
          background: #654321;
          border-radius: 0 0 4px 4px;
        }

        .photo-content {
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(45deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
          border: 8px solid #333;
          border-radius: 4px;
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.6),
            inset 0 2px 4px rgba(255,255,255,0.1);
        }

        .photo-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
           font-family: 'Stranger-Things-Outlined', 'Benguiat-Bold', sans-serif;
    
          font-size: 2.2rem;
          color: #ccc;
          text-align: center;
          letter-spacing: 0.1em;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.8);
          z-index: 2;
          transition: all 0.5s ease;
        }

        .photo-frame.glowing .photo-text {
          color: #fff;
          text-shadow: 
            0 0 10px #fff,
            0 0 20px #fff,
            2px 2px 8px rgba(169, 12, 12, 0.8);
        }

        .photo-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(45deg, transparent 0%, rgba(139,0,0,0.1) 50%, transparent 100%),
            radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.3) 100%);
          transition: all 0.5s ease;
        }

        .photo-frame.glowing .photo-overlay {
          background: 
            linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%),
            radial-gradient(circle at center, rgba(255,255,255,0.05) 30%, transparent 100%);
        }

        .developing-effect {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
          transition: all 0.8s ease;
          z-index: 3;
        }

        .photo-frame.developing .developing-effect {
          left: 100%;
          animation: developingWave 3s ease-in-out;
        }

        @keyframes developingWave {
          0% { left: -100%; }
          50% { left: 0%; }
          100% { left: 100%; }
        }

        .red-light {
          position: fixed;
          top: 20px;
          left: 20px;
          width: 40px;
          height: 40px;
          background: radial-gradient(circle, #ff0000 0%, #8b0000 70%, transparent 100%);
          border-radius: 50%;
          box-shadow: 
            0 0 20px #ff0000,
            0 0 40px #8b0000;
          animation: redLightPulse 4s ease-in-out infinite;
        }

        @keyframes redLightPulse {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @media (max-width: 768px) {
          .title, .darkroom-title {
            font-size: 2rem;
          }
          
          .event-text {
            font-size: 1.8rem;
          }
          
          .photo-frame {
            width: 240px;
            height: 280px;
          }

          .photos-container {
            gap: 40px;
          }

          .switch-container {
            top: 10px;
            right: 10px;
          }

          .vintage-switch {
            width: 100px;
            height: 50px;
          }

          .switch-lever {
            width: 35px;
            height: 38px;
          }
        }
      `}</style>
{/* 
      {/* Vintage Switch
      <div className="switch-container">
        <div className="vintage-switch" onClick={handleSwitchToggle}>
          <div className={`switch-lever ${isLightsMode ? 'lights-mode' : 'dark-mode'} ${switchAnimating ? 'animating' : ''}`}></div>
          <div className="switch-labels">
            <span className={`switch-label ${isLightsMode ? 'active' : ''}`}></span>
            <span className={`switch-label ${!isLightsMode ? 'active' : ''}`}></span>
          </div>
        </div>
      </div> */}
       {/* <div className="switch-container">
      <div className="pull-switch" onClick={handlePull}>
        <div className="string"></div>
        <div className={`handle ${isPulling ? 'pulled' : ''} ${isLightsMode ? 'lights-mode' : 'dark-mode'}`}>
          <div className="handle-grip"></div>
        </div>
      </div>
      
      <style jsx>{`
        .switch-container {
          position: relative;
        }
        
        .pull-switch {
          position: relative;
          width: 40px;
          height: 80px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .string {
          width: 2px;
          height: 40px;
          background: #666;
          z-index:999999999;
          border-radius: 1px;
          box-shadow: 0 0 2px rgba(0,0,0,0.3);
        }
        
        .handle {
          width: 28px;
          height: 120px;
          background: linear-gradient(145deg, #f0f0f0, #d0d0d0);
          border-radius: 10px;
          border: 2px solid #999;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.8);
          z-index:9999999;
        }
        
        .handle.pulled {
          transform: translateY(15px);
        }
        
        .handle.lights-mode {
          background: linear-gradient(145deg, #fff, #f0f0f0);
          border-color: #ccc;
          box-shadow: 0 4px 8px rgba(0,0,0,0.15), inset 0 1px 2px rgba(255,255,255,0.9);
        }
        
        .handle.dark-mode {
          background: linear-gradient(145deg, #444, #333);
          border-color: #555;
          box-shadow: 0 4px 8px rgba(0,0,0,0.4), inset 0 1px 2px rgba(255,255,255,0.1);
        }
        
        .handle-grip {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 16px;
          height: 2px;
          background: #666;
          border-radius: 1px;
          box-shadow: 0 3px 0 #666, 0 6px 0 #666;
        }
        
        .handle.lights-mode .handle-grip {
          background: #999;
          box-shadow: 0 3px 0 #999, 0 6px 0 #999;
        }
        
        .handle.dark-mode .handle-grip {
          background: #aaa;
          box-shadow: 0 3px 0 #aaa, 0 6px 0 #aaa;
        }
        
        .pull-switch:hover .handle {
          transform: translateY(2px);
        }
        
        .pull-switch:hover .handle.pulled {
          transform: translateY(17px);
        }
      `}</style>
    </div> */}

      {/* Render appropriate section based on switch state */}
      {isLightsMode ? <EventsSectionTwo /> : <EventsSectionOne />}
    </div>
  );
};


export default EventsSection;