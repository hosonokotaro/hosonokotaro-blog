import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const CodeBlock: React.FC<{ value: string; language: string }> = (props) => {
  if (props.value === undefined) {
    return null;
  }

  return (
    <SyntaxHighlighter
      language={props.language}
      style={syntaxStyle}
      role="img"
      aria-label="コードスニペットによる説明"
    >
      {props.value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
