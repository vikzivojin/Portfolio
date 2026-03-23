import { useState, useEffect } from 'react';
import './Splash.css';

export default function Splash({ onEnter }) {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Enter' || e.key === ' ') handleEnter(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  const handleEnter = () => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(onEnter, 750);
  };

  return (
    <div className={`splash ${leaving ? 'splash--leaving' : ''}`}>
      {/* Animated diagonal board pattern */}
      <div className="splash__board-bg">
        {Array.from({ length: 64 }, (_, i) => {
          const col = i % 8;
          const row = Math.floor(i / 8);
          return (
            <div
              key={i}
              className={`splash__sq ${(col + row) % 2 === 0 ? 'splash__sq--light' : 'splash__sq--dark'}`}
              style={{ animationDelay: `${(col + row) * 0.04}s` }}
            />
          );
        })}
      </div>

      <div className="splash__vignette" />

      <div className="splash__content">
        <div className="splash__eyebrow">Portfolio</div>

        <div className="splash__king-icon">♔</div>

        <h1 className="splash__name">
          Viktor<br />
          <span className="splash__name-accent">Zivojinovic</span>
        </h1>

        <div className="splash__divider">
          <span className="splash__divider-line" />
          <span className="splash__divider-diamond" />
          <span className="splash__divider-line" />
        </div>

        <p className="splash__subtitle">
          Software Developer
        </p>

        <button className="splash__btn" onClick={handleEnter}>
          Enter
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* <p className="splash__hint">or press Enter</p> */}
      </div>

      {/* Corner accents */}
      <div className="splash__corner splash__corner--tl" />
      <div className="splash__corner splash__corner--br" />
    </div>
  );
}
