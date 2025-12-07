import React from 'react';
import OriginalLayout from '@theme-original/Layout';

// This is a custom layout that extends the original with additional functionality
export default function Layout(props) {
  return (
    <OriginalLayout {...props} />
  );
}