import { useState } from 'react';

let msgId = 0;
function makeMsg(role, data) { return { id: ++msgId, role, ...data }; }

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  async function send(text) {
    if (!text.trim() || isTyping) return;

    const userMsg = makeMsg('user', { text });
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    await streamResponse(updatedMessages);
  }

  async function streamResponse(currentMessages) {
    setIsTyping(true);

    const agentMsgId = ++msgId;
    const agentMsg = { id: agentMsgId, role: 'agent', type: 'text', text: '', streaming: true };

    await new Promise(r => setTimeout(r, 300));
    setIsTyping(false);
    setMessages(prev => [...prev, agentMsg]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: currentMessages }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') break;
          try {
            const { text: chunk, error } = JSON.parse(data);
            if (error) throw new Error(error);
            if (chunk) {
              setMessages(prev => prev.map(m =>
                m.id === agentMsgId ? { ...m, text: m.text + chunk } : m
              ));
            }
          } catch { /* skip malformed chunks */ }
        }
      }
    } catch (err) {
      console.error('Stream error:', err);
      setMessages(prev => prev.map(m =>
        m.id === agentMsgId
          ? { ...m, text: "Sorry, I'm having trouble connecting right now. Please try again in a moment." }
          : m
      ));
    } finally {
      setMessages(prev => prev.map(m =>
        m.id === agentMsgId ? { ...m, streaming: false } : m
      ));
    }
  }

  function reset() {
    setMessages([]);
    setIsTyping(false);
  }

  return { messages, isTyping, send, reset };
}
