const FLAG_ABORIGINAL = 'https://cdn.murdoch.edu.au/mu-images/default-source/global/flag-aboriginal.png?sfvrsn=82c980db_1';
const FLAG_TORRES = 'https://cdn.murdoch.edu.au/mu-images/default-source/global/flag-torres-straits.png?sfvrsn=6c7a10dd_1';

export default function Acknowledgement() {
  return (
    <section style={{ background: 'white', padding: '32px 32px 0' }}>
      <div style={{
        maxWidth: 1440,
        margin: '0 auto',
        borderRadius: 8,
        overflow: 'hidden',
        position: 'relative',
        background: 'linear-gradient(30deg, #65135d 7%, #a12262 14%, #e12744 41%, #b72a70 78%, #c74287 100%)',
      }}>
        {/* Decorative circular pattern overlay */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <svg style={{ position: 'absolute', top: 0, right: 0, height: '100%', opacity: 0.12 }}
            viewBox="0 0 800 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid slice">
            <circle cx="600" cy="160" r="260" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="600" cy="160" r="200" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="600" cy="160" r="140" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="600" cy="160" r="80" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="720" cy="60" r="180" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="720" cy="60" r="120" stroke="white" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '32px 48px 32px' }}>

          {/* Title + flags row */}
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 32, marginBottom: 16 }}>
            <h2 style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(1.6rem, 3vw, 2.375rem)',
              lineHeight: 1.2,
              letterSpacing: '-0.03em',
              margin: 0,
              flex: 1,
            }}>
              Acknowledgement of Country
            </h2>
            <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
              <img
                src={FLAG_ABORIGINAL}
                alt="Aboriginal flag"
                style={{ height: 80, width: 'auto', borderRadius: 2, display: 'block' }}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <img
                src={FLAG_TORRES}
                alt="Torres Strait Islander flag"
                style={{ height: 80, width: 'auto', borderRadius: 2, display: 'block' }}
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Body text */}
          <p style={{
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 1.5,
            margin: '0 0 24px',
            maxWidth: 900,
          }}>
            We acknowledge that Murdoch University is situated on the lands of the Whadjuk and Binjareb Noongar people.
            We pay our respects to their enduring and dynamic culture and the leadership of Noongar elders past and present.
            The boodjar (country) on which Murdoch University is located has, for thousands of years, been a place of learning.
            We at Murdoch University are proud to continue this long tradition.
          </p>

          {/* Link row */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
            <p style={{
              color: 'white',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              fontSize: 16,
              lineHeight: 1.5,
              margin: 0,
              flex: '1 1 260px',
            }}>
              As a pillar of our strategic plan, we're committed to the Aboriginal and Torres Strait Islander communities.
            </p>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 24px',
                height: 56,
                borderRadius: 8,
                background: '#E12744',
                color: 'white',
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                fontSize: 18,
                lineHeight: 1.2,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b81e38'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#E12744'; }}
            >
              Find out more
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
