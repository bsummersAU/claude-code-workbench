export default function TypingIndicator() {
  return (
    <div className="flex gap-3 animate-fade-up">
      <div style={{
        flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
        background: '#008481', display: 'flex', alignItems: 'center',
        justifyContent: 'center', color: 'white', fontSize: 11, fontWeight: 700,
      }}>
        MU
      </div>
      <div style={{
        display: 'inline-flex', alignItems: 'center',
        padding: '10px 14px', borderRadius: '16px 16px 16px 4px',
        background: '#f3f4f6',
      }}>
        <span className="typing-dot" />
        <span className="typing-dot" />
        <span className="typing-dot" />
      </div>
    </div>
  );
}
