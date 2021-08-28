import React from 'react';

import InlineCode from '@/atoms/InlineCode';
import Paragraph from '@/atoms/Paragraph';
import Title from '@/atoms/Title';
import CodeBlock from '@/molecules/CodeBlock';
import Image from '@/organisms/Image';
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

          // NOTE: どの条件にも一致しない時に null を返さないとエラーを起こす
          return null;
        },
        img({ src, alt }) {
          if (!src) return null;

          return <Image src={src} alt={alt} />;
        },
        p({ children }) {
          return <Paragraph as="div">{children}</Paragraph>;
        },
        h2({ children }) {
          return <Title text={String(children).replace(/\n$/, '')} rank="h2" />;
        },
        h3({ children }) {
          return <Title text={String(children).replace(/\n$/, '')} rank="h3" />;
        },
        h4({ children }) {
          return <Title text={String(children).replace(/\n$/, '')} rank="h4" />;
        },
      }}
      // FIXME: A tag と Link tag を自作するときに解決したい
      linkTarget="_blank"
    >
      {content}
    </StyledMarkdown>
  );
};

export default Markdown;
