import { useState } from 'react';
import Nav from './components/Nav';
import Acknowledgement from './components/Acknowledgement';
import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';
import ExploreTiles from './components/ExploreTiles';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import ChatView from './components/ChatView';
import { useChat } from './hooks/useChat';

export default function App() {
  const [started, setStarted] = useState(false);
  const { messages, isTyping, send, reset } = useChat();

  async function handleSend(text) {
    if (!started) setStarted(true);
    await send(text);
  }

  function handleReset() {
    setStarted(false);
    reset();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav onReset={handleReset} showReset={started} />
      {!started ? (
        <>
          <HeroSection onSend={handleSend} />
          <TrustStrip />
          <ExploreTiles onSend={handleSend} />
          <CTABanner onSend={handleSend} />
          <Acknowledgement />
          <Footer />
        </>
      ) : (
        <ChatView
          messages={messages}
          isTyping={isTyping}
          onSend={handleSend}
          onChipClick={handleSend}
          onClose={handleReset}
        />
      )}
    </div>
  );
}
