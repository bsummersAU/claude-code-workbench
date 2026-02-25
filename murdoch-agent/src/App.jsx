import { useState, useRef, useEffect } from 'react';
import Nav from './components/Nav';
import MurdochLogo from './components/MurdochLogo';
import MessageBubble from './components/MessageBubble';
import TypingIndicator from './components/TypingIndicator';
import { FEATURED_PROMPTS, getAgentResponse } from './data/responses';

const BRAND = '#C8203A';      // Primary/Murdoch Red (600)
const BRAND_DARK = '#8C0E26'; // Primary/800

const HERO_IMAGE = 'https://cdn.murdoch.edu.au/mu-images/librariesprovider4/banner/apply-now-for-semester-1-2025-murdoch-uni.tmb-1280-16x9c.webp';

// ─── Trust strip ─────────────────────────────────────────────────────────────
const TRUST_ITEMS = [
  { icon: '🏆', stat: 'Top 2%',  label: 'World university ranking',   sub: 'QS World University Rankings 2024' },
  { icon: '🌍', stat: '90+',     label: 'Countries represented',       sub: 'A truly global community' },
  { icon: '⭐', stat: '5-star',  label: 'Student experience',          sub: 'QILT Student Experience Survey' },
  { icon: '🎓', stat: '200+',    label: 'Scholarships available',       sub: 'Domestic & international students' },
];

// ─── Footer data ─────────────────────────────────────────────────────────────
const FOOTER_COLS = [
  {
    heading: 'Study',
    links: ['Undergraduate', 'Postgraduate', 'Research degrees', 'Online study', 'Short courses', 'Pathways & enabling', 'How to apply'],
  },
  {
    heading: 'International',
    links: ['Study in Australia', 'Entry requirements', 'English requirements', 'Fees & scholarships', 'Visas & arrival', 'Life in Perth', 'Study abroad'],
  },
  {
    heading: 'Campus life',
    links: ['Accommodation', 'Student support', 'Sport & recreation', 'Clubs & societies', 'Health & wellbeing', 'Career services', 'Library'],
  },
  {
    heading: 'About Murdoch',
    links: ['Our story', 'Rankings & reputation', 'Research impact', 'Campuses', 'Sustainability', 'Governance', 'Careers at Murdoch'],
  },
];

const QUICK_LINKS = ['Contact us', 'Staff directory', 'Events', 'News', 'Feedback', 'Accessibility', 'Privacy'];

// ─── Explore tiles (landing page) ────────────────────────────────────────────
const EXPLORE_TILES = [
  {
    title: 'Undergraduate study',
    desc: 'Over 100 bachelor degrees across business, science, health, engineering, arts and more.',
    img: 'https://cdn.murdoch.edu.au/mu-images/librariesprovider4/default-album/ug2.tmb-640-16x9c.webp',
    cta: 'Browse degrees',
    msg: 'Help me find a course',
  },
  {
    title: 'Postgraduate study',
    desc: 'Coursework and research masters, graduate certificates, and PhD programs.',
    img: 'https://cdn.murdoch.edu.au/mu-images/librariesprovider4/default-album/pg.tmb-640-16x9c.webp',
    cta: 'Explore postgrad',
    msg: 'Tell me about postgraduate study',
  },
  {
    title: 'Research at Murdoch',
    desc: 'World-class research institutes tackling challenges in health, sustainability and security.',
    img: 'https://cdn.murdoch.edu.au/mu-images/librariesprovider4/default-album/research.tmb-640-16x9c.webp',
    cta: 'Discover research',
    msg: 'Tell me about research at Murdoch',
  },
];

// ─── Input bar ───────────────────────────────────────────────────────────────
function InputBar({ value, onChange, onSubmit, placeholder, autoFocus = false }) {
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

// ─── Hero section ─────────────────────────────────────────────────────────────
function HeroSection({ onSend }) {
  const [input, setInput] = useState('');
  const [imgError, setImgError] = useState(false);

  function handleSubmit() {
    if (input.trim()) { onSend(input.trim()); setInput(''); }
  }

  return (
    <section style={{ position: 'relative', minHeight: 'calc(100vh - 60px)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Background image + overlay */}
      {!imgError && (
        <img
          src={HERO_IMAGE}
          alt=""
          onError={() => setImgError(true)}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center',
          }}
        />
      )}
      {/* Gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: imgError
          ? 'linear-gradient(140deg, #004f4d 0%, #007a77 50%, #009e9a 100%)'
          : 'linear-gradient(to right, rgba(0,68,66,0.92) 0%, rgba(0,100,97,0.78) 55%, rgba(0,132,129,0.40) 100%)',
      }} />

      {/* Grid pattern overlay */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06, pointerEvents: 'none' }}>
        <defs>
          <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
            <path d="M 56 0 L 0 0 0 56" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 10, flex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center',
        maxWidth: 1100, margin: '0 auto', padding: '60px 28px',
        width: '100%',
      }}>
        <div style={{ maxWidth: 640 }}>
          {/* Eyebrow */}
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

          {/* Headline */}
          <h1 style={{
            color: 'white', fontWeight: 800, lineHeight: 1.08,
            fontSize: 'clamp(2.1rem, 5vw, 3.5rem)',
            letterSpacing: '-0.025em', margin: '0 0 16px',
            textShadow: '0 2px 16px rgba(0,0,0,0.25)',
          }}>
            Where will your<br />future take you?
          </h1>

          {/* Sub */}
          <p style={{
            color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            fontWeight: 300, lineHeight: 1.65, margin: '0 0 32px',
          }}>
            Ask me anything — courses, applications, scholarships, campus life.<br />
            I'm here to help you find your path at Murdoch.
          </p>

          {/* Input */}
          <div style={{ marginBottom: 16, maxWidth: 580 }}>
            <InputBar value={input} onChange={setInput} onSubmit={handleSubmit}
              placeholder="Ask me anything about studying at Murdoch…" />
          </div>

          {/* Prompt chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 9 }}>
            {FEATURED_PROMPTS.map(p => (
              <button key={p.id} className="prompt-chip" onClick={() => onSend(p.message)}>
                <span>{p.icon}</span><span>{p.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <path d="M0 56C480 0 960 0 1440 56V56H0V56Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// ─── Trust strip ─────────────────────────────────────────────────────────────
function TrustStrip() {
  return (
    <section style={{ background: 'white', padding: '52px 0 44px', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px' }}>
        <p style={{ textAlign: 'center', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#aaa', marginBottom: 28 }}>
          Why choose Murdoch
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 28 }}>
          {TRUST_ITEMS.map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, marginBottom: 4 }}>{item.icon}</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: BRAND }}>{item.stat}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#0b1213', marginTop: 3 }}>{item.label}</div>
              <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 3, lineHeight: 1.45 }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Explore tiles ────────────────────────────────────────────────────────────
function ExploreTiles({ onSend }) {
  return (
    <section style={{ background: '#f9fafb', padding: '60px 0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: '#0b1213', marginBottom: 6, textAlign: 'center' }}>
          Explore your options
        </h2>
        <p style={{ fontSize: 14, color: '#574f46', textAlign: 'center', marginBottom: 36 }}>
          Not sure where to start? Browse by study level or ask the guide above.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
          {EXPLORE_TILES.map((tile, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 16, overflow: 'hidden',
              border: '1px solid #e5e7eb',
              boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
              transition: 'all 0.25s',
              cursor: 'default',
            }}>
              <div style={{ position: 'relative', paddingTop: '56.25%', background: '#e0f2f2' }}>
                <img
                  src={tile.img}
                  alt={tile.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { e.target.style.display = 'none'; }}
                />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(0,68,66,0.35) 0%, transparent 60%)',
                }} />
              </div>
              <div style={{ padding: '18px 20px 20px' }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0b1213', marginBottom: 8 }}>{tile.title}</h3>
                <p style={{ fontSize: 13, color: '#574f46', lineHeight: 1.6, marginBottom: 16 }}>{tile.desc}</p>
                <button
                  onClick={() => onSend(tile.msg)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '8px 16px', borderRadius: 8,
                    background: BRAND, color: 'white',
                    fontSize: 13, fontWeight: 600, border: 'none',
                    cursor: 'pointer', transition: 'background 0.2s',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = BRAND_DARK)}
                  onMouseLeave={e => (e.currentTarget.style.background = BRAND)}
                >
                  {tile.cta}
                  <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner({ onSend }) {
  return (
    <section style={{ background: '#F5F5F5', padding: '48px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0px 4px 16px 4px rgba(0,0,0,0.10)',
          minHeight: 280,
        }}
          className="cta-banner-grid"
        >
          {/* ── Text side ── */}
          <div style={{
            background: 'white',
            borderLeft: '5px solid #C8203A',
            padding: '44px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 0,
          }}>
            <h2 style={{
              color: '#212121',
              fontWeight: 600,
              fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              margin: '0 0 14px',
            }}>
              Are you in Year 12 or a recent high school leaver?
            </h2>
            <p style={{
              color: '#616161',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: 1.65,
              margin: '0 0 28px',
              maxWidth: 400,
            }}>
              Discover our range of undergraduate courses, early offers program, supportive
              environment, and scholarship opportunities — and more. Ignite your potential
              at Murdoch University.
            </p>
            <div>
              <button
                onClick={() => onSend('I am in Year 12 — what are my options at Murdoch?')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  padding: '10px 22px', borderRadius: 6,
                  background: '#C8203A', color: 'white',
                  fontSize: 13, fontWeight: 600,
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#8C0E26')}
                onMouseLeave={e => (e.currentTarget.style.background = '#C8203A')}
              >
                Learn more
                <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* ── Photo side ── */}
          <div style={{ position: 'relative', minHeight: 240, background: '#E0E0E0' }}>
            <img
              src="https://cdn.murdoch.edu.au/mu-images/librariesprovider4/default-album/ug2.tmb-640-16x9c.webp"
              alt="Murdoch students studying"
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'center',
              }}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      {/* Acknowledgement banner */}
      <div style={{ background: '#0b1213', padding: '24px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
            <img src="https://cdn.murdoch.edu.au/mu-images/default-source/global/flag-aboriginal.png?sfvrsn=82c980db_1" alt="Aboriginal flag" style={{ height: 28, borderRadius: 2 }} onError={e => e.target.style.display='none'} />
            <img src="https://cdn.murdoch.edu.au/mu-images/default-source/global/flag-torres-straits.png?sfvrsn=6c7a10dd_1" alt="Torres Strait Islander flag" style={{ height: 28, borderRadius: 2 }} onError={e => e.target.style.display='none'} />
          </div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 12, lineHeight: 1.6, margin: 0 }}>
            Murdoch University acknowledges the Traditional Custodians throughout Western Australia and their continuing connection to the land, waters and community. We pay our respects to all members of the Aboriginal communities and their cultures; and to Elders both past and present.
          </p>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ background: '#1a2425', padding: '52px 0 36px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          {/* Logo row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <MurdochLogo white height={34} />
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginTop: 10, maxWidth: 260, lineHeight: 1.6 }}>
                Ngala kwop biddi. Building a brighter future together.
              </p>
            </div>
            {/* Contact */}
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, lineHeight: 1.9 }}>
              <p style={{ color: 'white', fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Get in touch</p>
              <p>📞 +61 8 9360 6000</p>
              <a href="#" style={{ color: BRAND, textDecoration: 'none', display: 'block' }}>Future student enquiries →</a>
              <a href="#" style={{ color: BRAND, textDecoration: 'none', display: 'block' }}>Help & emergencies →</a>
            </div>
          </div>

          {/* Nav columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 28, marginBottom: 44 }}>
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <p style={{ color: 'white', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                  {col.heading}
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, textDecoration: 'none', transition: 'color 0.15s', lineHeight: 1.4, display: 'block' }}
                        onMouseEnter={e => (e.target.style.color = 'white')}
                        onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.55)')}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Campuses */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, marginBottom: 20 }}>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
              Campuses
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {['Perth (South Street)', 'Rockingham', 'Mandurah', 'Singapore', 'Dubai'].map(c => (
                <a key={c} href="#" style={{
                  padding: '4px 12px', borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.55)', fontSize: 11,
                  textDecoration: 'none', transition: 'all 0.15s',
                }}
                  onMouseEnter={e => { e.target.style.borderColor = BRAND; e.target.style.color = BRAND; }}
                  onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.15)'; e.target.style.color = 'rgba(255,255,255,0.55)'; }}
                >
                  {c}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 20,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 12,
          }}>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11, margin: 0 }}>
              © 2025 Murdoch University. CRICOS Provider Code 00125J
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
              {QUICK_LINKS.map(link => (
                <a key={link} href="#" style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, textDecoration: 'none' }}
                  onMouseEnter={e => (e.target.style.color = 'rgba(255,255,255,0.7)')}
                  onMouseLeave={e => (e.target.style.color = 'rgba(255,255,255,0.35)')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Compact hero bar (chat state) ────────────────────────────────────────────
function CompactHeroBar({ onSend, onClose }) {
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

// ─── Chat view ────────────────────────────────────────────────────────────────
function ChatView({ messages, isTyping, onSend, onChipClick, onClose }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 60px)' }}>
      <CompactHeroBar onSend={onSend} onClose={onClose} />

      <div style={{ flex: 1, padding: '32px 16px', background: '#f9fafb' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {messages.map(msg => (
            <MessageBubble key={msg.id} message={{ ...msg, onChipClick }} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Quick prompts strip */}
      <div style={{ borderTop: '1px solid #e5e7eb', background: 'white', padding: '12px 20px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 10, color: '#aaa', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Quick topics
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {FEATURED_PROMPTS.map(p => (
              <button key={p.id} className="prompt-chip-chat" onClick={() => onSend(p.message)}>
                {p.icon} {p.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App root ─────────────────────────────────────────────────────────────────
let msgId = 0;
function makeMsg(role, data) { return { id: ++msgId, role, ...data }; }

export default function App() {
  const [started, setStarted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  function handleReset() {
    setStarted(false);
    setMessages([]);
    setIsTyping(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleSend(text) {
    if (!text.trim()) return;
    if (!started) setStarted(true);
    const userMsg = makeMsg('user', { text });
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);
    const delay = 700 + Math.random() * 900;
    setTimeout(() => {
      setIsTyping(false);
      const response = getAgentResponse(text);
      setMessages(prev => [...prev, makeMsg('agent', response)]);
    }, delay);
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav onReset={handleReset} showReset={started} />
      {!started ? (
        <>
          <HeroSection onSend={handleSend} />
          <TrustStrip />
          <ExploreTiles onSend={handleSend} />
          <CTABanner onSend={handleSend} />
          <Footer />
        </>
      ) : (
        <ChatView
          messages={messages}
          isTyping={isTyping}
          onSend={handleSend}
          onChipClick={handleSend}
          onClose={handleReset}
        />
      )}
    </div>
  );
}
