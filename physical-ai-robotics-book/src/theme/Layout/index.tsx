/**
 * Layout wrapper for ChatKit Frontend integration.
 *
 * Adds ChatWidget and SelectionPopup globally to all pages.
 *
 * @spec 006-chatkit-frontend
 */

import React, { useCallback } from 'react';
import OriginalLayout from '@theme-original/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { ChatWidget } from '../../components/Chat';
import { SelectionPopup } from '../../components/TextSelection';
import { useChat } from '../../hooks/useChat';
import type { SelectionContext } from '../../types/chat';

/**
 * Inner component that uses the chat hook.
 * Separated to ensure hooks are called inside a component.
 */
function ChatIntegration(): React.ReactElement {
  const { setSelectedText, open } = useChat();

  // Handle "Ask about selection" click
  const handleAskAboutSelection = useCallback(
    (context: SelectionContext) => {
      setSelectedText(context);
      open();
    },
    [setSelectedText, open],
  );

  return (
    <>
      <SelectionPopup onAskAboutSelection={handleAskAboutSelection} />
      <ChatWidget />
    </>
  );
}

/**
 * Layout wrapper that includes ChatWidget and SelectionPopup globally.
 *
 * Per spec: Chat available on all pages without per-page setup.
 * State persists during navigation.
 *
 * BrowserOnly wrapper ensures chat components only render on client-side
 * to avoid SSR issues with localStorage, window.getSelection, etc.
 */
export default function Layout(props: React.PropsWithChildren<{}>): React.ReactElement {
  return (
    <>
      <OriginalLayout {...props} />
      <BrowserOnly fallback={null}>
        {() => <ChatIntegration />}
      </BrowserOnly>
    </>
  );
}
