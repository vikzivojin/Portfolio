import BackButton from '../../components/BackButton/BackButton';
import './Experience.css';

const jobs = [
  {
    id: 1, current: true,
    company: 'HUB International',
    role: 'Consultant, Benefits Specialist',
    period: 'Jan 2022 – Present',
    bullets: [
      'Manage complex group benefits clients through full plan lifecycle: carrier negotiations, plan design, and employee communications.',
      'Handle union negotiations, traditional-to-flex plan conversions, financial arrangement changes, and in-depth LTD analysis.',
      'Built Power BI dashboards delivering live benefit and drug-spend insights — replacing manual quarterly reporting cycles.',
    ],
  },
  {
    id: 2,
    company: 'The Leslie Group',
    role: 'Senior Employee Benefits Specialist',
    period: 'Apr 2021 – Jan 2022',
    bullets: [
      'Managed 60+ group benefits clients, negotiating insurance rates and optimising plan designs.',
      'Benchmarked client plans against industry peers and delivered trend analysis to HR and Finance leadership.',
    ],
  },
  {
    id: 3,
    company: 'Wellington Altus Private Wealth',
    role: 'Benefits Analyst',
    period: 'Dec 2017 – Mar 2021',
    bullets: [
      'Co-managed 70 group benefits clients through renewals and plan design optimisation.',
      'Built automated Excel/VBA tools across benefits, pension, and investment lines — deductions calculator, retirement income forecast, and a customisable pension benchmarking model.',
    ],
  },
  {
    id: 4,
    company: 'Aon Hewitt',
    role: 'Actuarial Analyst — Health & Benefits',
    period: 'Nov 2014 – Jun 2017',
    bullets: [
      'Built claims and financial projections, determined actuarial costs of post-employment benefit obligations, and negotiated rates with insurers in Excel and ProVal.',
      'Enabled clients to accurately budget benefit plans and make data-driven plan design decisions.',
    ],
  },
];

const education = [
  { year: '2026', title: 'Software Development Diploma', org: 'Brainstation', note: '' },
  { year: '2021', title: 'Data Analytics Certificate', org: 'Google', note: '' },
  { year: '2020', title: 'CEBS Designation',          org: 'Int\'l Foundation of Employee Benefit Plans', note: 'Certified Employee Benefits Specialist' },
  { year: '2014', title: 'B.Sc. Financial Modelling', org: 'University of Western Ontario', note: 'Mathematics Minor' },
  { year: '2012-2015',  title: 'Actuarial Exams',            org: 'Society of Actuaries', note: 'Three exams passed' },
];

export default function Experience() {
  return (
    <div className="exp-page">
      <BackButton />

      {/* ── Header banner ── */}
      <div className="exp-page__banner">
        <div className="exp-page__banner-bg" />
        <div className="exp-page__banner-content">
          <div className="exp-page__piece-label">♔ White King</div>
          <h1 className="exp-page__heading">EXPERIENCE</h1>
          <div className="exp-page__rule" />
          <p className="exp-page__banner-sub">Over a decade of consulting experience. Transitioning to software development.</p>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="exp-page__body">

        {/* Timeline */}
        <div className="exp-page__timeline">
          <div className="exp-page__timeline-rail" />
          {jobs.map((job) => (
            <div key={job.id} className={`exp-card ${job.current ? 'exp-card--current' : ''}`}>
              <div className="exp-card__marker">
                <div className="exp-card__dot" />
                <div className="exp-card__period">{job.period}</div>
              </div>
              <div className="exp-card__body">
                <div className="exp-card__company">{job.company}</div>
                <div className="exp-card__role">{job.role}</div>
                {job.current && <span className="exp-card__badge">Current</span>}
                <ul className="exp-card__bullets">
                  {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="exp-page__sidebar">
          <h2 className="exp-page__sidebar-title">Education</h2>
          {education.map((e, i) => (
            <div key={i} className="edu-card">
              <div className="edu-card__year">{e.year}</div>
              <div className="edu-card__info">
                <div className="edu-card__title">{e.title}</div>
                <div className="edu-card__org">{e.org}</div>
                {e.note && <div className="edu-card__note">{e.note}</div>}
              </div>
            </div>
          ))}

          <h2 className="exp-page__sidebar-title" style={{marginTop:'48px'}}>Extracurriculars</h2>
          <div className="extra-card">
            <div className="extra-card__title">Edenbridge Tennis Club</div>
            <div className="extra-card__role">Director of Fundraising · Oct 2018 – Oct 2019</div>
            <p className="extra-card__body">Raised $3,000 at inception; landed a BlogTO feature that attracted 20+ new members.</p>
          </div>
          <div className="extra-card">
            <div className="extra-card__title">Toronto Pool League</div>
            <div className="extra-card__role">Statistician · 2019 – 2021</div>
            <p className="extra-card__body">Built a dynamic player/team stats tracker with automated prize-allocation logic.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
