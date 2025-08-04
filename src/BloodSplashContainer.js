import React, { useRef } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// ...BLOOD_SPLASHES as functions (see previous response)...

function BloodSplashContainer({ children }) {
  const splashLayer = useRef(null);
  const recentIndices = useRef([]);

  function getUniqueSplashIndex() {
    let idx = Math.floor(Math.random() * BLOOD_SPLASHES.length);
    while (recentIndices.current.includes(idx)) {
      idx = Math.floor(Math.random() * BLOOD_SPLASHES.length);
    }
    recentIndices.current.push(idx);
    if (recentIndices.current.length > 3) recentIndices.current.shift();
    return idx;
  }

  function handleClick(e) {
    if (e.button !== 0) return;
    const x = e.clientX;
    const y = e.clientY;
    const idx = getUniqueSplashIndex();

    const splashDiv = document.createElement('div');
    splashDiv.className = 'blood-splash';
    splashDiv.style.position = 'absolute';
    splashDiv.style.left = `${x}px`;
    splashDiv.style.top = `${y}px`;

    splashDiv.innerHTML = renderToStaticMarkup(BLOOD_SPLASHES[idx]());
    splashDiv.style.animation = 'appearBlood 0.7s forwards';

    setTimeout(() => {
      if (splashDiv.parentNode) splashDiv.parentNode.removeChild(splashDiv);
    }, 700);

    splashLayer.current.appendChild(splashDiv);
  }

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden',
      cursor: 'crosshair'
    }} onMouseDown={handleClick}>
      {children}
      <div ref={splashLayer}
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 9999,
        }} />
    </div>
  );
}

export default BloodSplashContainer;
