import React from 'react';
import { useLanguage } from '../lib/store';

export default function SetGallery() {
  const { t } = useLanguage();

  return (
    <section style={{ paddingTop: '0' }}>
      <div className="wrap">
        <div className="head">
          <h2 className="h2">{t.setH}</h2>
        </div>
        <div className="sheet" style={{ marginTop: '32px' }}>
          <div className="shot wide">
            <img
              src="/img/bts.jpg"
              alt="Setting up a cinema camera on set"
              loading="lazy"
            />
            <span className="tag">{t.capBts}</span>
          </div>
          <div className="shot tall">
            <img
              src="/img/vertical.jpg"
              alt="Vertical social clip frame"
              loading="lazy"
            />
            <span className="tag">{t.capVert}</span>
          </div>
          <div className="shot">
            <img
              src="/img/monitor.jpg"
              alt="On-set monitor while recording"
              loading="lazy"
            />
            <span className="tag">{t.capMon}</span>
          </div>
          <div className="shot">
            <img
              src="/img/detail.jpg"
              alt="Detail shot near the microphone"
              loading="lazy"
            />
            <span className="tag">{t.capDet}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
