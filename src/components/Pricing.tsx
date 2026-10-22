import React from 'react';
import { useLanguage, selectTier } from '../lib/store';

export default function Pricing() {
  const { t } = useLanguage();

  return (
    <section id="rates" style={{ paddingTop: 'clamp(60px, 8vw, 100px)' }}>
      <div className="wrap">
        <div className="head" style={{ textAlign: 'center' }}>
          <h2 className="h2">{t.ratesH}</h2>
          <p className="sub">{t.ratesP}</p>
        </div>

        <div className="tiers" style={{ marginTop: '40px' }}>
          {/* Tier 1: Capture */}
          <div className="tier">
            <div className="top">
              <h3 className="h3">{t.t1}</h3>
            </div>
            <div className="amt">
              $1,000<small>{t.perEp}</small>
            </div>
            <p className="dimtxt">{t.t1p}</p>
            <ul>
              <li>{t.t1a}</li>
              <li>{t.t1b}</li>
              <li>{t.t1c}</li>
              <li>{t.t1d2}</li>
              <li>{t.t1e}</li>
            </ul>
            <button
              type="button"
              className="pill gb"
              onClick={() => selectTier(1)}
            >
              {t.choose}
            </button>
          </div>

          {/* Tier 2: Capture + Edit (Featured) */}
          <div className="tier feat">
            <div className="top">
              <h3 className="h3">{t.t2}</h3>
              <span className="tag" style={{ background: 'rgba(255, 207, 148, 0.15)', borderColor: 'var(--glow)', color: 'var(--glow)' }}>
                {t.recommended}
              </span>
            </div>
            <div className="amt">
              $2,000<small>{t.perEp}</small>
            </div>
            <p className="dimtxt">{t.t2p}</p>
            <ul>
              <li>{t.t2a}</li>
              <li>{t.t2b}</li>
              <li>{t.t2c}</li>
              <li>{t.t2e}</li>
            </ul>
            <button
              type="button"
              className="beam-btn"
              onClick={() => selectTier(2)}
            >
              <span className="beam" aria-hidden="true">
                <span className="beam-ring">
                  <span className="beam-glow"></span>
                  <span className="beam-line"></span>
                </span>
              </span>
              <span className="lbl">{t.choose}</span>
            </button>
          </div>

          {/* Tier 3: Series */}
          <div className="tier">
            <div className="top">
              <h3 className="h3">{t.t3}</h3>
              <span className="tag">{t.save}</span>
            </div>
            <div className="amt">
              $6,500<small>{t.perMo}</small>
            </div>
            <p className="dimtxt">{t.t3p}</p>
            <ul>
              <li>{t.t3a}</li>
              <li>{t.t3b}</li>
              <li>{t.t3c}</li>
              <li>{t.t3e}</li>
              <li>{t.t3f}</li>
              <li>{t.t3g}</li>
            </ul>
            <button
              type="button"
              className="pill gb"
              onClick={() => selectTier(3)}
            >
              {t.choose}
            </button>
          </div>
        </div>

        <p className="cap tiers-note" style={{ marginTop: '24px' }}>
          {t.tiersFoot}
        </p>
      </div>
    </section>
  );
}
