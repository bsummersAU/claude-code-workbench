import { useState } from 'react';
import InputBar from './InputBar';

export default function CompactHeroBar({ onSend, onClose }) {
  const [input, setInput] = useState('');

  function handleSubmit() {
    if (input.trim()) { onSend(input.trim()); setInput(''); }
  }

  return (
    <div className="hero-gradient" style={{ padding: '18px 20px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, fontWeight: 500, margin: 0 }}>
              Your Murdoch guide — ask anything
            </p>
          </div>
          <button
            onClick={onClose}
            title="Return to home page"
            style={{
              display: 'flex', alignItems: 'center', gap: 5,
              background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.28)',
              color: 'white', borderRadius: 8, padding: '5px 11px',
              fontSize: 12, fontWeight: 600, cursor: 'pointer',
              backdropFilter: 'blur(6px)', fontFamily: 'inherit',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.26)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </button>
        </div>
        <InputBar value={input} onChange={setInput} onSubmit={handleSubmit}
          placeholder="Ask a follow-up question…" autoFocus />
      </div>
    </div>
  );
}
