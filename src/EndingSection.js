import React from 'react';
import './EndingSection.css';

// SVGs
const WalkieTalkieSVG = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="10" y="6" width="12" height="20" rx="3" fill="#ff4444" stroke="#fff" strokeWidth="2"/>
    <rect x="14" y="2" width="4" height="8" rx="2" fill="#fff" stroke="#ff4444" strokeWidth="2"/>
    <rect x="13" y="20" width="6" height="4" rx="1" fill="#fff" />
    <circle cx="16" cy="16" r="2" fill="#fff" />
  </svg>
);

const RadioSVG = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="6" y="10" width="20" height="14" rx="3" fill="#fff" stroke="#ff4444" strokeWidth="2"/>
    <rect x="12" y="18" width="8" height="4" rx="1" fill="#ff4444" />
    <circle cx="22" cy="14" r="2" fill="#ff4444" />
    <rect x="15" y="4" width="2" height="8" rx="1" fill="#ff4444" />
  </svg>
);

const BicycleSVG = () => (
  <svg className="bicycle-bg" viewBox="0 0 200 80" fill="none">
    <circle cx="40" cy="60" r="18" stroke="#fff" strokeWidth="3" fill="none"/>
    <circle cx="160" cy="60" r="18" stroke="#fff" strokeWidth="3" fill="none"/>
    <rect x="38" y="40" width="80" height="6" rx="3" fill="#fff" opacity="0.3"/>
    <rect x="118" y="40" width="6" height="20" rx="3" fill="#fff" opacity="0.3"/>
    <rect x="80" y="20" width="6" height="20" rx="3" fill="#fff" opacity="0.3"/>
    <rect x="80" y="20" width="40" height="6" rx="3" fill="#fff" opacity="0.3"/>
  </svg>
);

const StrangerThingsFooter = () => (
  <footer className="st-footer">
    {/* Location Section */}
    <section className="st-section st-location">
      <div className="st-location-bg">
        <BicycleSVG />
      </div>
      <div className="st-location-grid">
        <div className="st-location-box" styles={{   backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="%23dc2626" stroke-width="0.5" opacity="0.3"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>')`}}>
          <div className="st-location-header">
            <svg width="24" height="24" fill="#ff4444" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <h3>LOCATION</h3>
          </div>
          <div className="st-location-text">
            <p className="dept">DEPARTMENT OF IT</p>
            <p className="college">ST JOSEPHS COLLEGE OF ENGINEERING</p>
            <p className="city">CHENNAI</p>
          </div>
        </div>
        <div className="st-map-box">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970.9426470501152!2d80.2173889852239!3d12.868810505433844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525b3b46334c29%3A0x314fab719337d299!2sDepartment%20of%20Information%20Technology!5e1!3m2!1sen!2sin!4v1754228241267!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>

    {/* Divider */}
    <div className="st-divider"></div>

    {/* Contact & Social Section */}
    <section className="st-section st-contact-social">
      <div className="st-contact">
        <div className="st-contact-icon"><WalkieTalkieSVG /></div>
        <div>
          <div className="st-contact-label">MOBILE FREQUENCY</div>
          <div className="st-contact-number">+91 98765 43210</div>
        </div>
      </div>
      <div className="st-social">
        <div className="st-social-icon"><RadioSVG /></div>
        <div className="st-social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>

    {/* Divider */}
    <div className="st-divider"></div>

    {/* Call to Action */}
    <section className="st-section st-cta">
      <h1 className="st-cta-title">JOIN THE RESISTANCE</h1>
      <p className="st-cta-subtitle">
        "We're not kids anymore... What did you think, we were just gonna sit in our basement all day?"
      </p>
      <button className="st-cta-btn">ENTER THE UPSIDE DOWN</button>
    </section>

    {/* Bottom Accent */}
    <div className="st-bottom-accent">
      [ UPSIDE DOWN NETWORK - ESTABLISHED 1983 ]
    </div>
  </footer>
);

export default StrangerThingsFooter;