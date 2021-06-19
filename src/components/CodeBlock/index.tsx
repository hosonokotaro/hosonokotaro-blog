import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

// FIXME: 呼び出し方を修正したい
SyntaxHighlighter.registerLanguage('tsx', tsx);

// TODO: 編集画面を修正したら書き直す
const CodeBlock: React.FC<{ value: string; language: string }> = (props) => {
  // FIXME: なにかの事情で undefined になっている。調査したい
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
