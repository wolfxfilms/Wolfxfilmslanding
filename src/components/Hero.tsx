import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../lib/store';

export default function Hero() {
  const { t } = useLanguage();
  const [isPlayingIntro, setIsPlayingIntro] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const introVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem('wxf-intro') === '1';
    } catch (e) {}

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!seen && !reducedMotion && introVideoRef.current) {
      setIsPlayingIntro(true);
      const pr = introVideoRef.current.play();
      if (pr && pr.catch) {
        pr.catch(() => endIntro());
      }
      const timer = setTimeout(() => {
        if (introVideoRef.current && introVideoRef.current.currentTime < 0.1) {
          endIntro();
        }
      }, 3000);
      return () => clearTimeout(timer);
    } else {
      startLoop();
    }
  }, []);

  const startLoop = () => {
    if (heroVideoRef.current) {
      const pr = heroVideoRef.current.play();
      if (pr && pr.catch) pr.catch(() => {});
    }
  };

  const endIntro = () => {
    setIsPlayingIntro(false);
    try {
      sessionStorage.setItem('wxf-intro', '1');
    } catch (e) {}
    startLoop();
  };

  return (
    <header className="hero" style={{ position: 'relative' }}>
      <div className="hero-video" style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        maxHeight: '94vh',
        marginTop: '-64px',
        overflow: 'hidden'
      }}>
        {/* Main looping background video */}
        <video
          ref={heroVideoRef}
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/hero.jpg"
          aria-label="WolfxFilms title over a two-camera podcast set above Medellín at night"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 60%, transparent 96%)',
            maskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 60%, transparent 96%)',
            opacity: isPlayingIntro ? 0 : 1,
            transition: 'opacity 0.8s ease'
          }}
        >
          <source src="/img/hero.mp4" type="video/mp4" />
        </video>

        {/* Intro sequence video */}
        <video
          ref={introVideoRef}
          muted
          playsInline
          preload="auto"
          onEnded={endIntro}
          onError={endIntro}
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 60%, transparent 96%)',
            maskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 60%, transparent 96%)',
            opacity: isPlayingIntro ? 1 : 0,
            pointerEvents: isPlayingIntro ? 'auto' : 'none',
            transition: 'opacity 0.6s ease'
          }}
        >
          <source src="/img/intro.mp4" type="video/mp4" />
        </video>

        {/* City skyline glints */}
        {!isPlayingIntro && (
          <div className="glints" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
            <i style={{ position: 'absolute', left: '19.7%', top: '92%', width: '60px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
            <i style={{ position: 'absolute', left: '39.1%', top: '94%', width: '48px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
            <i style={{ position: 'absolute', left: '59.4%', top: '94%', width: '54px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
            <i style={{ position: 'absolute', left: '40%', top: '69.5%', width: '36px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
            <i style={{ position: 'absolute', left: '56.2%', top: '69.5%', width: '40px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
          </div>
        )}

        {/* Skip intro button */}
        {isPlayingIntro && (
          <button
            type="button"
            className="pill gb"
            onClick={endIntro}
            style={{
              position: 'absolute',
              right: '4%',
              bottom: '20%',
              zIndex: 10,
              cursor: 'pointer'
            }}
          >
            {t.skip}
          </button>
        )}
      </div>

      <div className="wrap hero-card" style={{
        position: 'relative',
        zIndex: 3,
        marginTop: 'clamp(-260px, -17vw, -60px)',
        display: 'grid',
        justifyItems: 'center',
        gap: '22px',
        textAlign: 'center'
      }}>
        <h1 style={{
          textShadow: '0 2px 30px rgba(0,0,0,0.6)',
          fontSize: 'clamp(32px, 4.4vw, 64px)',
          lineHeight: 1.02,
          letterSpacing: '-0.04em',
          fontWeight: 500
        }}>
          <span style={{ display: 'block' }}>{t.h1Line1}</span>
          <span style={{ display: 'block' }}>{t.h1Line2}</span>
          <span style={{ display: 'block' }}>{t.h1Line3}</span>
        </h1>

        <div className="hero-panel" style={{
          position: 'relative',
          display: 'grid',
          gap: '24px',
          justifyItems: 'center'
        }}>
          <p style={{ color: 'var(--grey)', maxWidth: '52ch', fontSize: 'clamp(16px, 1.25vw, 18px)' }}>
            {t.heroP}
          </p>

          <div className="actions" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'center' }}>
            <a className="beam-btn" href="#book" style={{ height: '56px', padding: '0 34px', fontSize: '15px' }}>
              <span className="beam" aria-hidden="true">
                <span className="beam-ring">
                  <span className="beam-glow"></span>
                  <span className="beam-line"></span>
                </span>
              </span>
              <span className="lbl">{t.cta}</span>
            </a>
            <a className="pill gb spin" href="#rates">
              {t.seeRates}
            </a>
          </div>
        </div>

        <div className="meta cap" style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px 26px',
          marginTop: '8px'
        }}>
          <span>
            <span className="rec"></span>
            {t.booking}
          </span>
        </div>
      </div>
    </header>
  );
}
