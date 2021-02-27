import React from 'react';

import { Props as CreatePostProps } from '../pages/edit/useCreatePost';
import {
  StyledButton,
  StyledInputText,
  StyledLabel,
  StyledSection,
  StyledWrapper,
} from './styledCreatePost';

const CreatePost: React.FC<CreatePostProps> = ({
  title,
  handleSubmit,
  onTitleChanged,
  canSaveNewPost,
}) => {
  return (
    <StyledSection>
      <h2>記事の新規作成</h2>
      <StyledWrapper>
        <form>
          <StyledLabel htmlFor="postTitle">タイトル</StyledLabel>
          <StyledInputText
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
        </form>
        <StyledButton onClick={handleSubmit} disabled={!canSaveNewPost}>
          記事を準備する
        </StyledButton>
      </StyledWrapper>
    </StyledSection>
  );
};

export default CreatePost;
