import { BRAND, BRAND_DARK } from '../constants';

export default function CTABanner({ onSend }) {
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
          <div style={{
            background: 'white',
            borderLeft: '5px solid #C8203A',
            padding: '44px 40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
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
                  background: BRAND, color: 'white',
                  fontSize: 13, fontWeight: 600,
                  border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = BRAND_DARK)}
                onMouseLeave={e => (e.currentTarget.style.background = BRAND)}
              >
                Learn more
                <svg width="13" height="13" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div style={{ position: 'relative', minHeight: 240, background: '#E0E0E0' }}>
            <img
              src="https://cdn.murdoch.edu.au/mu-images/librariesprovider4/default-album/ug2.tmb-640-16x9c.webp"
              alt="Murdoch students studying"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
              onError={e => { e.target.style.display = 'none'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
