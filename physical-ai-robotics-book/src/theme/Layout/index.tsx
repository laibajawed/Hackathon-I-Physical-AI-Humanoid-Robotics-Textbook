import React from 'react';
import OriginalLayout from '@theme-original/Layout';
import ChatKitComponent from '@site/src/components/ChatKitComponent';

export default function Layout(props) {
  return (
    <>
      <OriginalLayout {...props} />
      <ChatKitComponent />
    </>
  );
}