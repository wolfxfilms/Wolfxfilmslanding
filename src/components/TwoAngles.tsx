import React from 'react';
import { useLanguage } from '../lib/store';

export default function TwoAngles() {
  const { t } = useLanguage();

  return (
    <section style={{ paddingTop: '0' }}>
      <div className="wrap">
        <div className="head">
          <h2 className="h2">{t.anglesH}</h2>
          <p className="sub">{t.anglesP}</p>
        </div>
        <div className="pair" style={{ marginTop: '32px' }}>
          <div className="shot">
            <img
              src="/img/acam.jpg"
              alt="A-camera close-up of the host"
              loading="lazy"
            />
            <span className="tag">A-cam · 50mm</span>
          </div>
          <div className="shot">
            <img
              src="/img/bcam.jpg"
              alt="B-camera close-up of the guest"
              loading="lazy"
            />
            <span className="tag">B-cam · 85mm</span>
          </div>
        </div>
      </div>
    </section>
  );
}
