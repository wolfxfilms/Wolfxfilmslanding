import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../lib/store';

export default function Hero() {
  const { t } = useLanguage();
  const [introActive, setIntroActive] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const introVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // WebKit/Safari requires setting muted property directly on DOM element for autoplay
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = true;
      heroVideoRef.current.play().catch(() => {
        // Fallback to poster if autoplay is blocked by browser
      });
    }

    let seen = false;
    try {
      seen = sessionStorage.getItem('wxf-intro') === '1';
    } catch (e) {}

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Only attempt intro video if not seen and not reduced motion
    if (!seen && !reducedMotion && introVideoRef.current) {
      introVideoRef.current.muted = true;
      const pr = introVideoRef.current.play();
      if (pr) {
        pr.then(() => {
          setIntroActive(true);
        }).catch(() => {
          endIntro();
        });
      }

      // Safeguard: if intro doesn't start within 2 seconds, switch to hero loop immediately
      const safeguard = setTimeout(() => {
        if (!introVideoRef.current || introVideoRef.current.currentTime < 0.2) {
          endIntro();
        }
      }, 2000);

      return () => clearTimeout(safeguard);
    }
  }, []);

  const endIntro = () => {
    setIntroActive(false);
    try {
      sessionStorage.setItem('wxf-intro', '1');
    } catch (e) {}
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = true;
      heroVideoRef.current.play().catch(() => {});
    }
  };

  return (
    <header className="hero" style={{ position: 'relative' }}>
      <div
        className="hero-video"
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          maxHeight: '94vh',
          marginTop: '-64px',
          overflow: 'hidden',
          backgroundColor: '#000',
          backgroundImage: 'url(/img/hero.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Instant fallback photo behind video to guarantee NO black void */}
        <img
          src="/img/hero.jpg"
          alt="WolfxFilms Penthouse Podcast Studio"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 60%, transparent 96%)',
            maskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 60%, transparent 96%)',
            zIndex: 0
          }}
        />

        {/* Main looping background video */}
        <video
          ref={heroVideoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/img/hero.jpg"
          aria-label="WolfxFilms podcast set above Medellín at night"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 60%, transparent 96%)',
            maskImage: 'linear-gradient(180deg, transparent 0%, #000 14%, #000 60%, transparent 96%)',
            zIndex: 1,
            opacity: 1
          }}
        >
          <source src="/img/hero.mp4" type="video/mp4" />
        </video>

        {/* Optional intro sequence video on top */}
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
            zIndex: 2,
            opacity: introActive ? 1 : 0,
            pointerEvents: introActive ? 'auto' : 'none',
            transition: 'opacity 0.8s ease'
          }}
        >
          <source src="/img/intro.mp4" type="video/mp4" />
        </video>

        {/* City skyline glints */}
        <div className="glints" aria-hidden="true" style={{ position: 'absolute', inset: 0, zIndex: 3, pointerEvents: 'none' }}>
          <i style={{ position: 'absolute', left: '19.7%', top: '92%', width: '60px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
          <i style={{ position: 'absolute', left: '39.1%', top: '94%', width: '48px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
          <i style={{ position: 'absolute', left: '59.4%', top: '94%', width: '54px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
          <i style={{ position: 'absolute', left: '40%', top: '69.5%', width: '36px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
          <i style={{ position: 'absolute', left: '56.2%', top: '69.5%', width: '40px', aspectRatio: '1', mixBlendMode: 'screen', background: 'radial-gradient(circle, #fff 0 3%, #fff7e8aa 6%, transparent 22%)' }} />
        </div>

        {/* Skip intro button */}
        {introActive && (
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
        zIndex: 5,
        marginTop: 'clamp(-260px, -17vw, -60px)',
        display: 'grid',
        justifyItems: 'center',
        gap: '22px',
        textAlign: 'center'
      }}>
        <h1 style={{
          textShadow: '0 2px 30px rgba(0,0,0,0.8)',
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
