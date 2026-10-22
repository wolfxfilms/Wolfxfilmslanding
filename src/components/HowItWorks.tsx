import React, { useState } from 'react';
import { useLanguage } from '../lib/store';

export default function HowItWorks() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: t.step1,
      title: t.s1h,
      desc: t.s1p,
      badge: 'Set · lantern key · two bodies',
      img: '/img/bts.jpg'
    },
    {
      num: t.step2,
      title: t.s2h,
      desc: t.s2p,
      isDual: true,
      imgA: '/img/acam.jpg',
      imgB: '/img/bcam.jpg'
    },
    {
      num: t.step3,
      title: t.s3h,
      desc: t.s3p,
      isPhone: true,
      img: '/img/vertical.jpg',
      notif: t.notif
    }
  ];

  return (
    <section id="how" style={{ paddingTop: 'clamp(60px, 8vw, 100px)' }}>
      <div className="wrap">
        <div className="head" style={{ maxWidth: '800px', marginInline: 'auto', textAlign: 'center' }}>
          <h2 className="h2">{t.howH}</h2>
          <p className="sub">{t.howP}</p>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            justifyContent: 'center',
            marginTop: '20px'
          }}>
            <span className="tag" style={{ background: 'rgba(255,207,148,0.1)', borderColor: 'rgba(255,207,148,0.3)' }}>
              {t.chipCam}
            </span>
            <span className="tag">{t.chipAngles}</span>
            <span className="tag">4K · 23.976 fps</span>
            <span className="tag">{t.chipAudio}</span>
            <span className="tag">{t.chipLight}</span>
            <span className="tag">{t.chipDel}</span>
          </div>
        </div>

        {/* 3 Step Interactive Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginTop: '56px'
        }}>
          {steps.map((st, i) => (
            <div
              key={i}
              onMouseEnter={() => setActiveStep(i)}
              style={{
                background: 'var(--card)',
                borderRadius: '20px',
                border: activeStep === i ? '1px solid rgba(255, 207, 148, 0.4)' : '1px solid var(--line)',
                padding: '28px',
                display: 'grid',
                gap: '20px',
                transition: 'all 0.3s ease',
                transform: activeStep === i ? 'translateY(-4px)' : 'none',
                boxShadow: activeStep === i ? '0 12px 30px rgba(0,0,0,0.5), 0 0 25px rgba(255,207,148,0.06)' : 'none'
              }}
            >
              {/* Visual Card */}
              <div style={{
                position: 'relative',
                borderRadius: '14px',
                overflow: 'hidden',
                aspectRatio: '16 / 10',
                background: '#000',
                border: '1px solid var(--line)'
              }}>
                {st.isDual ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', gap: '2px' }}>
                    <div style={{ position: 'relative' }}>
                      <img src={st.imgA} alt="A-Cam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span className="tag" style={{ position: 'absolute', left: '8px', bottom: '8px', fontSize: '10px' }}>
                        <span className="rec"></span>A-Cam
                      </span>
                    </div>
                    <div style={{ position: 'relative' }}>
                      <img src={st.imgB} alt="B-Cam" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <span className="tag" style={{ position: 'absolute', left: '8px', bottom: '8px', fontSize: '10px' }}>
                        <span className="rec"></span>B-Cam
                      </span>
                    </div>
                  </div>
                ) : st.isPhone ? (
                  <div style={{ position: 'relative', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={st.img} alt="Delivery" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      right: '12px',
                      padding: '10px 14px',
                      background: 'rgba(28, 28, 30, 0.85)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '12px',
                      fontSize: '12px',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      <b>{t.notifTitle}</b>
                      <div style={{ color: 'var(--grey)', marginTop: '2px' }}>{st.notif}</div>
                    </div>
                  </div>
                ) : (
                  <div style={{ position: 'relative', height: '100%' }}>
                    <img src={st.img} alt={st.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <span className="tag" style={{ position: 'absolute', left: '10px', bottom: '10px' }}>
                      {st.badge}
                    </span>
                  </div>
                )}
              </div>

              {/* Step info */}
              <div style={{ display: 'grid', gap: '8px' }}>
                <span className="tag" style={{ justifySelf: 'start', color: 'var(--glow)' }}>
                  {st.num}
                </span>
                <h3 className="h3" style={{ fontSize: '20px' }}>{st.title}</h3>
                <p className="dimtxt" style={{ fontSize: '14px', lineHeight: '1.6' }}>{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
