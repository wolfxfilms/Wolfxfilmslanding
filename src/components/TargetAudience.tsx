import React from 'react';
import { useLanguage } from '../lib/store';

export default function TargetAudience() {
  const { t } = useLanguage();

  return (
    <section style={{ paddingTop: '0' }}>
      <div className="wrap">
        <div className="head" style={{ textAlign: 'center' }}>
          <h2 className="h2">{t.fitH}</h2>
        </div>
        <div className="icp" style={{ marginTop: '36px' }}>
          <article>
            <span className="cap">01</span>
            <h3 className="h3">{t.icp1h}</h3>
            <p className="dimtxt">{t.icp1p}</p>
          </article>
          <article>
            <span className="cap">02</span>
            <h3 className="h3">{t.icp2h}</h3>
            <p className="dimtxt">{t.icp2p}</p>
          </article>
          <article>
            <span className="cap">03</span>
            <h3 className="h3">{t.icp3h}</h3>
            <p className="dimtxt">{t.icp3p}</p>
          </article>
          <p className="icp-note dimtxt">{t.icpNote}</p>
        </div>
      </div>
    </section>
  );
}
