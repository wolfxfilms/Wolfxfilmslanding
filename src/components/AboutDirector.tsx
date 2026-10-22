import React from 'react';
import { useLanguage } from '../lib/store';

export default function AboutDirector() {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ paddingTop: 'clamp(60px, 8vw, 100px)' }}>
      <div className="wrap about">
        <figure className="portrait">
          <img
            src="/img/carlos.jpg"
            alt="Carlos Jimenez framing a shot through a medium-format camera"
            loading="lazy"
          />
          <figcaption className="cap">{t.portraitCap}</figcaption>
        </figure>

        <div className="about-txt">
          <span className="cap">{t.aboutLabel}</span>
          <h2 className="h2" style={{ textAlign: 'left', fontSize: 'clamp(32px, 4vw, 56px)' }}>
            Carlos Jimenez
          </h2>
          <p className="bio-lead">{t.about1}</p>
          <p className="dimtxt">{t.about2}</p>
          <p className="dimtxt">{t.about3}</p>
          <div className="bio-credits">
            <div>
              <span className="cap">{t.bioK1}</span>
              <span>{t.bioV1}</span>
            </div>
            <div>
              <span className="cap">{t.bioK2}</span>
              <span>{t.bioV2}</span>
            </div>
            <div>
              <span className="cap">{t.bioK3}</span>
              <span>{t.bioV3}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
