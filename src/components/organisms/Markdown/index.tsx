import React from 'react';
import ReactMarkdown from 'react-markdown';

import Anchor from '@/atoms/Anchor';
import CodeBlock from '@/atoms/CodeBlock';
import ContentBox from '@/atoms/ContentBox';
import InlineCode from '@/atoms/InlineCode';
import TextBox from '@/atoms/TextBox';
import TextItem from '@/atoms/TextItem';
import TextList from '@/atoms/TextList';
import Title from '@/atoms/Title';
import LoadingImage from '@/molecules/LoadingImage';
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

          return <LoadingImage src={src} alt={alt} />;
        },
        p({ children }) {
          return (
            <ContentBox marginTopSize="20px">
              <TextBox>{children}</TextBox>
            </ContentBox>
          );
        },
        ul({ children }) {
          return (
            <ContentBox marginTopSize="20px">
              <TextList>{children}</TextList>
            </ContentBox>
          );
        },
        li({ children }) {
          return <TextItem text={String(children).replace(/\n$/, '')} />;
        },
        h2({ children }) {
          return (
            <ContentBox marginTopSize="40px">
              <Title text={String(children).replace(/\n$/, '')} rank="h2" />
            </ContentBox>
          );
        },
        h3({ children }) {
          return (
            <ContentBox marginTopSize="40px">
              <Title text={String(children).replace(/\n$/, '')} rank="h3" />
            </ContentBox>
          );
        },
        h4({ children }) {
          return (
            <ContentBox marginTopSize="40px">
              <Title text={String(children).replace(/\n$/, '')} rank="h4" />
            </ContentBox>
          );
        },
        a({ href = '/', children }) {
          return <Anchor linkPath={href}>{children}</Anchor>;
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
