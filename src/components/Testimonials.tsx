import React, { useState } from 'react';
import { useLanguage } from '../lib/store';
import { TESTIMONIALS } from '../data/portfolio';

export default function Testimonials() {
  const { t } = useLanguage();
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };

  return (
    <section id="clients" style={{ paddingTop: '0' }}>
      <div className="wrap">
        <div className="head">
          <h2 className="h2">{t.testiH}</h2>
          <p className="sub">{t.testiP}</p>
        </div>
        <div className="testis" style={{ marginTop: '36px' }}>
          {TESTIMONIALS.map((item, i) => {
            const isPlaying = playingIndex === i;
            return (
              <article
                key={i}
                className={`testi gb ${isPlaying ? 'playing' : ''}`}
              >
                <video
                  src={isPlaying ? item.full : item.prev}
                  poster={item.poster}
                  autoPlay
                  muted={!isPlaying}
                  loop={!isPlaying}
                  controls={isPlaying}
                  playsInline
                  preload="metadata"
                />
                {!isPlaying && (
                  <button
                    type="button"
                    className="pill gb playbtn"
                    onClick={() => handlePlay(i)}
                    aria-label={`${t.playSound}: ${item.name}`}
                  >
                    <span>▶</span> {t.playSound}
                  </button>
                )}
                <div className="who">
                  <b>{item.name}</b>
                  <a
                    href={`https://www.instagram.com/${item.ig}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @{item.ig}
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
