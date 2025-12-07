import React from 'react';
import CodeBlock from '@theme/CodeBlock';

interface CodeBlockProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  showLineNumbers?: boolean;
}

export default function CustomCodeBlock({
  children,
  className,
  title,
  showLineNumbers = false,
}: CodeBlockProps): JSX.Element {
  return (
    <div className="custom-code-block">
      <CodeBlock
        children={children}
        className={className}
        title={title}
        showLineNumbers={showLineNumbers}
      />
    </div>
  );
}