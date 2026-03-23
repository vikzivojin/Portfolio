/* All pieces rendered as inline SVG for crisp scaling */

export function PawnSVG({ color }) {
  const fill   = color === 'w' ? '#eef1f6' : '#1a1a2e';
  const stroke = color === 'w' ? '#94a3b8' : '#60a5fa';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <circle cx="22.5" cy="11" r="7" fill={fill} stroke={stroke} strokeWidth="1.5"/>
      <path d="M15 36 Q17 26 22.5 22 Q28 26 30 36 Z" fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="11" y="36" width="23" height="4" rx="2" fill={fill} stroke={stroke} strokeWidth="1.5"/>
    </svg>
  );
}

export function RookSVG({ color }) {
  const fill   = color === 'w' ? '#eef1f6' : '#1a1a2e';
  const stroke = color === 'w' ? '#94a3b8' : '#60a5fa';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect x="9"  y="8"  width="5" height="8" rx="1" fill={fill} stroke={stroke} strokeWidth="1.5"/>
      <rect x="20" y="8"  width="5" height="8" rx="1" fill={fill} stroke={stroke} strokeWidth="1.5"/>
      <rect x="31" y="8"  width="5" height="8" rx="1" fill={fill} stroke={stroke} strokeWidth="1.5"/>
      <rect x="9"  y="16" width="27" height="16" rx="1" fill={fill} stroke={stroke} strokeWidth="1.5"/>
      <rect x="7"  y="32" width="31" height="5" rx="2" fill={fill} stroke={stroke} strokeWidth="1.5"/>
    </svg>
  );
}

export function KnightSVG({ color }) {
  const fill   = color === 'w' ? '#eef1f6' : '#1a1a2e';
  const stroke = color === 'w' ? '#94a3b8' : '#60a5fa';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <path d="M16 36 C14 30 12 24 14 18 C16 12 20 8 26 7 C28 7 30 8 29 10 C32 9 34 12 32 15 C36 16 36 22 33 25 C31 28 29 32 30 36 Z"
        fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="9" y="36" width="27" height="5" rx="2" fill={fill} stroke={stroke} strokeWidth="1.5"/>
      <circle cx="24" cy="13" r="2" fill={stroke}/>
    </svg>
  );
}

export function BishopSVG({ color }) {
  const fill   = color === 'w' ? '#eef1f6' : '#1a1a2e';
  const stroke = color === 'w' ? '#94a3b8' : '#60a5fa';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <circle cx="22.5" cy="8" r="3.5" fill={fill} stroke={stroke} strokeWidth="1.5"/>
      <path d="M16 34 C16 24 14 18 22.5 10 C31 18 29 24 29 34 Z" fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round"/>
      <line x1="15" y1="22" x2="30" y2="22" stroke={stroke} strokeWidth="1.2"/>
      <rect x="9" y="34" width="27" height="4" rx="2" fill={fill} stroke={stroke} strokeWidth="1.5"/>
    </svg>
  );
}

export function QueenSVG({ color }) {
  const fill   = color === 'w' ? '#eef1f6' : '#1a1a2e';
  const stroke = color === 'w' ? '#94a3b8' : '#60a5fa';
  const crown  = color === 'w' ? '#f59e0b' : '#7c3aed';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <circle cx="8"    cy="12" r="3.5" fill={crown} stroke={stroke} strokeWidth="1"/>
      <circle cx="22.5" cy="8"  r="3.5" fill={crown} stroke={stroke} strokeWidth="1"/>
      <circle cx="37"   cy="12" r="3.5" fill={crown} stroke={stroke} strokeWidth="1"/>
      <path d="M7 34 L10 16 L22.5 26 L35 16 L38 34 Z" fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="7" y="34" width="31" height="5" rx="2" fill={fill} stroke={stroke} strokeWidth="1.5"/>
    </svg>
  );
}

export function KingSVG({ color }) {
  const fill   = color === 'w' ? '#eef1f6' : '#1a1a2e';
  const stroke = color === 'w' ? '#94a3b8' : '#60a5fa';
  const cross  = color === 'w' ? '#f59e0b' : '#7c3aed';
  return (
    <svg viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
      <rect x="19.5" y="3"  width="6" height="13" rx="1.5" fill={cross}/>
      <rect x="14"   y="7"  width="17" height="5"  rx="1.5" fill={cross}/>
      <path d="M10 36 C10 26 14 20 22.5 17 C31 20 35 26 35 36 Z" fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round"/>
      <rect x="7" y="36" width="31" height="5" rx="2" fill={fill} stroke={stroke} strokeWidth="1.5"/>
    </svg>
  );
}
