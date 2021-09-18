import React from 'react';
import ReactMarkdown from 'react-markdown';

import InlineCode from '@/atoms/InlineCode';
import TextItem from '@/atoms/TextItem';
import Title from '@/atoms/Title';
import CodeBlock from '@/molecules/CodeBlock';
import TextList from '@/molecules/TextList';
import Image from '@/organisms/Image';
import TextBox from '~/components/atoms/TextBox';
import type { Post } from '~/services/getPost';

interface Props {
  content: Post['content'];
}

const Markdown: React.FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown
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
          return <TextBox isMargin>{children}</TextBox>;
        },
        ul({ children }) {
          return <TextList>{children}</TextList>;
        },
        li({ children }) {
          return <TextItem text={String(children).replace(/\n$/, '')} />;
        },
        h2({ children }) {
          return (
            <Title
              text={String(children).replace(/\n$/, '')}
              rank="h2"
              isMargin
            />
          );
        },
        h3({ children }) {
          return (
            <Title
              text={String(children).replace(/\n$/, '')}
              rank="h3"
              isMargin
            />
          );
        },
        h4({ children }) {
          return (
            <Title
              text={String(children).replace(/\n$/, '')}
              rank="h4"
              isMargin
            />
          );
        },
      }}
      // FIXME: A tag と Link tag を自作するときに解決したい
      linkTarget="_blank"
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
