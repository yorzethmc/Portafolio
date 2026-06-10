import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { PymeServices } from './sections/PymeServices';
import { CorporateProfile } from './sections/CorporateProfile';
import { FieldNotes } from './sections/FieldNotes';
import { Contact } from './sections/Contact';
import { EasterEgg } from './sections/EasterEgg';

function App() {
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Only load audio if reduced motion is not forced (for performance & a11y)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      audioRef.current = new Audio('/assets/audio/conga-mode.mp3');
      audioRef.current.volume = 0.6;
    }
  }, []);

  const activateEasterEgg = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.log('Audio blocked by browser', e));
    }
    setIsEasterEggActive(true);
    
    // Auto turn off after 15 seconds
    setTimeout(() => {
      setIsEasterEggActive(false);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }, 15000);
  };

  return (
    <>
      <Navbar />
      
      <main>
        <Hero onActivateEasterEgg={activateEasterEgg} />
        <PymeServices />
        <CorporateProfile />
        <FieldNotes />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '40px', color: 'var(--color-muted)', borderTop: '1px solid var(--color-border)', marginTop: '60px' }}>
        <p>&copy; {new Date().getFullYear()} Erick Yorzeth Masis. Todos los derechos reservados.</p>
      </footer>

      <EasterEgg isActive={isEasterEggActive} />
    </>
  );
}

export default App;
