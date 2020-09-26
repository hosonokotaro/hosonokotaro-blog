import React from 'react';

import useNewPost from '../hooks/useNewPost';
import {
  StyledButton,
  StyledInputText,
  StyledLabel,
  StyledLabelInlineBlock,
  StyledSection,
  StyledTextarea,
  StyledWrapper,
} from './styled/styledNewPost';

const NewPost: React.FC = () => {
  const {
    title,
    content,
    release,
    handleSubmit,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    canSave,
  } = useNewPost();

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
          <StyledLabel htmlFor="postContent">本文</StyledLabel>
          <StyledTextarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          ></StyledTextarea>
          <StyledLabelInlineBlock htmlFor="postRelease">
            公開フラグ
          </StyledLabelInlineBlock>
          <input
            type="checkbox"
            name="postRelease"
            checked={release}
            onChange={onReleaseChanged}
          />
        </form>
        <StyledButton onClick={handleSubmit} disabled={!canSave}>
          記事を新規作成する
        </StyledButton>
      </StyledWrapper>
    </StyledSection>
  );
};

export default NewPost;
