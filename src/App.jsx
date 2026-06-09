import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LifeDashboard from './components/LifeDashboard';
import ExperienceTimeline from './components/ExperienceTimeline';
import SuccessShowcase from './components/SuccessShowcase';
import BentoSkills from './components/BentoSkills';
import EtqGuide from './components/EtqGuide';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import LiveProof from './components/LiveProof';
import EasterEggModal from './components/EasterEggModal';
import { content, profileLinks } from './data/portfolioData';
import styles from './App.module.css';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [locale, setLocale] = useState(() => localStorage.getItem('portfolio-locale') || 'en');
  const [activePhrase, setActivePhrase] = useState(0);
  const [activeCase, setActiveCase] = useState(0);
  const [contact, setContact] = useState({ name: '', email: '', message: '' });
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const copy = content[locale];

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('portfolio-locale', locale);
  }, [locale]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActivePhrase((current) => (current + 1) % copy.heroPhrases.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [copy.heroPhrases.length]);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio contact from ${contact.name || 'visitor'}`);
    const body = encodeURIComponent(
      `Name: ${contact.name}\nEmail: ${contact.email}\n\n${contact.message}`
    );
    return `mailto:${profileLinks.email}?subject=${subject}&body=${body}`;
  }, [contact]);

  const whatsappHref = useMemo(() => {
    const message =
      locale === 'en'
        ? 'Hi Yorzeth, I saw your portfolio and would like to talk about a work opportunity.'
        : 'Hola Yorzeth, vi tu portafolio y me gustaria hablar sobre una oportunidad laboral.';
    return `https://wa.me/${profileLinks.whatsapp}?text=${encodeURIComponent(message)}`;
  }, [locale]);

  return (
    <main className={styles.app} data-theme={theme}>
      <Navbar
        styles={styles}
        navItems={copy.navItems}
        labels={copy.themeLabels}
        theme={theme}
        locale={locale}
        onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        onToggleLocale={() => setLocale((current) => (current === 'en' ? 'es' : 'en'))}
      />
      <Hero styles={styles} copy={copy} activePhrase={activePhrase} whatsappHref={whatsappHref} />
      <LifeDashboard styles={styles} copy={copy} onProfileClick={() => setShowEasterEgg(true)} />
      <ExperienceTimeline styles={styles} copy={copy} />
      <SuccessShowcase styles={styles} copy={copy} activeCase={activeCase} setActiveCase={setActiveCase} />
      <BentoSkills styles={styles} copy={copy} />
      <LiveProof styles={styles} copy={copy} mailtoHref={mailtoHref} whatsappHref={whatsappHref} />
      <EtqGuide styles={styles} copy={copy} />
      <Certifications styles={styles} copy={copy} />
      <Contact
        styles={styles}
        copy={copy}
        contact={contact}
        setContact={setContact}
        mailtoHref={mailtoHref}
        whatsappHref={whatsappHref}
      />
      <EasterEggModal styles={styles} copy={copy} open={showEasterEgg} onClose={() => setShowEasterEgg(false)} />
    </main>
  );
}
