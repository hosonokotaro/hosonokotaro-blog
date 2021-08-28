import React from 'react';

import Title from '@/atoms/Title';
import Markdown from '@/organisms/Markdown';
import type { Post } from '~/services/getPost';

import {
  MarkdownWrapper,
  PreviewTitle,
  StyledPreview,
  Timestamp,
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
      <Timestamp>
        記事作成日時: {createDate}
        <br />
        id: {id}
        <br />
        現在の Release フラグ: {release ? 'true' : 'false'}
      </Timestamp>
      <StyledPreview>
        <PreviewTitle>Preview</PreviewTitle>
        <Title text={title} />
        <Timestamp>{createDate}</Timestamp>
        <MarkdownWrapper>
          <Markdown content={content} />
        </MarkdownWrapper>
      </StyledPreview>
    </div>
  );
};

export default Preview;
