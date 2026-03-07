import { useRef, useEffect } from 'react';
import { BRAND } from '../constants';

export default function InputBar({ value, onChange, onSubmit, placeholder, autoFocus = false }) {
  const ref = useRef(null);
  useEffect(() => { if (autoFocus && ref.current) ref.current.focus(); }, [autoFocus]);

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); onSubmit(); }
  }

  const active = !!value.trim();
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <input
        ref={ref}
        type="text"
        className="chat-input"
        placeholder={placeholder || 'Ask me anything about studying at Murdoch…'}
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={handleKey}
      />
      <button
        onClick={onSubmit}
        disabled={!active}
        aria-label="Send"
        style={{
          position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
          background: active ? BRAND : '#d1d5db',
          cursor: active ? 'pointer' : 'not-allowed',
          color: 'white', border: 'none', borderRadius: 9,
          width: 36, height: 36, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.2s', padding: 0,
        }}
      >
        <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7-7 7M3 12h18" />
        </svg>
      </button>
    </div>
  );
}
