import React, { useState } from 'react';
import { useLanguage } from '../lib/store';

export default function ComparisonSlider() {
  const { t } = useLanguage();
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section style={{ paddingTop: 'clamp(60px, 8vw, 100px)' }}>
      <div className="wrap">
        <div className="head" style={{ textAlign: 'center' }}>
          <h2 className="h2">{t.cmpH}</h2>
          <p className="sub">{t.cmpP}</p>
        </div>
        <div className="monitor" style={{ marginTop: '32px' }}>
          <div
            className="frame"
            style={{
              // @ts-ignore
              '--cut': `${sliderPos}%`
            }}
          >
            <img
              className="before"
              src="/img/before.jpg"
              alt="Host recorded on a laptop webcam"
              loading="lazy"
            />
            <img
              className="after"
              src="/img/acam.jpg"
              alt="Same host recorded on a cinema camera"
              loading="lazy"
            />
            <span className="tag fl">{t.tagWeb}</span>
            <span className="tag fr">
              <span className="rec"></span>
              {t.tagCinema}
            </span>
            <div className="divider" style={{ left: `${sliderPos}%` }}></div>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              aria-label="Compare webcam and cinema camera"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
