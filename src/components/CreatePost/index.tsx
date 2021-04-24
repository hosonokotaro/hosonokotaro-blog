import React from 'react';

import {
  StyledButton,
  StyledInputText,
  StyledLabel,
  StyledSection,
  StyledWrapper,
} from './styledIndex';

export interface Props {
  title: string;
  handleSubmit: () => void;
  onTitleChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  canSaveNewPost: boolean;
}

const CreatePost: React.FC<Props> = ({
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
