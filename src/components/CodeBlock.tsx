import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import syntaxStyle from 'react-syntax-highlighter/dist/esm/styles/prism/tomorrow';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const CodeBlock: React.FC<{ value: string; language: string }> = (props) => {
  return (
    <SyntaxHighlighter language={props.language} style={syntaxStyle}>
      {props.value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
