import React from 'react';

import SubTitle from '@/atoms/Title';
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
        <SubTitle text={title} />
        <StyledTimestamp>{createDate}</StyledTimestamp>
        <StyledReactMarkdown source={content} renderers={{ code: CodeBlock }} />
      </StyledPreview>
    </div>
  );
};

export default Preview;
