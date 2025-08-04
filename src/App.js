import React, { useState } from 'react';
import BloodSplash from './bloodsplah';
import {Navbartab} from './Navbar'; // Assuming Navbartab is exported from Navbar.js
import './App.css'; // Assuming you have a CSS file for styling
import  EventsSection  from './Eventssection';
import StrangerThingsFooter from './EndingSection';
import HeroSection from './HeroSection';
import { RegisterSection } from './RegisterSection';
import ComingSoon from './ComingSoon';
import FloatingParticles from './FloatingParticles';
function App() {
  const [splashes, setSplashes] = useState([]);
  
  // Function to generate a random splash index (0,1,2)
  const getRandomSplashIndex = () => Math.floor(Math.random() * 3);

  // OnClick handler on the white div area
  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // Get mouse position relative to the container div, so positioning works correctly
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const splashIndex = getRandomSplashIndex();
    const id = Math.random().toString(36).substring(2, 9);
    setSplashes((prev) => [...prev, { x, y, splashIndex, id }]);
  };

  // Remove splash after animation ends
  const removeSplash = (id) => {
    setSplashes((prev) => prev.filter((splash) => splash.id !== id));
  };

  return (
    <div >
       
      <div className="app-container" onClick={handleClick}>
      {/* <Navbartab />  */}
      {/* Move Navbartab to top */}
      <div className="content-wrapper">

          {/* <section id="home"><HeroSection /></section> */}

          <ComingSoon />

          <FloatingParticles />
          {/* <section id="about"><EventsSection /></section>
          <section id="register"><RegisterSection /></section>
          <section id="contact"><StrangerThingsFooter /></section> */}

        </div>
      
      {/* Blood splashes */}
      {splashes.map(({ x, y, splashIndex, id }) => (
        <BloodSplash
          key={id}
          x={x}
          y={y}
          splashIndex={splashIndex}
          onAnimationEnd={() => removeSplash(id)}
        />
      ))}
    </div>
    </div>
  );
}

export default App;
