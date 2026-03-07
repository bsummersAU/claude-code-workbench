import { BRAND, BRAND_DARK } from '../constants';
import { EXPLORE_TILES } from '../data/siteData';

export default function ExploreTiles({ onSend }) {
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
