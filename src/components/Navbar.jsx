import React, { useState } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useAppContext } from '../hooks/useAppContext';
import './navbar.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, lang, setLang, t } = useAppContext();

  const links = [
    { name: t('nav', 'home'), href: '#home' },
    { name: t('nav', 'pymes'), href: '#pymes' },
    { name: t('nav', 'corporate'), href: '#corporate' },
    { name: t('nav', 'notes'), href: '#notes' }
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <a href="#home" className="navbar-brand">EYMC.</a>
        
        {/* Desktop Nav */}
        <nav className="navbar-links">
          {links.map(link => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
          <a href="#contact" className="btn btn-primary ml-4">{t('nav', 'contact')}</a>
          <button onClick={toggleTheme} className="theme-toggle ml-4" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <div className="lang-toggle ml-4" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Globe size={20} />
            <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ background: 'transparent', color: 'inherit', border: 'none', cursor: 'pointer' }}>
              <option value="es" style={{ color: '#000' }}>ES</option>
              <option value="en" style={{ color: '#000' }}>EN</option>
              <option value="pt" style={{ color: '#000' }}>PT</option>
            </select>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mobile-menu">
          {links.map(link => (
            <a key={link.name} href={link.href} onClick={handleLinkClick}>{link.name}</a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={handleLinkClick}>{t('nav', 'contact')}</a>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <div className="lang-toggle" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Globe size={24} />
              <select value={lang} onChange={(e) => setLang(e.target.value)} style={{ background: 'transparent', color: 'inherit', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>
                <option value="es" style={{ color: '#000' }}>ES</option>
                <option value="en" style={{ color: '#000' }}>EN</option>
                <option value="pt" style={{ color: '#000' }}>PT</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
