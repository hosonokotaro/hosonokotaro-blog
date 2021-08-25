import React from 'react';

import InlineCode from '@/atoms/InlineCode';
import Title from '@/atoms/Title';
import CodeBlock from '@/molecules/CodeBlock';
import { StyledReactMarkdown } from '~/container/SinglePost/styledIndex';
import type { Post } from '~/services/getPost';

import {
  StyledPreview,
  StyledPreviewTitle,
  StyledTimestamp,
} from './styledIndex';

const Preview: React.FC<Post> = ({
  id,
  title,
  content,
  release,
  createDate,
}) => {
  return (
    <div>
      <StyledTimestamp>
        記事作成日時: {createDate}
        <br />
        id: {id}
        <br />
        現在の Release フラグ: {release ? 'true' : 'false'}
      </StyledTimestamp>
      <StyledPreview>
        <StyledPreviewTitle>Preview</StyledPreviewTitle>
        <Title text={title} />
        <StyledTimestamp>{createDate}</StyledTimestamp>
        <StyledReactMarkdown
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
                return (
                  <InlineCode text={String(children).replace(/\n$/, '')} />
                );
              }

              // HACK: どの条件にも一致しない時に null を返さないとエラーを起こす
              return null;
            },
          }}
        >
          {content}
        </StyledReactMarkdown>
      </StyledPreview>
    </div>
  );
};

export default Preview;
