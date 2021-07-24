import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

// FIXME: 呼び出し方を修正したい
SyntaxHighlighter.registerLanguage('tsx', tsx);

// NOTE: Syntax highlighter は value という props 名を受け入れる？
interface Props {
  value: string;
  language: string;
}

const CodeBlock: React.FC<Props> = ({ value, language }) => {
  if (value === undefined) {
    return null;
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={syntaxStyle}
      role="img"
      aria-label="コードスニペットによる説明"
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
