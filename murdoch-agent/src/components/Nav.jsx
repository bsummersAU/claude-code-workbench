import MurdochLogo from './MurdochLogo';

const NAV_LINKS = [
  'Study',
  'Research',
  'Collaborate',
  'Explore',
  'Current Students',
  'Alumni',
];

export default function Nav({ onReset, showReset = false }) {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50, width: '100%',
      background: 'white', borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 20px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 60,
      }}>
        {/* Logo — clickable to go home */}
        <button
          onClick={onReset}
          style={{ background: 'none', border: 'none', padding: 0, cursor: onReset ? 'pointer' : 'default', lineHeight: 0 }}
          aria-label="Murdoch University home"
        >
          <MurdochLogo height={36} />
        </button>

        {/* Nav links — hidden on mobile */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }} className="hidden md:flex">
          {NAV_LINKS.map(link => (
            <a key={link} href="#" style={{
              fontSize: 13, fontWeight: 500, color: '#574f46',
              textDecoration: 'none', transition: 'color 0.15s',
            }}
              onMouseEnter={e => (e.target.style.color = '#C8203A')}
              onMouseLeave={e => (e.target.style.color = '#616161')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {showReset && (
            <button
              onClick={onReset}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '6px 12px', borderRadius: 8,
                border: '1px solid #e5e7eb', background: 'white',
                fontSize: 12, fontWeight: 600, color: '#574f46',
                cursor: 'pointer', transition: 'all 0.2s',
                fontFamily: 'inherit',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C8203A'; e.currentTarget.style.color = '#C8203A'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#E0E0E0'; e.currentTarget.style.color = '#616161'; }}
              aria-label="Return to home"
            >
              <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to home
            </button>
          )}
          <a href="#" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '8px 16px', borderRadius: 8,
            background: '#C8203A', color: 'white',
            fontSize: 13, fontWeight: 600, textDecoration: 'none',
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.target.style.background = '#8C0E26')}
            onMouseLeave={e => (e.target.style.background = '#C8203A')}
          >
            Apply now
          </a>
        </div>
      </div>
    </nav>
  );
}
