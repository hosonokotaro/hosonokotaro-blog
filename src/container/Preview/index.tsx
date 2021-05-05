import React from 'react';

import CodeBlock from '@/CodeBlock';
import { StyledReactMarkdown } from '~/container/SinglePost/styledIndex';
import type { Post } from '~/store/postSlice';

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
      <StyledPreview>
        <StyledPreviewTitle>Preview</StyledPreviewTitle>
        <h2>{title}</h2>
        <StyledTimestamp>{createDate}</StyledTimestamp>
        <StyledReactMarkdown source={content} renderers={{ code: CodeBlock }} />
      </StyledPreview>
      <StyledTimestamp>
        作成日時: {createDate}
        <br />
        id: {id}
        <br />
        release: {release ? 'true' : 'false'}
      </StyledTimestamp>
    </div>
  );
};

export default Preview;
