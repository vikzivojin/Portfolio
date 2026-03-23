import { useState } from 'react';
import BackButton from '../../components/BackButton/BackButton';
import './Contact.css';

export default function Contact() {
  const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null);

  const change = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const s = encodeURIComponent(form.subject || `Portfolio Contact — ${form.name}`);
    const b = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:vikzivojin@gmail.com?subject=${s}&body=${b}`;
    setStatus('sent');
  };

  return (
    <div className="con-page">
      <BackButton />

      {/* Full-height split */}
      <div className="con-page__split">

        {/* Left: big text + details */}
        <div className="con-page__left">
          <div className="con-page__piece-label">♗ White Bishop</div>
          <h1 className="con-page__heading">
            CONTACT<br/><span className="con-page__heading-me">ME</span>
          </h1>
          <div className="con-page__rule" />

          <div className="con-page__details">
            <div className="con-page__detail">
              <span className="con-page__detail-label">Email</span>
              <a href="mailto:vikzivojin@gmail.com" className="con-page__detail-val">
                vikzivojin@gmail.com
              </a>
            </div>
            <div className="con-page__detail">
              <span className="con-page__detail-label">Phone</span>
              <a href="tel:6477798677" className="con-page__detail-val">(647) 779-8677</a>
            </div>
            <div className="con-page__detail">
              <span className="con-page__detail-label">Location</span>
              <span className="con-page__detail-val">Toronto, Ontario, Canada</span>
            </div>
            <div className="con-page__detail">
              <span className="con-page__detail-label">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/viktorziv/"
                target="_blank" rel="noreferrer"
                className="con-page__detail-val con-page__detail-val--link"
              >
                linkedin.com/in/viktorziv
              </a>
            </div>
          </div>

          <div className="con-page__availability">
            <span className="con-page__avail-dot" />
            Open to new opportunities
          </div>

          {/* Giant decorative queen */}
          <div className="con-page__deco">♗</div>
        </div>

        {/* Right: form */}
        <div className="con-page__right">
          <p className="con-page__form-intro">
            Whether you have a role in mind, a project to collaborate on, or just want
            to talk chess — drop me a line.
          </p>

          <form className="con-page__form" onSubmit={submit} noValidate>
            <div className="con-page__row">
              <div className="con-page__field">
                <label className="con-page__label" htmlFor="name">Name</label>
                <input id="name" name="name" type="text"
                  className="con-page__input" value={form.name}
                  onChange={change} placeholder="Your name" required />
              </div>
              <div className="con-page__field">
                <label className="con-page__label" htmlFor="email">Email</label>
                <input id="email" name="email" type="email"
                  className="con-page__input" value={form.email}
                  onChange={change} placeholder="your@email.com" required />
              </div>
            </div>

            <div className="con-page__field">
              <label className="con-page__label" htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text"
                className="con-page__input" value={form.subject}
                onChange={change} placeholder="What's this about?" />
            </div>

            <div className="con-page__field">
              <label className="con-page__label" htmlFor="message">Message</label>
              <textarea id="message" name="message"
                className="con-page__input con-page__textarea"
                value={form.message} onChange={change}
                placeholder="Your message…" rows={7} required />
            </div>

            <button type="submit" className="con-page__submit">
              Send Message
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {status === 'sent' && (
              <p className="con-page__sent">
                ◆ Mail client opened. Talk soon!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
