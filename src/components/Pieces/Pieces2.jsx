/* Abstract chess piece SVGs */

const S = { width: '100%', height: '100%' };

export function PawnSVG({ color }) {
  const fill   = color === 'w' ? '#dde6f0' : '#1c2540';
  const stroke = color === 'w' ? '#7a8fa8' : '#60a5fa';
  const hi     = color === 'w' ? 'rgba(255,255,255,0.55)' : 'rgba(96,165,250,0.18)';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={S}>
      {/* Head */}
      <circle cx="22.5" cy="10.5" r="6.5" fill={fill} stroke={stroke} strokeWidth="1.4"/>
      {/* Neck — tapered */}
      <path d="M19 17 C18 19 17 21 16.5 23 L28.5 23 C28 21 27 19 26 17 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Collar ring */}
      <rect x="15.5" y="22.5" width="14" height="3" rx="1.5" fill={fill} stroke={stroke} strokeWidth="1.2"/>
      {/* Body */}
      <path d="M15 25.5 C14 28 13.5 31 14 34 L31 34 C31.5 31 31 28 30 25.5 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Base */}
      <path d="M10 38 Q10 34 22.5 34 Q35 34 35 38 L33 40 L12 40 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Highlight */}
      <ellipse cx="20" cy="8.5" rx="3" ry="2" fill={hi} transform="rotate(-20,20,8.5)"/>
    </svg>
  );
}

export function RookSVG({ color }) {
  const fill   = color === 'w' ? '#dde6f0' : '#1c2540';
  const stroke = color === 'w' ? '#7a8fa8' : '#60a5fa';
  const hi     = color === 'w' ? 'rgba(255,255,255,0.4)' : 'rgba(96,165,250,0.15)';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={S}>
      {/* Three merlons (battlements) */}
      <rect x="9"  y="5" width="7" height="10" rx="1" fill={fill} stroke={stroke} strokeWidth="1.3"/>
      <rect x="19" y="5" width="7" height="10" rx="1" fill={fill} stroke={stroke} strokeWidth="1.3"/>
      <rect x="29" y="5" width="7" height="10" rx="1" fill={fill} stroke={stroke} strokeWidth="1.3"/>
      {/* Battlement floor connecting merlons */}
      <rect x="9" y="14" width="27" height="3" fill={fill} stroke={stroke} strokeWidth="1.3"/>
      {/* Body — slightly tapered */}
      <path d="M11 17 L10 32 L35 32 L34 17 Z" fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Waist ring */}
      <rect x="9.5" y="26" width="26" height="3" rx="0.5" fill={fill} stroke={stroke} strokeWidth="1.1"/>
      {/* Base */}
      <path d="M7 36 Q7 32 22.5 32 Q38 32 38 36 L36 40 L9 40 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Embrasures (gaps between merlons) */}
      <rect x="16" y="5" width="3" height="10" fill={color === 'w' ? '#b8cad8' : '#0f1520'}/>
      <rect x="26" y="5" width="3" height="10" fill={color === 'w' ? '#b8cad8' : '#0f1520'}/>
      {/* Highlight */}
      <rect x="12" y="18" width="4" height="12" rx="1" fill={hi}/>
    </svg>
  );
}

export function KnightSVG({ color }) {
  const fill   = color === 'w' ? '#dde6f0' : '#1c2540';
  const stroke = color === 'w' ? '#7a8fa8' : '#60a5fa';
  const hi     = color === 'w' ? 'rgba(255,255,255,0.45)' : 'rgba(96,165,250,0.15)';
  const eye    = color === 'w' ? '#2d4a6e' : '#60a5fa';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={S}>
      {/* Base */}
      <path d="M7 38 Q7 33 22.5 33 Q38 33 38 38 L36 41 L9 41 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Neck/chest */}
      <path d="M14 33 C13 27 13 22 15 18 L31 24 L30 33 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Head — horse-like profile facing left */}
      <path d="M15 18 C14 14 14 10 17 8 C19 6 22 5.5 25 6.5 C28 7.5 30 9 31 11
               C32 13 31.5 15 30 16 C31 17 32 18.5 31 20 C30 21.5 28 22 26 22
               C24 22.5 22 23 20 23.5 C17 24 14.5 23 14 21 C13.5 19.5 14.2 18.5 15 18 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Mane suggestion */}
      <path d="M17 8 C16 7 16 5 18 4.5 C19 4.2 20 5 20 6 C21 5 22 4 23 4.5
               C24 5 24 6.5 23.5 7 C25 6.5 26.5 6.5 27 7.5"
        fill="none" stroke={stroke} strokeWidth="1.1" strokeLinecap="round"/>
      {/* Nose bump */}
      <path d="M14 21 C13 22 13.5 24 15 24.5" fill="none" stroke={stroke} strokeWidth="1" strokeLinecap="round"/>
      {/* Eye */}
      <circle cx="26.5" cy="11" r="2" fill={eye}/>
      <circle cx="27" cy="10.5" r="0.7" fill="rgba(255,255,255,0.8)"/>
      {/* Nostril */}
      <circle cx="16" cy="22.5" r="1.2" fill={stroke} opacity="0.6"/>
      {/* Highlight on head */}
      <path d="M22 6.5 C24 6 26 7 27 9" fill="none" stroke={hi} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function BishopSVG({ color }) {
  const fill   = color === 'w' ? '#dde6f0' : '#1c2540';
  const stroke = color === 'w' ? '#7a8fa8' : '#60a5fa';
  const hi     = color === 'w' ? 'rgba(255,255,255,0.5)' : 'rgba(96,165,250,0.18)';
  const tip    = color === 'w' ? '#f59e0b' : '#7c3aed';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={S}>
      {/* Finial ball on top */}
      <circle cx="22.5" cy="5.5" r="2.8" fill={tip} stroke={stroke} strokeWidth="1"/>
      {/* Mitre (tall pointed hat shape) */}
      <path d="M22.5 8 C20 10 16 15 15 20 C14.5 23 15 25 16 26 L29 26 C30 25 30.5 23 30 20 C29 15 25 10 22.5 8 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Mitre band across middle */}
      <path d="M15.5 21 L29.5 21" stroke={stroke} strokeWidth="1.3" strokeLinecap="round"/>
      {/* Collar */}
      <path d="M14 26 C13.5 27.5 13.5 28.5 14.5 29.5 L30.5 29.5 C31.5 28.5 31.5 27.5 31 26 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Body */}
      <path d="M14.5 29.5 C13.5 31 13 33 13.5 35 L31.5 35 C32 33 31.5 31 30.5 29.5 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Base */}
      <path d="M8 39 Q8 35 22.5 35 Q37 35 37 39 L35 41 L10 41 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Highlight */}
      <path d="M20 10 C19 13 18 17 18 20" fill="none" stroke={hi} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function QueenSVG({ color }) {
  const fill   = color === 'w' ? '#dde6f0' : '#1c2540';
  const stroke = color === 'w' ? '#7a8fa8' : '#60a5fa';
  const hi     = color === 'w' ? 'rgba(255,255,255,0.45)' : 'rgba(96,165,250,0.15)';
  const jewel  = color === 'w' ? '#f59e0b' : '#7c3aed';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={S}>
      {/* Five crown points with orb tips */}
      <circle cx="22.5" cy="4"  r="2.8" fill={jewel} stroke={stroke} strokeWidth="1"/>
      <circle cx="9"    cy="9"  r="2.4" fill={jewel} stroke={stroke} strokeWidth="1"/>
      <circle cx="36"   cy="9"  r="2.4" fill={jewel} stroke={stroke} strokeWidth="1"/>
      <circle cx="14"   cy="6.5" r="2"  fill={jewel} stroke={stroke} strokeWidth="0.9"/>
      <circle cx="31"   cy="6.5" r="2"  fill={jewel} stroke={stroke} strokeWidth="0.9"/>
      {/* Crown body — scalloped top */}
      <path d="M8 28 L9.5 11 L14 18 L18 8.5 L22.5 14 L27 8.5 L31 18 L35.5 11 L37 28 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Collar band */}
      <rect x="8" y="27.5" width="29" height="3.5" rx="0.5" fill={fill} stroke={stroke} strokeWidth="1.2"/>
      {/* Body */}
      <path d="M9.5 31 C9 33 9 35 10 37 L35 37 C36 35 36 33 35.5 31 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Base */}
      <path d="M6 41 Q6 37 22.5 37 Q39 37 39 41 L37 43 L8 43 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Interior cross-hatch detail on crown */}
      <path d="M14 28 L16 19 M22.5 28 L22.5 16 M31 28 L29 19"
        fill="none" stroke={stroke} strokeWidth="0.7" strokeOpacity="0.5"/>
      {/* Highlight */}
      <path d="M13 20 L12 26" fill="none" stroke={hi} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function KingSVG({ color }) {
  const fill   = color === 'w' ? '#dde6f0' : '#1c2540';
  const stroke = color === 'w' ? '#7a8fa8' : '#60a5fa';
  const hi     = color === 'w' ? 'rgba(255,255,255,0.45)' : 'rgba(96,165,250,0.15)';
  const cross  = color === 'w' ? '#f59e0b' : '#7c3aed';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={S}>
      {/* Cross on top */}
      <rect x="20.5" y="1"  width="4" height="12" rx="1.5" fill={cross} stroke={stroke} strokeWidth="0.8"/>
      <rect x="15"   y="4.5" width="15" height="4" rx="1.5" fill={cross} stroke={stroke} strokeWidth="0.8"/>
      {/* Crown rim just below cross */}
      <rect x="14" y="13" width="17" height="3" rx="1" fill={fill} stroke={stroke} strokeWidth="1.2"/>
      {/* Three small crown points */}
      <path d="M14 13 L14 9 L18 13 M22.5 13 L22.5 8 L27 13 M31 13 L31 9 L35 13"
        fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Collar */}
      <path d="M13 16 C12.5 18 12.5 19.5 14 20.5 L31 20.5 C32.5 19.5 32.5 18 32 16 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" strokeLinejoin="round"/>
      {/* Body */}
      <path d="M14 20.5 C12.5 23 11.5 27 12 32 L33 32 C33.5 27 32.5 23 31 20.5 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Waist ring */}
      <rect x="12.5" y="27" width="20" height="2.5" rx="0.5" fill={fill} stroke={stroke} strokeWidth="1"/>
      {/* Base */}
      <path d="M7 37 Q7 32 22.5 32 Q38 32 38 37 L36 40 L9 40 Z"
        fill={fill} stroke={stroke} strokeWidth="1.3" strokeLinejoin="round"/>
      {/* Highlight strip on body */}
      <path d="M15 22 C15 25 15 29 16 31" fill="none" stroke={hi} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
