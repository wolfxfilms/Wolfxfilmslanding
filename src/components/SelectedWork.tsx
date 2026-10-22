import React from 'react';
import { useLanguage } from '../lib/store';
import { SHOWS } from '../data/portfolio';

export default function SelectedWork() {
  const { t } = useLanguage();

  return (
    <section id="shows" style={{ paddingTop: '0' }}>
      <div className="wrap">
        <div className="head">
          <h2 className="h2">{t.showsH}</h2>
          <p className="sub">{t.showsP}</p>
        </div>
        <div className="rail" style={{ marginTop: '32px' }}>
          {SHOWS.map((s, idx) => (
            <a
              key={idx}
              className="show"
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="thumb">
                <video
                  src={s.loop}
                  poster={s.img}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                />
                <span className="play"></span>
                <span className="tag dur">{s.dur}</span>
              </div>
              <div className="body">
                <span className="cap">
                  {s.channel} · {t.role}
                </span>
                <h3 className="h3">{s.title}</h3>
                <span className="watch">{t.watch}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
