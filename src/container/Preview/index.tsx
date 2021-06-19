import React from 'react';

import CodeBlock from '@/CodeBlock';
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
        <h2>{title}</h2>
        <StyledTimestamp>{createDate}</StyledTimestamp>
        <StyledReactMarkdown source={content} renderers={{ code: CodeBlock }} />
      </StyledPreview>
    </div>
  );
};

export default Preview;
