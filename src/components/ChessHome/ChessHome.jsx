import { useState, useCallback, useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { PawnSVG, RookSVG, KnightSVG, BishopSVG, QueenSVG, KingSVG } from '../Pieces/Pieces';
import CheckmateOverlay from '../CheckmateOverlay/CheckmateOverlay';
import headshotImg from '../../assets/headshot.jpeg';
import './ChessHome.css';

/* ── Board helpers ──────────────────────────────────────────── */
const fileIdx = { a:0,b:1,c:2,d:3,e:4,f:5,g:6,h:7 };
function sq(file, rank) { return [fileIdx[file], 8 - rank]; }

// Navigation map: wR now → interests (was wQ)
const NAV_MAP = {
  wK: '/experience',
  wR: '/interests',
  bK: '/portfolio',
  bQ: '/about',
  wB: '/contact',
};

const PAGE_NAMES = {
  wK: 'Experience',
  wR: 'Interests',
  bK: 'Portfolio',
  bQ: 'About Me',
  wB: 'Contact Me',
};

const LEGEND_GLYPHS = {
  wK: '♔', wR: '♖', bK: '♚', bQ: '♛', wB: '♗',
};

const INITIAL_PIECES = [
  { id:'wPa', color:'w', type:'P', pos: sq('a',2) },
  { id:'wPb', color:'w', type:'P', pos: sq('b',2) },
  { id:'wPc', color:'w', type:'P', pos: sq('c',2) },
  { id:'wPf', color:'w', type:'P', pos: sq('f',2) },
  { id:'wPg', color:'w', type:'P', pos: sq('g',3) },
  { id:'wPh', color:'w', type:'P', pos: sq('h',4) },
  { id:'wK',  color:'w', type:'K', pos: sq('c',1) },
  { id:'wR',  color:'w', type:'R', pos: sq('d',1) },
  { id:'wB',  color:'w', type:'B', pos: sq('c',3) },
  { id:'wQ',  color:'w', type:'Q', pos: sq('d',4) },
  { id:'bPa', color:'b', type:'P', pos: sq('a',7) },
  { id:'bPb', color:'b', type:'P', pos: sq('b',7) },
  { id:'bPd', color:'b', type:'P', pos: sq('d',7) },
  { id:'bPe', color:'b', type:'P', pos: sq('e',6) },
  { id:'bPf', color:'b', type:'P', pos: sq('f',7) },
  { id:'bPg', color:'b', type:'P', pos: sq('g',6) },
  { id:'bPh', color:'b', type:'P', pos: sq('h',7) },
  { id:'bK',  color:'b', type:'K', pos: sq('g',8) },
  { id:'bR',  color:'b', type:'R', pos: sq('f',8) },
  { id:'bN',  color:'b', type:'N', pos: sq('e',7) },
  { id:'bN',  color:'b', type:'N', pos: sq('f',5) },
  { id:'bQ',  color:'b', type:'Q', pos: sq('c',6) },
];

const PIECE_COMPONENTS = { P: PawnSVG, R: RookSVG, N: KnightSVG, B: BishopSVG, Q: QueenSVG, K: KingSVG };

// Legal queen squares (the explicit list you provided)
const QUEEN_LEGAL = new Set([
  'a4','b4','c4','e4','f4','g4',   // rank 4 horizontals
  'd2','d3','d4', 'd5','d6','d7',         // d-file verticals
  'c5','b6','a7','e3','e5','f6','g7','h8',         // diagonals
].map(n => `${fileIdx[n[0]]},${8 - parseInt(n[1])}`));

// Checkmate square: h8 = [7, 0]
const CHECKMATE_SQ = sq('h', 8);

export default function ChessHome() {
  const navigate = useNavigate();
  const [pieces, setPieces]             = useState(INITIAL_PIECES);
  const [hoveredSq, setHoveredSq]       = useState(null);
  const [hoveredPiece, setHoveredPiece] = useState(null);
  const [selected, setSelected]         = useState(null);
  const [tooltip, setTooltip]           = useState(null);
  const [checkmate, setCheckmate]       = useState(false);
  const [queenMoved, setQueenMoved]     = useState(false);
  const boardRef = useRef(null);

  const getPieceAt = useCallback((col, row) =>
    pieces.find(p => p.pos[0] === col && p.pos[1] === row), [pieces]);

  const isNavPiece = (id) => !!NAV_MAP[id];

  const isQueenLegalSq = (col, row) => QUEEN_LEGAL.has(`${col},${row}`);

  const handleSqEnter = (col, row) => {
    setHoveredSq([col, row]);
    const p = getPieceAt(col, row);
    if (p && isNavPiece(p.id)) setHoveredPiece(p.id);
    else setHoveredPiece(null);
  };

  const handleSqLeave = () => {
    setHoveredSq(null);
    setHoveredPiece(null);
    setTooltip(null);
  };

  const handleBoardMouseMove = (e) => {
    if (hoveredPiece) {
      const rect = boardRef.current?.getBoundingClientRect();
      if (rect) {
        setTooltip({ x: e.clientX - rect.left, y: e.clientY - rect.top - 16, text: PAGE_NAMES[hoveredPiece] });
      }
    } else {
      setTooltip(null);
    }
  };

  const handleSqClick = (col, row) => {
    const clickedPiece = getPieceAt(col, row);

    if (selected === 'wQ') {
      // Only allow legal squares
      if (!isQueenLegalSq(col, row)) {
        setSelected(null);
        return;
      }
      const isCapture = clickedPiece && clickedPiece.color === 'b';
      const newPos = [col, row];

      setPieces(prev => {
        let updated = prev.map(p => p.id === 'wQ' ? { ...p, pos: newPos } : p);
        if (isCapture) updated = updated.filter(p => !(p.pos[0] === col && p.pos[1] === row && p.id !== 'wQ'));
        return updated;
      });

      setSelected(null);
      setQueenMoved(true);

      if (newPos[0] === CHECKMATE_SQ[0] && newPos[1] === CHECKMATE_SQ[1]) {
        setTimeout(() => setCheckmate(true), 400);
      }
      return;
    }

    if (clickedPiece?.id === 'wQ') {
      setSelected('wQ');
      return;
    }

    if (clickedPiece && isNavPiece(clickedPiece.id)) {
      navigate(NAV_MAP[clickedPiece.id]);
      return;
    }

    setSelected(null);
  };

  const isLight       = (col, row) => (col + row) % 2 === 0;
  const isNavSq       = (col, row) => { const p = getPieceAt(col, row); return p && isNavPiece(p.id); };
  const isSelectedSq  = (col, row) => { if (!selected) return false; const p = getPieceAt(col, row); return p?.id === selected; };
  const isQueenTarget = (col, row) => {
    if (selected !== 'wQ') return false;
    if (!isQueenLegalSq(col, row)) return false;
    const p = getPieceAt(col, row);
    return !p || p.color === 'b';
  };

  const files = ['a','b','c','d','e','f','g','h'];
  const ranks = [8,7,6,5,4,3,2,1];

  return (
    <div className="chess-home">
      {/* ── Left panel ── */}
      <div className="chess-home__panel chess-home__panel--left">
        <div className="chess-home__brand">
          <div className="chess-home__brand-vz">VZ</div>
          <div className="chess-home__brand-name">Viktor<br/>Zivojinovic</div>
        </div>
        <div className="chess-home__headshot-wrap">
          <img src={headshotImg} alt="Viktor Zivojinovic" className="chess-home__headshot" />
        </div>
        <div className="chess-home__tagline">
          <p>Benefits &amp; Data Specialist</p>
          <p>→ Software Developer</p>
        </div>
        <div className="chess-home__legend">
          {Object.entries(PAGE_NAMES).map(([id, name]) => (
            <div key={id} className="chess-home__legend-item">
                <span className={`chess-home__legend-color chess-home__legend-color--${id.startsWith('w') ? 'white' : 'black'}`} />
                <span className="chess-home__legend-piece">{LEGEND_GLYPHS[id]}</span>
                <NavLink to={NAV_MAP[id]}><span className="chess-home__legend-name">{name}</span></NavLink>
            </div>
          ))}
          <div className="chess-home__legend-item chess-home__legend-item--secret">
            <span className="chess-home__legend-color chess-home__legend-color--white" />
            <span className="chess-home__legend-piece">♕</span>
            <span className="chess-home__legend-name">Find the checkmate…</span>
          </div>
        </div>
      </div>

      {/* ── Board ── */}
      <div className="chess-home__board-wrap">
        {/* "Click a piece to navigate" above the board */}
        <div className="chess-home__board-hint">
          <span className="chess-home__hint-diamond" />
          <span>Click a piece to navigate</span>
          <span className="chess-home__hint-diamond" />
        </div>

        <div
          className="chess-home__board"
          ref={boardRef}
          onMouseMove={handleBoardMouseMove}
          onMouseLeave={handleSqLeave}
        >
          {tooltip && (
            <div className="chess-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
              {tooltip.text}
            </div>
          )}

          {ranks.map((rank, row) =>
            files.map((file, col) => {
              const light    = isLight(col, row);
              const navSq    = isNavSq(col, row);
              const selSq    = isSelectedSq(col, row);
              const targetSq = isQueenTarget(col, row);
              const hovered  = hoveredSq?.[0] === col && hoveredSq?.[1] === row;
              const piece    = getPieceAt(col, row);
              const PieceCmp = piece ? PIECE_COMPONENTS[piece.type] : null;

              return (
                <div
                  key={`${col}-${row}`}
                  className={[
                    'chess-sq',
                    light      ? 'chess-sq--light'    : 'chess-sq--dark',
                    navSq      ? 'chess-sq--nav'       : '',
                    selSq      ? 'chess-sq--selected'  : '',
                    targetSq   ? 'chess-sq--target'    : '',
                    hovered    ? 'chess-sq--hovered'   : '',
                  ].join(' ')}
                  onMouseEnter={() => handleSqEnter(col, row)}
                  onClick={() => handleSqClick(col, row)}
                >
                  {col === 0 && <span className="chess-sq__rank">{rank}</span>}
                  {row === 7 && <span className="chess-sq__file">{file}</span>}
                  {targetSq && !piece && <div className="chess-sq__dot" />}
                  {PieceCmp && (
                    <div className={[
                      'chess-piece',
                      isNavPiece(piece.id)   ? 'chess-piece--nav'      : '',
                      piece.id === selected  ? 'chess-piece--selected' : '',
                      piece.id === 'wQ' && !queenMoved ? 'chess-piece--pulse' : '',
                    ].join(' ')}>
                      <PieceCmp color={piece.color} />
                      {isNavPiece(piece.id) && <div className="chess-piece__glow" />}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {checkmate && <CheckmateOverlay onClose={() => navigate('/portfolio')} />}
      </div>

      {/* ── Right panel ── */}
      <div className="chess-home__panel chess-home__panel--right">
        <div className="chess-home__move-hint">
          <div className="chess-home__move-hint-title">Your move</div>
          <div className="chess-home__move-hint-body">
            {queenMoved
              ? 'The board is alive. Navigate by clicking pieces.'
              : selected === 'wQ'
              ? 'White queen selected — click a square to move.'
              : 'Click the white queen ♕ to make your move.'
            }
          </div>
        </div>
        <div className="chess-home__coords">
          <div className="chess-home__coord-group">
            <span className="chess-home__coord-label">White</span>
            <span className="chess-home__coord-val">♔ c1 · ♕ d4 · ♖ d1 · ♗ c3</span>
          </div>
          <div className="chess-home__coord-group">
            <span className="chess-home__coord-label">Black</span>
            <span className="chess-home__coord-val">♚ g8 · ♛ c6 · ♜ f8 · ♞ e7</span>
          </div>
        </div>
      </div>
    </div>
  );
}

