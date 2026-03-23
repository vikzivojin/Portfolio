import BackButton from '../../components/BackButton/BackButton';
import headshotImg from '../../assets/headshot.jpeg';
import './About.css';

const skills = [
  'Microsoft Excel', 'VBA', 'Power BI',
  'Python', 'SQL', 'Java',
  'JavaScript', 'React',
];

export default function About() {
  return (
    <div className="about">
      <BackButton />

      {/* ── HERO SPLIT ── */}
      <div className="about__hero">
        <div className="about__hero-text">
          <div className="about__piece-label">♛ Black Queen</div>
          <h1 className="about__heading">
            <span className="about__heading-line">ABOUT</span>
            <span className="about__heading-line about__heading-line--accent">ME</span>
          </h1>
          <div className="about__rule" />
          <p className="about__tagline">Software Developer<br/>→ Logic Lover</p>
        </div>

        <div className="about__hero-photo">
          <div className="about__photo-frame">
            <img src={headshotImg} alt="Viktor Zivojinovic" />
            <div className="about__photo-overlay" />
          </div>
          <div className="about__photo-name">
            <span>Viktor</span>
            <span>Zivojinovic</span>
          </div>
        </div>
      </div>

      {/* ── BIO ── */}
      <div className="about__bio">
        <div className="about__bio-col about__bio-col--main">
          <h2 className="about__sub">The Background</h2>
          <p className="about__body">
            
            I have always loved logic and mathematics. This love has been my guide for my career.
            My journey started with obtaining a B.Sc. in <strong>Financial Modelling</strong> with a Mathematics minor from the University of Western Ontario.
            This led down the path of benefits consulting, where my math expertise was used in the health insurance space to predict a variety of risks and costs.
          </p>
          <p className="about__body">
            Over the past decade I have become very successful in this space, developing my own brand in developing solutions for clients.
            However while I enjoyed solving problems for clients, I developed an itch to be responsible for my own creations and problems. This growing itch has 
            pushed me to finalize my decision to transition into software development.
          </p>

          <h2 className="about__sub">The Pivot</h2>
          <p className="about__body">
            Throughout my career I have already developed programming experience. However in the consulting world, the application of this skillset is quite surface level.
            After all, the best code requires time to write while consulting rewards optimizing time management for each problem.
            Software development was the natural decision to transition to. I have taken my time to sharpen my knowledge to ensure a successful transition.

            JavaScript and React are my current focus with a sharp eye on data-driven interfaces where my experience gives me a genuine edge.
          </p>
        </div>

        <div className="about__bio-col about__bio-col--skills">
          <h2 className="about__sub">Skills</h2>
          <div className="about__skill-tags">
            {skills.map(skill => (
              <span key={skill} className="about__skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
