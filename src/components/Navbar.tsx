import React, { useState, useEffect } from 'react';
import { useLanguage } from '../lib/store';

export default function Navbar() {
  const { lang, t, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      borderBottomColor: scrolled ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.05)',
      transition: 'border-color 0.25s ease'
    }}>
      <div className="wrap">
        <div className="navl">
          <a href="#shows">{t.navShows}</a>
          <a href="#how">{t.navHow}</a>
          <a href="#rates">{t.navRates}</a>
          <a href="#about">{t.navAbout}</a>
          <a href="#faq">{t.navFaq}</a>
          <a href="https://www.instagram.com/wolfxfilms/" target="_blank" rel="noopener noreferrer">
            {t.instagram}
          </a>
        </div>
        <div className="mark">
          <a href="#" style={{ letterSpacing: '0.04em' }}>WolfxFilms</a>
        </div>
        <div className="navr">
          <div className="seg" role="group" aria-label="Language / Idioma">
            <button
              type="button"
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              aria-pressed={lang === 'es'}
              onClick={() => setLang('es')}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
