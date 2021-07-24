import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

// FIXME: 呼び出し方を修正したい
SyntaxHighlighter.registerLanguage('tsx', tsx);

interface Props {
  content: string;
  language: string;
}

const CodeBlock: React.FC<Props> = ({ content, language }) => {
  // NOTE: 存在しない場合、undefined として入ってくるため
  if (content === undefined) {
    return null;
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={syntaxStyle}
      role="img"
      aria-label="コードスニペットによる説明"
    >
      {content}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
