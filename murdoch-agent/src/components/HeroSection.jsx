import { useState } from 'react';
import InputBar from './InputBar';
import { HERO_IMAGE } from '../constants';
import { FEATURED_PROMPTS } from '../data/responses';

export default function HeroSection({ onSend }) {
  const [input, setInput] = useState('');
  const [imgError, setImgError] = useState(false);

  function handleSubmit() {
    if (input.trim()) { onSend(input.trim()); setInput(''); }
  }

  return (
    <section style={{ position: 'relative', minHeight: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {!imgError && (
        <img
          src={HERO_IMAGE}
          alt=""
          onError={() => setImgError(true)}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      )}
      <div style={{
        position: 'absolute', inset: 0,
        background: imgError
          ? 'linear-gradient(140deg, #004f4d 0%, #007a77 50%, #009e9a 100%)'
          : 'linear-gradient(to right, rgba(0,68,66,0.92) 0%, rgba(0,100,97,0.78) 55%, rgba(0,132,129,0.40) 100%)',
      }} />

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }}>
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div style={{
        position: 'relative', zIndex: 10, flex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
        maxWidth: 1100, margin: '0 auto', padding: '60px 28px', width: '100%',
      }}>
        <div style={{ maxWidth: 640 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '4px 14px', borderRadius: 999, marginBottom: 20,
            background: 'rgba(255,255,255,0.16)', color: 'white',
            fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
            backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.22)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
            Your personal Murdoch guide is ready
          </div>

          <h1 style={{
            color: 'white', fontWeight: 800, lineHeight: 1.08,
            fontSize: 'clamp(2.1rem, 5vw, 3.5rem)',
            letterSpacing: '-0.025em', margin: '0 0 16px',
            textShadow: '0 2px 16px rgba(0,0,0,0.25)',
          }}>
            Where will your<br />future take you?
          </h1>

          <p style={{
            color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            fontWeight: 300, lineHeight: 1.65, margin: '0 0 32px',
          }}>
            Ask me anything — courses, applications, scholarships, campus life.<br />
            I'm here to help you find your path at Murdoch.
          </p>

          <div style={{ marginBottom: 16, maxWidth: 580 }}>
            <InputBar value={input} onChange={setInput} onSubmit={handleSubmit}
              placeholder="Ask me anything about studying at Murdoch…" />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
            {FEATURED_PROMPTS.map(p => (
              <button key={p.id} className="prompt-chip" onClick={() => onSend(p.message)}>
                <span>{p.icon}</span><span>{p.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0 56C480 0 960 0 1440 56V56H0V56Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
