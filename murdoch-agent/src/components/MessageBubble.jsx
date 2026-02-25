import CourseCard from './CourseCard';

const BRAND = '#C8203A'; // Primary/Murdoch Red (600)

function parseMarkdown(text) {
  return text.split('\n').map((line, i, arr) => {
    const parts = line.split(/\*\*(.*?)\*\*/g);
    return (
      <span key={i}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j}>{part}</strong> : part
        )}
        {i < arr.length - 1 && <br />}
      </span>
    );
  });
}

function AgentAvatar() {
  return (
    <div style={{
      flexShrink: 0, width: 32, height: 32, borderRadius: '50%',
      background: BRAND, display: 'flex', alignItems: 'center',
      justifyContent: 'center', color: 'white', fontSize: 11, fontWeight: 700,
    }}>
      MU
    </div>
  );
}

function InfoBlock({ block }) {
  return (
    <div style={{
      borderRadius: 12, padding: '14px 16px', marginBottom: 10,
      borderLeft: `4px solid ${block.accent || BRAND}`,
      background: `${block.accent || BRAND}0d`,
    }}>
      <p style={{ fontWeight: 600, fontSize: 13, color: '#0b1213', marginBottom: 4 }}>{block.title}</p>
      <p style={{ fontSize: 13, color: '#574f46', lineHeight: 1.6, margin: 0 }}>{block.content}</p>
    </div>
  );
}

function StepList({ steps }) {
  return (
    <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 14 }}>
      {steps.map((s) => (
        <div key={s.step} style={{ display: 'flex', gap: 12 }}>
          <div style={{
            flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
            background: BRAND, display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: 'white', fontSize: 12, fontWeight: 700,
          }}>
            {s.step}
          </div>
          <div>
            <p style={{ fontWeight: 600, fontSize: 13, color: '#0b1213', margin: '2px 0 3px' }}>{s.title}</p>
            <p style={{ fontSize: 13, color: '#574f46', lineHeight: 1.6, margin: 0 }}>{s.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function MessageBubble({ message }) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="animate-fade-up" style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{
          maxWidth: '72%', padding: '10px 16px',
          borderRadius: '18px 18px 4px 18px',
          background: BRAND, color: 'white',
          fontSize: 14, lineHeight: 1.55,
        }}>
          {message.text}
        </div>
      </div>
    );
  }

  const { type, text, chips, courses, steps, infoBlocks } = message;

  return (
    <div className="animate-fade-up" style={{ display: 'flex', gap: 12 }}>
      <AgentAvatar />
      <div style={{ flex: 1, minWidth: 0 }}>
        {text && (
          <div style={{
            display: 'inline-block', padding: '10px 16px',
            borderRadius: '4px 18px 18px 18px',
            background: '#F5F5F5', color: '#212121',
            fontSize: 14, lineHeight: 1.6, marginBottom: 12, maxWidth: '100%',
          }}>
            {parseMarkdown(text)}
          </div>
        )}

        {steps && (
          <div style={{ marginBottom: 12 }}>
            <StepList steps={steps} />
          </div>
        )}

        {infoBlocks && (
          <div style={{ marginBottom: 12 }}>
            {infoBlocks.map((block, i) => (
              <InfoBlock key={i} block={block} />
            ))}
          </div>
        )}

        {courses && courses.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: 12, marginBottom: 12,
          }}>
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}

        {chips && chips.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 4 }}>
            {chips.map((chip, i) => (
              <button
                key={i}
                className="prompt-chip-chat"
                onClick={() => message.onChipClick?.(chip.message)}
              >
                {chip.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
