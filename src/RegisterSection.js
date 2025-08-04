import React from 'react';
import './RegisterSection.css';

const PortalSVG = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="16" rx="14" ry="8" fill="#e50914" opacity="0.7"/>
    <ellipse cx="16" cy="16" rx="10" ry="5" fill="#fff" opacity="0.13"/>
    <ellipse cx="16" cy="16" rx="7" ry="2.5" fill="#e50914" opacity="0.5"/>
    <ellipse cx="16" cy="16" rx="3" ry="1" fill="#fff" opacity="0.4"/>
  </svg>
);

export const RegisterSection = () => {
  return (
    <section className="register-section">
      {/* Black padding background */}
      <div className="register-bg"></div>
      {/* Video */}
      <div className="register-video-wrapper">
        <video
          className="register-bg-video"
          autoPlay
          loop
          muted
          playsInline
          src="/assets/billycar.mp4"
        />
      </div>
      {/* Content */}
      <div className="register-content">
        <h2 className="register-title">Ready to Enter the Upside Down?</h2>
        <p className="register-desc">
          Join us for a Stranger Things experience. Register now and be part of the adventure!
        </p>


        <a
          className="register-button"
          href="https://forms.gle/W15XosJ5qzrWvwKG8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="register-btn-svg"><PortalSVG /></span>
          Register
        </a>
      </div>
    </section>
  );
};