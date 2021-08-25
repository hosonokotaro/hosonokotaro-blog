import React from 'react';

import InlineCode from '@/atoms/InlineCode';
import CodeBlock from '@/molecules/CodeBlock';
import type { Post } from '~/services/getPost';

import { StyledMarkdown } from './styledIndex';

interface Props {
  content: Post['content'];
}

const Markdown: React.FC<Props> = ({ content }) => {
  return (
    <StyledMarkdown
      components={{
        code({ inline, className, children }) {
          const match = /language-(\w+)/.exec(className || '');

          if (!inline && match) {
            return (
              <CodeBlock
                value={String(children).replace(/\n$/, '')}
                language={match[1]}
              />
            );
          }

          if (inline) {
            return <InlineCode text={String(children).replace(/\n$/, '')} />;
          }

          // HACK: どの条件にも一致しない時に null を返さないとエラーを起こす
          return null;
        },
      }}
    >
      {content}
    </StyledMarkdown>
  );
};

export default Markdown;
