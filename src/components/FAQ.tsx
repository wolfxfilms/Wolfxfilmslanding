import React from 'react';
import { useLanguage } from '../lib/store';

export default function FAQ() {
  const { t } = useLanguage();

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q5, a: t.a5 },
    { q: t.q7, a: t.a7 },
    { q: t.q8, a: t.a8 },
    { q: t.q4, a: t.a4 },
  ];

  return (
    <section id="faq" style={{ paddingTop: 'clamp(60px, 8vw, 100px)' }}>
      <div className="wrap">
        <div className="head" style={{ textAlign: 'center' }}>
          <h2 className="h2">{t.faqH}</h2>
        </div>
        <div className="faq" style={{ marginTop: '36px' }}>
          {faqs.map((item, idx) => (
            <details key={idx}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
