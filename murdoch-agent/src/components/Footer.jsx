import MurdochLogo from './MurdochLogo';
import { BRAND } from '../constants';
import { FOOTER_COLS, QUICK_LINKS } from '../data/siteData';

export default function Footer() {
  return (
    <footer>
      <div style={{ background: '#1a2425', padding: '52px 0 36px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 40, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <MurdochLogo white height={34} />
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 12, marginTop: 10, maxWidth: 260, lineHeight: 1.6 }}>
                Ngala kwop biddi. Building a brighter future together.
              </p>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: 12, lineHeight: 1.9 }}>
              <p style={{ color: 'white', fontWeight: 600, fontSize: 13, marginBottom: 4 }}>Get in touch</p>
              <p>📞 +61 8 9360 6000</p>
              <a href="#" style={{ color: BRAND, textDecoration: 'none', display: 'block' }}>Future student enquiries →</a>
              <a href="#" style={{ color: BRAND, textDecoration: 'none', display: 'block' }}>Help & emergencies →</a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 28, marginBottom: 44 }}>
            {FOOTER_COLS.map((col) => (
              <div key={col.heading}>
                <p style={{ color: 'white', fontWeight: 600, fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>
                  {col.heading}
                </p>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#"
                        style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, textDecoration: 'none', transition: 'color 0.15s', lineHeight: 1.4, display: 'block' }}
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
                <a key={link} href="#"
                  style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, textDecoration: 'none' }}
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
