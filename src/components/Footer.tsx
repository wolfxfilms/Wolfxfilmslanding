import React from 'react';
import { useLanguage } from '../lib/store';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer>
      <div className="wrap cap">
        <span>
          {t.footerRights} ·{' '}
          <a
            href="https://www.instagram.com/wolfxfilms/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--glow)', textDecoration: 'none' }}
          >
            @wolfxfilms
          </a>
        </span>
        <span>{t.footerSpecs}</span>
      </div>
    </footer>
  );
}
