import BackButton from '../../components/BackButton/BackButton';
import './Interests.css';

const interests_list = [
  {
    piece: '♔', num: '01',
    title: 'Chess',
    body: 'I started chess in childhood and returned to it durinv COVID. I now play competitively with a long term goal of becoming a National Master.',
    tags: ['Strategy'],
    link: { label: 'Check out my CFC Profile', href: 'https://www.chess.ca/en/ratings/p/?id=186939' },
  },
  {
    piece: '♟', num: '02',
    title: 'Building Excel Tools',
    body: 'I regularly build tools that supports myself others. Tools include weight tracking, financial management, and sports statistics.',
    tags: ['Excel', 'VBA', 'Logic'],
    link: null,
  },
  {
    piece: '♖', num: '03',
    title: 'Studying Mathematics',
    body: 'I like to take my time to delve into high level mathematics. Of particular interest to me in the relationship between geometry and infinite series, including analytic continuation and p-adic numbers.',
    tags: ['Mathematics', 'Geometry', 'Algorithsm'],
    link: null,
  },
  {
    piece: '♗', num: '04',
    title: 'Cycling',
    body: 'I cycle thousands of kilometres per year — not for competition, but for the love of exploration. My longest trip was from Sault Ste. Marie to Toronto, a 1,000km journey over 10 days that somehow wasn\'t long enough.',
    tags: ['Exercise', 'Exploration', 'Endurance'],
    link: null,
  },
  {
    piece: '♘', num: '05',
    title: 'Tennis',
    body: 'I have played tennis since childhood. I helped build up the Edenbridge Tennis Club as the Director of Fundraising — raised $3,000, landed a BlogTO feature, brought in 20+ new members.',
    tags: ['Tennis', 'Community', 'Fundraising'],
    link: null,
  },
  {
    piece: '♙', num: '06',
    title: 'Logic Puzzles',
    body: 'I love solving and creating logic puzzles. I have solved one Jane Street Puzzle (they are very tough!). My most played logic puzzle I have created has over 900,000 attempts.',
    tags: ['Markets', 'Financial Modelling', 'Behavioural Economics'],
    link: { label: 'Attempt my most famous logic puzzle', href: 'https://www.sporcle.com/games/vikZ/hint-a1-is-safe' },
  },
];

export default function Interests() {
  return (
    <div className="int-page">
      <BackButton />

      <div className="int-page__banner">
        <div className="int-page__banner-bg" />
        <div className="int-page__piece-label">♖ White Rook</div>
        <h1 className="int-page__heading">INTERESTS</h1>
        <p className="int-page__sub">The things that keep my mind stimulated</p>
      </div>

      <div className="int-page__grid">
        {interests_list.map((item) => (
          <div key={item.num} className="int-card">
            <div className="int-card__top">
              <span className="int-card__num">{item.num}</span>
              <span className="int-card__piece">{item.piece}</span>
            </div>
            <h3 className="int-card__title">{item.title}</h3>
            <p className="int-card__body">{item.body}</p>
            <div className="int-card__tags">
              {item.tags.map(t => <span key={t} className="int-card__tag">{t}</span>)}
            </div>
            {item.link && (
              <a
                href={item.link.href}
                target="_blank"
                rel="noreferrer"
                className="int-card__link"
              >
                {item.link.label} →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

