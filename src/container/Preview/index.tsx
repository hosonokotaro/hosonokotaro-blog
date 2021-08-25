import React from 'react';

import Title from '@/atoms/Title';
import Markdown from '@/organisms/Markdown';
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
        <Markdown content={content} />
      </StyledPreview>
    </div>
  );
};

export default Preview;
