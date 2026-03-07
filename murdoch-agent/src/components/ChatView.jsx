import { useRef, useEffect } from 'react';
import CompactHeroBar from './CompactHeroBar';
import MessageBubble from './MessageBubble';
import TypingIndicator from './TypingIndicator';
import { FEATURED_PROMPTS } from '../data/responses';

export default function ChatView({ messages, isTyping, onSend, onChipClick, onClose }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 60px)' }}>
      <CompactHeroBar onSend={onSend} onClose={onClose} />

      <div style={{ flex: 1, padding: '32px 16px', background: '#f9fafb' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>
          {messages.map(msg => (
            <MessageBubble key={msg.id} message={{ ...msg, onChipClick }} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={bottomRef} />
        </div>
      </div>

      <div style={{ borderTop: '1px solid #e5e7eb', background: 'white', padding: '12px 20px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <p style={{ fontSize: 10, color: '#aaa', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Quick topics
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {FEATURED_PROMPTS.map(p => (
              <button key={p.id} className="prompt-chip-chat" onClick={() => onSend(p.message)}>
                {p.icon} {p.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
