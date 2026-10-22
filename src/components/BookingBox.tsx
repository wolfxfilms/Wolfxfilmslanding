import React, { useState, useEffect } from 'react';
import { useLanguage, useSelectedTier } from '../lib/store';
import { submitLead } from '../lib/supabase';

export default function BookingBox() {
  const { lang, t } = useLanguage();
  const [selectedTier, setSelectedTier] = useSelectedTier(2);
  const [msgText, setMsgText] = useState('');
  const [isMsgEdited, setIsMsgEdited] = useState(false);
  const [toast, setToast] = useState('');
  const [activeTab, setActiveTab] = useState<'quick' | 'direct'>('quick');

  // Direct lead form state
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const tierNames: Record<number, string> = {
    1: t.t1,
    2: t.t2,
    3: t.t3
  };

  useEffect(() => {
    if (!isMsgEdited) {
      const tierName = tierNames[selectedTier] || t.t2;
      setMsgText(t.msg(tierName));
    }
  }, [selectedTier, lang, isMsgEdited]);

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(msgText).then(
        () => {
          setToast(t.copied);
          setTimeout(() => setToast(''), 4000);
        },
        () => {
          setToast(t.copyFail);
          setTimeout(() => setToast(''), 4000);
        }
      );
    } catch (e) {
      setToast(t.copyFail);
      setTimeout(() => setToast(''), 4000);
    }
  };

  const handleSelectTier = (tier: number) => {
    setSelectedTier(tier);
    setIsMsgEdited(false);
  };

  const handleDirectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadEmail) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await submitLead({
        name: leadName,
        email: leadEmail,
        phone_or_handle: leadPhone,
        package_tier: tierNames[selectedTier] || 'Capture + Edit',
        message: msgText,
        language: lang
      });
      setSubmitStatus('success');
      setLeadName('');
      setLeadEmail('');
      setLeadPhone('');
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(msgText)}`;

  return (
    <section id="book" style={{ paddingTop: 'clamp(60px, 8vw, 100px)' }}>
      <div className="wrap">
        <div className="book">
          <img src="/img/city.jpg" alt="Medellín cityscape" loading="lazy" />
          <div className="book-in">
            <div style={{ display: 'grid', gap: '18px' }}>
              <span className="cap">
                <span className="rec"></span>
                {t.booking}
              </span>
              <h2>{t.bookH}</h2>
              <p className="dimtxt">{t.bookP}</p>

              {/* Mode switch pills */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                <button
                  type="button"
                  onClick={() => setActiveTab('quick')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    border: '1px solid var(--line-2)',
                    background: activeTab === 'quick' ? 'var(--white)' : 'rgba(0,0,0,0.5)',
                    color: activeTab === 'quick' ? '#000' : 'var(--white)',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                >
                  WhatsApp / Instagram DM
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('direct')}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '999px',
                    border: '1px solid var(--line-2)',
                    background: activeTab === 'direct' ? 'var(--white)' : 'rgba(0,0,0,0.5)',
                    color: activeTab === 'direct' ? '#000' : 'var(--white)',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                >
                  Direct Booking (Supabase)
                </button>
              </div>
            </div>

            <div className="msgbox">
              <div className="pick" role="group" aria-label="Package">
                <button
                  type="button"
                  aria-pressed={selectedTier === 1}
                  onClick={() => handleSelectTier(1)}
                >
                  {t.t1}
                </button>
                <button
                  type="button"
                  aria-pressed={selectedTier === 2}
                  onClick={() => handleSelectTier(2)}
                >
                  {t.t2}
                </button>
                <button
                  type="button"
                  aria-pressed={selectedTier === 3}
                  onClick={() => handleSelectTier(3)}
                >
                  {t.t3}
                </button>
              </div>

              {activeTab === 'quick' ? (
                <>
                  <label className="cap" htmlFor="msg">
                    {t.msgLabel}
                  </label>
                  <textarea
                    id="msg"
                    value={msgText}
                    onChange={(e) => {
                      setMsgText(e.target.value);
                      setIsMsgEdited(true);
                    }}
                    rows={4}
                  />

                  <div className="row2">
                    <button
                      type="button"
                      className="beam-btn"
                      onClick={handleCopy}
                    >
                      <span className="beam" aria-hidden="true">
                        <span className="beam-ring">
                          <span className="beam-glow"></span>
                          <span className="beam-line"></span>
                        </span>
                      </span>
                      <span className="lbl">{t.copy}</span>
                    </button>
                    <a
                      className="pill gb"
                      href="https://ig.me/m/wolfxfilms"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.igDm}
                    </a>
                    <a
                      className="pill gb"
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.sendWhatsapp}
                    </a>
                  </div>
                  {toast && <span className="toast">{toast}</span>}
                </>
              ) : (
                <form onSubmit={handleDirectSubmit} style={{ display: 'grid', gap: '12px' }}>
                  <div style={{ display: 'grid', gap: '4px' }}>
                    <label className="cap">{t.namePlaceholder}</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / TechCorp"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      style={{
                        padding: '12px 16px',
                        background: 'rgba(0,0,0,0.7)',
                        border: '1px solid var(--line-2)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gap: '4px' }}>
                    <label className="cap">{t.emailPlaceholder}</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      style={{
                        padding: '12px 16px',
                        background: 'rgba(0,0,0,0.7)',
                        border: '1px solid var(--line-2)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gap: '4px' }}>
                    <label className="cap">{t.phonePlaceholder}</label>
                    <input
                      type="text"
                      placeholder="e.g. +57 300 000 0000 or @handle"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      style={{
                        padding: '12px 16px',
                        background: 'rgba(0,0,0,0.7)',
                        border: '1px solid var(--line-2)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div style={{ display: 'grid', gap: '4px' }}>
                    <label className="cap">{t.msgLabel}</label>
                    <textarea
                      value={msgText}
                      onChange={(e) => {
                        setMsgText(e.target.value);
                        setIsMsgEdited(true);
                      }}
                      rows={3}
                      style={{
                        padding: '12px 16px',
                        background: 'rgba(0,0,0,0.7)',
                        border: '1px solid var(--line-2)',
                        borderRadius: '12px',
                        color: '#fff',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="beam-btn"
                    style={{ marginTop: '8px' }}
                  >
                    <span className="beam" aria-hidden="true">
                      <span className="beam-ring">
                        <span className="beam-glow"></span>
                        <span className="beam-line"></span>
                      </span>
                    </span>
                    <span className="lbl">
                      {isSubmitting ? t.leadSubmitting : t.submitLead}
                    </span>
                  </button>

                  {submitStatus === 'success' && (
                    <div style={{ color: 'var(--glow)', fontSize: '14px', fontWeight: 500 }}>
                      ✓ {t.leadSuccess}
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div style={{ color: '#ff6b6b', fontSize: '14px' }}>
                      ✕ {t.leadError}
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
