import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';

SyntaxHighlighter.registerLanguage('tsx', tsx);

// NOTE: Syntax highlighter は value という props が必須
interface Props {
  value: string;
  language: string;
}

const CodeBlock: React.FC<Props> = ({ value, language }) => {
  return (
    <>
      {value && (
        <SyntaxHighlighter
          language={language}
          style={syntaxStyle}
          role="img"
          aria-label="コードスニペットによる説明"
        >
          {value}
        </SyntaxHighlighter>
      )}
    </>
  );
};

export default CodeBlock;
