import React, { useState } from 'react';

const Switch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <div className="switch-wrapper">
        <label className="rocker rocker-small" htmlFor="switch-yes-no">
          <input
            type="checkbox"
            id="switch-yes-no"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <span className="switch-left">Yes</span>
          <span className="switch-right">No</span>
        </label>
      </div>

      <style>{`
        .switch-wrapper input[type="checkbox"] {
          /* Keep input in the layout but invisible and covering full area */
          position: absolute;
          opacity: 0;
          width: 7em;
          height: 4em;
          margin: 0;
          cursor: pointer;
          z-index: 3;
          top: 0;
          left: 0;
        }

        .switch-wrapper *,
        .switch-wrapper ::after,
        .switch-wrapper ::before {
          box-sizing: border-box;
        }

        .switch-wrapper .rocker {
          display: inline-block;
          position: relative;
          font-size: 2em;
          font-weight: bold;
          text-align: center;
          text-transform: uppercase;
          color: #888;
          width: 7em;
          height: 4em;
          overflow: hidden;
          border-bottom: 0.5em solid #eee;
          user-select: none;
        }

        .switch-wrapper .rocker-small {
          font-size: 0.75em;
        }

        .switch-wrapper .rocker::before {
          content: "";
          position: absolute;
          top: 0.5em;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #999;
          border: 0.5em solid #eee;
          border-bottom: 0;
          pointer-events: none;
        }

        .switch-wrapper .switch-left,
        .switch-wrapper .switch-right {
          cursor: pointer;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 2.5em;
          width: 3em;
          transition: 0.2s;
          user-select: none;
          pointer-events: none; /* Prevent interfering with input click */
        }

        .switch-wrapper .switch-left {
          height: 2.4em;
          width: 2.75em;
          left: 0.85em;
          bottom: 0.4em;
          background-color: #ddd;
          transform: rotate(15deg) skewX(15deg);
        }

        .switch-wrapper .switch-right {
          right: 0.5em;
          bottom: 0;
          background-color: #ff6761;
          color: #fff;
        }

        .switch-wrapper .switch-left::before,
        .switch-wrapper .switch-right::before {
          content: "";
          position: absolute;
          width: 0.4em;
          height: 2.45em;
          bottom: -0.45em;
          background-color: #ccc;
          transform: skewY(-65deg);
          pointer-events: none;
        }

        .switch-wrapper .switch-left::before {
          left: -0.4em;
        }

        .switch-wrapper .switch-right::before {
          right: -0.375em;
          background-color: transparent;
          transform: skewY(65deg);
        }

        /* Checked styles */
        .switch-wrapper input:checked + .switch-left {
          background-color: #474bff;
          color: #fff;
          bottom: 0;
          left: 0.5em;
          height: 2.5em;
          width: 3em;
          transform: rotate(0deg) skewX(0deg);
        }

        .switch-wrapper input:checked + .switch-left::before {
          background-color: transparent;
          width: 3.0833em;
        }

        .switch-wrapper input:checked + .switch-left + .switch-right {
          background-color: #ddd;
          color: #888;
          bottom: 0.4em;
          right: 0.8em;
          height: 2.4em;
          width: 2.75em;
          transform: rotate(-15deg) skewX(-15deg);
        }

        .switch-wrapper input:checked + .switch-left + .switch-right::before {
          background-color: #ccc;
        }

        /* Focus styles */
        .switch-wrapper input:focus + .switch-left {
          color: #333;
        }

        .switch-wrapper input:checked:focus + .switch-left {
          color: #fff;
        }

        .switch-wrapper input:focus + .switch-left + .switch-right {
          color: #fff;
        }

        .switch-wrapper input:checked:focus + .switch-left + .switch-right {
          color: #333;
        }
      `}</style>
    </>
  );
};

export default Switch;
