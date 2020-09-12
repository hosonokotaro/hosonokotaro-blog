import React, { useState } from 'react';
import styled from 'styled-components';

import firebase, { collectionPosts } from '../adapter';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [release, setRelease] = useState(false);

  const handleSubmit = () => {
    collectionPosts.add({
      id: collectionPosts.doc().id,
      title,
      content,
      release,
      createDate: firebase.firestore.Timestamp.now(),
    });

    setTitle('');
    setContent('');
    setRelease(false);
  };

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onReleaseChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelease(e.target.checked);
  };

  const canSave = Boolean(title) && Boolean(content);

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

const StyledSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
`;

const StyledWrapper = styled.div`
  padding-top: 20px;
`;

const StyledLabel = styled.label`
  display: block;

  input + & {
    margin-top: 20px;
  }
  textarea + & {
    margin-top: 20px;
  }
`;

const StyledLabelInlineBlock = styled.label`
  display: inline-block;

  textarea + & {
    margin-top: 20px;
  }
`;

const StyledInputText = styled.input`
  width: 100%;

  label + & {
    margin-top: 4px;
  }
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-height: 400px;

  label + & {
    margin-top: 4px;
  }
`;

const StyledButton = styled.button`
  margin-top: 20px;
`;
