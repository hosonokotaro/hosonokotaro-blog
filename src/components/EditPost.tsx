import React, { useState } from 'react';
import styled from 'styled-components';

import { collectionPosts, formatTimestampToDate, TPost } from '../adapter';

const EditSinglePost: React.FC<{ post: TPost }> = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [release, setRelease] = useState(post.release);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onReleaseChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelease(e.target.checked);
  };

  const updatePost = (id: TPost['id']) => {
    collectionPosts
      .doc(id)
      .update({
        title,
        content,
        release,
      })
      .then(() => {
        alert(`${id}を更新しました`);
      });

    setTitle('');
    setContent('');
    setRelease(false);
  };

  const deletePost = (id: TPost['id']) => {
    const deleteConfirm = confirm('削除します');

    if (!deleteConfirm) {
      return false;
    }

    collectionPosts.doc(id).delete();
  };

  return (
    <>
      <StyledLabel htmlFor={`editPostTitle-${post.id}`}>タイトル</StyledLabel>
      <StyledInputText
        type="text"
        id={`editPostTitle-${post.id}`}
        name={`editPostTitle-${post.id}`}
        defaultValue={post.title}
        onChange={onTitleChanged}
      />
      <StyledLabel htmlFor={`editPostContent-${post.id}`}>本文</StyledLabel>
      <StyledTextarea
        id={`editPostContent-${post.id}`}
        name={`editPostContent-${post.id}`}
        defaultValue={post.content}
        onChange={onContentChanged}
      ></StyledTextarea>
      <StyledLabelInlineBlock htmlFor={`editPostRelease-${post.id}`}>
        公開フラグ
      </StyledLabelInlineBlock>
      <input
        type="checkbox"
        id={`editPostRelease-${post.id}`}
        name={`editPostRelease-${post.id}`}
        defaultChecked={post.release}
        onChange={onReleaseChanged}
      />
      <StyledButtonWrapper>
        <StyledButton onClick={() => updatePost(post.id)}>
          この記事を更新する
        </StyledButton>
        <StyledButton onClick={() => deletePost(post.id)}>
          この記事を削除する
        </StyledButton>
      </StyledButtonWrapper>
      <StyledTimestamp>
        作成日時: {formatTimestampToDate(post.createDate)}
        <br />
        id: {post.id}
      </StyledTimestamp>
    </>
  );
};

export default EditSinglePost;

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

const StyledButtonWrapper = styled.div`
  padding-top: 20px;
`;

const StyledButton = styled.button`
  & + button {
    margin-left: 20px;
    color: #f66;
  }
`;

const StyledTimestamp = styled.div`
  padding-top: 20px;

  & + label {
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid #333;
  }
`;
