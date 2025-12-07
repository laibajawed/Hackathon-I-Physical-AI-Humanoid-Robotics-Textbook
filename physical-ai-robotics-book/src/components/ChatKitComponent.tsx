import React, { useState, useEffect } from 'react';
import { useChatKit } from '@openai/chatkit-react';

// Define TypeScript interfaces
interface ChatKitProps {
  initialThread?: string | null;
}

const ChatKitComponent: React.FC<ChatKitProps> = ({ initialThread: propThread = null }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [initialThread, setInitialThread] = useState<string | null>(null);

  // Initialize thread from localStorage or props
  useEffect(() => {
    const saved = localStorage.getItem('chatkit-thread-id');
    setInitialThread(propThread || saved);
    setIsReady(true);
  }, [propThread]);

  const { control } = useChatKit({
    api: {
      url: 'http://localhost:8000/chatkit',
      domainKey: 'localhost', // Required for ChatKit
    },
    initialThread: initialThread || undefined,
    onThreadChange: ({ threadId }) => {
      if (threadId) {
        localStorage.setItem('chatkit-thread-id', threadId);
      }
    },
    onReady: () => {
      console.log('ChatKit is ready');
    },
    onError: (error) => {
      console.error('ChatKit error:', error);
    },
    startScreen: {
      prompts: [
        { label: 'What can you help me with?', prompt: 'What can you help me with?' },
        { label: 'Tell me a fun fact', prompt: 'Tell me a fun fact' },
        { label: 'How does this chat work?', prompt: 'How does this chat work?' },
      ],
    },
  });

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const newChat = () => {
    localStorage.removeItem('chatkit-thread-id');
    window.location.reload(); // Reset ChatKit state
  };

  if (!isReady) {
    return null; // Don't render until initialization is complete
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={toggleChat}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#4cc9f0', // Cyan accent color
          color: 'white',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            style={{
              width: '90%',
              maxWidth: '800px',
              height: '80%',
              maxHeight: '700px',
              backgroundColor: '#1a1a2e', // Dark navy background
              borderRadius: '12px',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: '#0f3460', // Darker blue header
                color: 'white',
                padding: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h2 style={{ margin: 0, fontSize: '18px' }}>AI Assistant</h2>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  onClick={newChat}
                  style={{
                    background: 'none',
                    border: '1px solid #4cc9f0',
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  New Chat
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '20px',
                    cursor: 'pointer',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
              {control}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatKitComponent;