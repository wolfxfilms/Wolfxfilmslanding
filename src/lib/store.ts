import { useState, useEffect } from 'react';
import { translations, type Language, type TranslationData } from '../data/translations';

export function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'en';
  try {
    const saved = localStorage.getItem('wxf-lang');
    if (saved === 'es' || saved === 'en') return saved;
  } catch (e) {}

  if (window.location.hash === '#es') return 'es';
  if (/^es\b/i.test(navigator.language || '')) return 'es';
  return 'en';
}

export function setLanguage(lang: Language) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem('wxf-lang', lang);
  } catch (e) {}
  document.documentElement.lang = lang;
  window.dispatchEvent(new CustomEvent('wxf-lang-change', { detail: lang }));
}

export function useLanguage(): { lang: Language; t: TranslationData; setLang: (l: Language) => void } {
  const [lang, setLangState] = useState<Language>('en');

  useEffect(() => {
    setLangState(getInitialLanguage());

    const handler = (e: Event) => {
      const custom = e as CustomEvent<Language>;
      if (custom.detail) {
        setLangState(custom.detail);
      }
    };

    window.addEventListener('wxf-lang-change', handler);
    return () => window.removeEventListener('wxf-lang-change', handler);
  }, []);

  const changeLang = (newLang: Language) => {
    setLangState(newLang);
    setLanguage(newLang);
  };

  return { lang, t: translations[lang], setLang: changeLang };
}

// Selected Tier store for syncing Pricing & BookingBox
export function selectTier(tier: number) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent('wxf-tier-select', { detail: tier }));
  const bookEl = document.getElementById('book');
  if (bookEl) {
    bookEl.scrollIntoView({ behavior: 'smooth' });
  }
}

export function useSelectedTier(defaultTier: number = 2) {
  const [tier, setTier] = useState<number>(defaultTier);

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<number>;
      if (custom.detail) {
        setTier(custom.detail);
      }
    };

    window.addEventListener('wxf-tier-select', handler);
    return () => window.removeEventListener('wxf-tier-select', handler);
  }, []);

  return [tier, setTier] as const;
}
