import MurdochLogo from './MurdochLogo';

const UTILITY_LINKS = ['Current students', 'Alumni', 'Staff', 'Library', 'Contact'];
const PRIMARY_NAV_ITEMS = ['Study', 'Research', 'Collaborate', 'Explore'];

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="#000000" strokeWidth="1.5" />
      <path d="M13.5 13.5L17 17" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchField() {
  return (
    <div className="flex items-center gap-2 px-4 py-3 border border-black rounded-lg bg-white shrink-0 w-[189px]">
      <span className="flex-1 font-semibold text-[18px] leading-[1.2] text-[#A9A9A9] whitespace-nowrap">
        Search
      </span>
      <SearchIcon />
    </div>
  );
}

export default function Nav({ onReset, showReset = false }) {
  return (
    <nav className="sticky top-0 z-50 w-full flex flex-col">

      {/* ── Utility bar ─────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-[#D3D3D3] flex items-center justify-end gap-6 px-8 py-4 w-full">
        {UTILITY_LINKS.map(link => (
          <a
            key={link}
            href="#"
            className="font-medium text-body-md text-black whitespace-nowrap hover:text-primary-600 transition-colors"
          >
            {link}
          </a>
        ))}
        {/* Vertical divider */}
        <div className="w-px h-5 bg-[#D3D3D3] shrink-0" aria-hidden="true" />
        <SearchField />
      </div>

      {/* ── Primary nav bar ─────────────────────────────────────────────── */}
      <div className="bg-white shadow-brand flex items-center gap-6 px-8 py-6 w-full">

        {/* Logo */}
        <button
          onClick={onReset}
          className="shrink-0 border-none bg-transparent p-0 leading-none cursor-pointer"
          aria-label="Murdoch University home"
          style={{ cursor: onReset ? 'pointer' : 'default' }}
        >
          <MurdochLogo height={40} />
        </button>

        {/* Nav items */}
        <div className="flex-1 flex items-center justify-end gap-6">
          {PRIMARY_NAV_ITEMS.map(item => (
            <a
              key={item}
              href="#"
              className="flex items-center gap-2 font-semibold text-[18px] leading-[1.2] text-black whitespace-nowrap hover:text-primary-600 transition-colors"
            >
              {item}
              <ChevronDown />
            </a>
          ))}

        </div>

      </div>
    </nav>
  );
}
