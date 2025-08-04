import React from 'react';
import './CominSoon.css';

export const SJCELogo = () => (
  <img
    src="/assets/sjce-logo.png"
    alt="SJCE Logo"
    className="hero-logo"
    style={{ width: 120, height: 120, objectFit: 'contain', marginRight: 12 }}
  />
);

const ComingSoon = () => {
  return (
    <section className="hero-section1">
      {/* Responsive background video */}
       <video
          className="hero-bg-video1"
          src="/assets/mindflayer.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      <div className="hero-bg-video-wrapper1">
        <video
          className="hero-bg-video1"
          src="/assets/mindflayer.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <div className="hero-content">
        {/* Move college title to top */}
        <div className="hero-title-row" style={{ marginBottom: '1.2rem', marginTop: 0 }}>
          <SJCELogo />
          <span className="hero-title">ST. JOSEPH'S COLLEGE OF ENGINEERING</span>
        </div>
        <div className="hero-title-main">
          <div className="hero-dept">DEPARTMENT OF INFORMATION TECHNOLOGY AND CYBERSECURITY <br/>PRESENTS</div>
          <div className="hero-innovit">INNOVIT '25</div>
        </div>
        <div className="hero-comingsoon-anim">
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;