import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash      from './components/Splash/Splash';
import ChessHome   from './components/ChessHome/ChessHome';
import About       from './pages/About/About';
import Portfolio   from './pages/Portfolio/Portfolio';
import Experience  from './pages/Experience/Experience';
import Interests   from './pages/Interests/Interests';
import Contact     from './pages/Contact/Contact';
import './styles/global.css';

export default function App() {
  // sessionStorage: splash shown once per browser session, not on back-nav
  const [splashDone, setSplashDone] = useState(
    () => sessionStorage.getItem('splashSeen') === 'true'
  );

  const handleSplashDone = () => {
    sessionStorage.setItem('splashSeen', 'true');
    setSplashDone(true);
  };

  if (!splashDone) {
    return <Splash onEnter={handleSplashDone} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<ChessHome />} />
        <Route path="/about"      element={<About />} />
        <Route path="/portfolio"  element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/interests"  element={<Interests />} />
        <Route path="/contact"    element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
