import React from 'react';
import { useLanguage } from '../lib/store';

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section style={{ paddingTop: 'clamp(48px, 6vw, 80px)', paddingBottom: '0' }}>
      <div className="wrap stats">
        <span className="stats-glow" aria-hidden="true"></span>
        <div className="stat">
          <span className="v">2</span>
          <span className="cap">{t.st1}</span>
        </div>
        <div className="stat">
          <span className="v">4K</span>
          <span className="cap">{t.st2}</span>
        </div>
        <div className="stat">
          <span className="v">48h</span>
          <span className="cap">{t.st3}</span>
        </div>
        <div className="stat">
          <span className="v">4 – 6</span>
          <span className="cap">{t.st4}</span>
        </div>
      </div>
    </section>
  );
}
