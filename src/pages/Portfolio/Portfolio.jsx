import BackButton from '../../components/BackButton/BackButton';
import './Portfolio.css';

const projects = [
  {
    piece: '♜', num: '01',
    title: 'Zaytun',
    tags: ['React', 'Netlify', 'CSS'],
    desc: 'A product website for Zaytun — a small-batch marinated olive spread crafted in Toronto. Built and deployed as a full React site.',
    status: 'Live',
    live: 'https://zaytun1.netlify.app/',
  },
  {
    piece: '♞', num: '02',
    title: 'Collatz Loops',
    tags: ['JavaScript', 'Math', 'Visualisation'],
    desc: 'A mathematical exploration site diving into the Collatz conjecture — one of the most famous unsolved problems in mathematics. Visualises the sequences and loop structures.',
    status: 'Live',
    live: 'https://collatzloops.com',
  },
  {
    piece: '♝', num: '03',
    title: 'Excel Store',
    tags: ['Excel', 'VBA', 'Data Tools'],
    desc: 'A collection of professional Excel tools and templates built from years of consulting experience — available for purchase on Payhip.',
    status: 'Live',
    live: 'https://payhip.com/ZivoExcel',
  },
  {
    piece: '♛', num: '04',
    title: 'My Personal Website',
    tags: ['React', 'Javascript', 'Logic', 'Design'],
    desc: 'I created my personal website using React. I applied some logic in design of the chess board, and design principles in making an appealing website',
    status: 'In Production',
    live: '/',
  },
];

const statusColor = { Live: '#60a5fa', 'In Progress': '#94a3b8', Planned: '#4b5563' };

export default function Portfolio() {
  return (
    <div className="port-page">
      <BackButton />
      <div className="port-page__banner">
        <div className="port-page__banner-bg" />
        <div className="port-page__banner-content">
          <div className="port-page__piece-label">♚ Black King</div>
          <h1 className="port-page__heading">PORTFOLIO</h1>
        </div>
        <p className="port-page__banner-sub">
          A growing set of projects grounded in real consulting problems.
        </p>
      </div>

      <div className="port-page__grid">
        {projects.map((p) => (
          <div key={p.num} className="port-card">
            <div className="port-card__top">
              <span className="port-card__num">{p.num}</span>
              <span className="port-card__piece">{p.piece}</span>
            </div>
            <div className="port-card__status" style={{ color: statusColor[p.status] }}>
              {p.status}
            </div>
            <h3 className="port-card__title">{p.title}</h3>
            <p className="port-card__desc">{p.desc}</p>
            <div className="port-card__tags">
              {p.tags.map(t => <span key={t} className="port-card__tag">{t}</span>)}
            </div>
            <div className="port-card__links">
              {p.live && <a href={p.live} className="port-card__link port-card__link--live" target="_blank" rel="noreferrer">Visit Site →</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
