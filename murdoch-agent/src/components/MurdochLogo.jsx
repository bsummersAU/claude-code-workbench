const LOGO_URL = 'https://cdn.murdoch.edu.au/mu-images/default-source/global/mu-logo.svg?sfvrsn=330f5be3_1';

export default function MurdochLogo({ white = false, height = 40 }) {
  if (white) {
    // On dark/teal backgrounds, show a white-tinted version using a CSS filter
    return (
      <img
        src={LOGO_URL}
        alt="Murdoch University"
        height={height}
        style={{
          height,
          width: 'auto',
          filter: 'brightness(0) invert(1)',
          display: 'block',
        }}
      />
    );
  }

  return (
    <img
      src={LOGO_URL}
      alt="Murdoch University"
      height={height}
      style={{ height, width: 'auto', display: 'block' }}
    />
  );
}
