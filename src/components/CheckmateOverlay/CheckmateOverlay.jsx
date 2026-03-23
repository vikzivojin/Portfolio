import { useEffect, useRef } from 'react';
import './CheckmateOverlay.css';

function randomBetween(a, b) { return a + Math.random() * (b - a); }

function Confetti({ canvasRef }) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const COLORS = ['#3b82f6','#60a5fa','#f59e0b','#eef1f6','#94a3b8','#1d4ed8'];
    const particles = Array.from({ length: 120 }, () => ({
      x: randomBetween(0, canvas.width),
      y: randomBetween(-200, -10),
      w: randomBetween(6, 14),
      h: randomBetween(4, 9),
      rot: randomBetween(0, Math.PI * 2),
      rotV: randomBetween(-0.08, 0.08),
      vx: randomBetween(-2, 2),
      vy: randomBetween(2, 6),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: 1,
    }));

    let raf;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = false;
      for (const p of particles) {
        p.x   += p.vx;
        p.y   += p.vy;
        p.vy  += 0.12;
        p.rot += p.rotV;
        if (p.y > canvas.height - 40) p.alpha = Math.max(0, p.alpha - 0.02);
        if (p.alpha > 0) alive = true;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
      if (alive) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [canvasRef]);

  return null;
}

export default function CheckmateOverlay({ onClose }) {
  const canvasRef = useRef(null);

  return (
    <div className="checkmate-overlay">
      <canvas ref={canvasRef} className="checkmate-canvas" />
      <Confetti canvasRef={canvasRef} />

      <div className="checkmate-content">
        <div className="checkmate-symbol">♔</div>
        <div className="checkmate-word">Checkmate</div>
        <div className="checkmate-line" />
        <p className="checkmate-msg">
          Qh8# — You've found the winning move!<br/>
          My portfolio is yours to explore.
        </p>
        <button className="checkmate-btn" onClick={onClose}>
          Enter Portfolio →
        </button>
      </div>
    </div>
  );
}
