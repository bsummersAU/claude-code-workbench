import { BRAND } from '../constants';
import { TRUST_ITEMS } from '../data/siteData';

export default function TrustStrip() {
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
