import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import formatTimestampToDate from '../../utility/formatTimestampToDate';
import CodeBlock from '../CodeBlock';
import useGetEditPost from '../hooks/useGetEditPost';
import { StyledReactMarkdown } from '../styled/styledSinglePost';

const EditPost: React.FC = () => {
  const {
    id,
    title,
    content,
    release,
    createDate,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    updatePost,
    deletePost,
  } = useGetEditPost();

  return (
    <StyledArticle>
      <StyledLabel htmlFor={`editPostTitle-${id}`}>タイトル</StyledLabel>
      <StyledInputText
        type="text"
        id={`editPostTitle-${id}`}
        name={`editPostTitle-${id}`}
        defaultValue={title ? title : ''}
        onChange={onTitleChanged}
      />
      <StyledLabel htmlFor={`editPostContent-${id}`}>本文</StyledLabel>
      <StyledTextarea
        id={`editPostContent-${id}`}
        name={`editPostContent-${id}`}
        defaultValue={content ? content : ''}
        onChange={onContentChanged}
      ></StyledTextarea>
      <StyledLabelInlineBlock htmlFor={`editPostRelease-${id}`}>
        公開フラグ
      </StyledLabelInlineBlock>
      <input
        type="checkbox"
        id={`editPostRelease-${id}`}
        name={`editPostRelease-${id}`}
        checked={release}
        onChange={onReleaseChanged}
      />
      <StyledButtonWrapper>
        <StyledButton onClick={() => updatePost(id)}>
          この記事を更新する
        </StyledButton>
        <StyledButton onClick={() => deletePost(id)}>
          この記事を削除する
        </StyledButton>
      </StyledButtonWrapper>
      <StyledTimestamp>
        作成日時: {formatTimestampToDate(createDate)}
        <br />
        id: {id}
      </StyledTimestamp>
      <StyledPreview>
        <StyledPreviewTitle>Preview</StyledPreviewTitle>
        <h2>{title}</h2>
        <StyledTimestamp>{formatTimestampToDate(createDate)}</StyledTimestamp>
        <StyledReactMarkdown
          source={content ? content : ''}
          renderers={{ code: CodeBlock }}
        />
      </StyledPreview>
      <StyledReturn>
        <Link to="/edit">投稿された記事一覧に行く</Link>
      </StyledReturn>
    </StyledArticle>
  );
};

export default EditPost;

const StyledArticle = styled.article`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
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
`;

const StyledPreviewTitle = styled.div`
  margin-bottom: 40px;
  font-size: 1.6rem;
`;

const StyledPreview = styled.div`
  margin: 40px 0 0 0;
  padding: 40px 0;
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
`;

const StyledReturn = styled.div`
  padding: 40px 0;
`;
