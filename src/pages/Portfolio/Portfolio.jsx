import { useState, useRef } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import screenshotZaytun    from '../../assets/screenshot-zaytun.png';
import screenshotCollatz   from '../../assets/screenshot-collatz-survivor.png';
import screenshotLoops     from '../../assets/screenshot-collatz-loops.png';
import screenshotPortfolio from '../../assets/screenshot-this-portfolio.png';
import './Portfolio.css';

const projects = [
  {
    num: '01', piece: '♜',
    title: 'Zaytun',
    tags: ['React', 'Netlify', 'CSS'],
    desc: 'A client project where I created a product website for Zaytun. I have designed the website using React and includes essential elements that a product website needs to succeed. Zaytun is an olive-based food product based in Toronto. Please check out the website, and I also highly recommend the product. It is delicious!',
    status: 'Live',
    live: 'https://zaytun1.netlify.app/',
    screenshot: screenshotZaytun,
    testimonials: [],
  },
  {
    num: '02', piece: '♔',
    title: 'Collatz Survivor',
    tags: ['React', 'JavaScript', 'Math', 'Game Design', 'Visualisation'],
    desc: 'A game I have built based around the Collatz Conjecture. Essentially the numbers follow the Collatz Conjecture algorithm but players have limited opportunities to "cheat" the algorithm and survive as long as possible. Give it a shot! It has gotten positive remarks within the mathematics community.',
    status: 'Live',
    live: 'https://collatzsurvivor.com',
    screenshot: screenshotCollatz,
    testimonials: [],
  },
  {
    num: '03', piece: '♞',
    title: 'Collatz Loops',
    tags: ['JavaScript', 'Math', 'Visualisation'],
    desc: "A mathematical exploration site that I've built that allows users to define the behaviour of a sequence and I present the numbers that follow the described sequence. It's a little pet project of mine and it shows how I can handle UI elements when dealing with very large numbers (seriously, it can handle numbers up over 20,000 digits long and still looks clean!).",
    status: 'Live',
    live: 'https://collatzloops.com',
    screenshot: screenshotLoops,
    testimonials: [],
  },
  {
    num: '04', piece: '♛',
    title: 'This Portfolio',
    tags: ['React', 'JavaScript', 'Logic', 'Design'],
    desc: 'My personal portfolio built entirely in React. I believe a website that does something different is a website that stands out. That is why I made the navigation an interactive chess board where each piece links to a different section, plus a custom checkmate easter egg.',
    status: 'In Production',
    live: '/',
    screenshot: screenshotPortfolio,
    testimonials: [],
  },
];

const statusColor = {
  'Live':          '#60a5fa',
  'In Progress':   '#94a3b8',
  'In Production': '#f59e0b',
  'Planned':       '#4b5563',
};

function ChevronLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Portfolio() {
  const [index, setIndex]         = useState(0);
  const [animDir, setAnimDir]     = useState(null);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  const go = (dir) => {
    if (animating) return;
    setAnimDir(dir);
    setAnimating(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIndex(prev =>
        dir === 'right'
          ? (prev + 1) % projects.length
          : (prev - 1 + projects.length) % projects.length
      );
      setAnimating(false);
      setAnimDir(null);
    }, 340);
  };

  const project = projects[index];
  const hasTestimonials = project.testimonials?.length > 0;

  return (
    <div className="port-page">
      <BackButton />

      {/* ── Banner ── */}
      <div className="port-page__banner">
        <div className="port-page__banner-bg" />
        <div className="port-page__banner-content">
          <div className="port-page__piece-label">♚ Black King</div>
          <h1 className="port-page__heading">PORTFOLIO</h1>
        </div>
        <p className="port-page__banner-sub">
          Please feel free to browse through my ever growing set of projects.
        </p>
      </div>

      {/* ── Carousel ── */}
      <div className="port-carousel">

        {/* ── Top bar: dots centered ── */}
        <div className="port-carousel__topbar">
          <div className="port-carousel__dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`port-carousel__dot ${i === index ? 'port-carousel__dot--active' : ''}`}
                onClick={() => {
                  if (i === index || animating) return;
                  go(i > index ? 'right' : 'left');
                  setTimeout(() => setIndex(i), 340);
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Main split: left info | right screenshot ── */}
        <div className="port-carousel__visual-wrap">

          {/* Left arrow */}
          <button
            className="port-carousel__arrow port-carousel__arrow--left"
            onClick={() => go('left')}
            aria-label="Previous project"
          >
            <ChevronLeft />
          </button>

          {/* Animated card */}
          <div
            className={[
              'port-carousel__card',
              animating && animDir === 'right' ? 'port-carousel__card--exit-left'  : '',
              animating && animDir === 'left'  ? 'port-carousel__card--exit-right' : '',
            ].join(' ')}
            key={index}
          >
            {/* ── Left half: project info ── */}
            <div className="port-carousel__info">
              <div className="port-carousel__meta">
                <span className="port-carousel__num">{project.num}</span>
                <span
                  className="port-carousel__status"
                  style={{ color: statusColor[project.status] }}
                >
                  {project.status}
                </span>
              </div>

              <h2 className="port-carousel__title">{project.title}</h2>

              <div className="port-carousel__tags">
                {project.tags.map(t => (
                  <span key={t} className="port-carousel__tag">{t}</span>
                ))}
              </div>

              <div className="port-carousel__divider" />

              <div className="port-carousel__info-heading">About This Project</div>
              <p className="port-carousel__desc">{project.desc}</p>

              {project.live && (
                <a
                  href={project.live}
                  className="port-carousel__visit-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Site →
                </a>
              )}

              {hasTestimonials && (
                <div className="port-carousel__testimonials">
                  <div className="port-carousel__testimonials-label">Testimonials</div>
                  {project.testimonials.map((t, i) => (
                    <blockquote key={i} className="port-carousel__testimonial">
                      <p className="port-carousel__testimonial-body">"{t.body}"</p>
                      <footer className="port-carousel__testimonial-author">
                        — {t.author}{t.role ? `, ${t.role}` : ''}
                      </footer>
                    </blockquote>
                  ))}
                </div>
              )}
            </div>

            {/* ── Right half: screenshot ── */}
            <a
              href={project.live || '#'}
              target="_blank"
              rel="noreferrer"
              className="port-carousel__screenshot-wrap"
              tabIndex={-1}
              aria-label={`Visit ${project.title}`}
            >
              {project.screenshot ? (
                <>
                  <img
                    src={project.screenshot}
                    alt={`${project.title} screenshot`}
                    className="port-carousel__screenshot"
                  />
                  <div className="port-carousel__screenshot-overlay">
                    <span className="port-carousel__screenshot-cta">Visit Site →</span>
                  </div>
                </>
              ) : (
                <div className="port-carousel__screenshot-placeholder">
                  <span>{project.piece}</span>
                  <p>No preview available</p>
                </div>
              )}
            </a>
          </div>

          {/* Right arrow */}
          <button
            className="port-carousel__arrow port-carousel__arrow--right"
            onClick={() => go('right')}
            aria-label="Next project"
          >
            <ChevronRight />
          </button>
        </div>

      </div>
    </div>
  );
}
