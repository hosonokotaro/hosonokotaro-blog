import React from 'react';
import { Link } from 'react-router-dom';

import formatTimestampToDate from '../../utility/formatTimestampToDate';
import CodeBlock from '../CodeBlock';
import { StyledReactMarkdown } from '../styled/styledSinglePost';
import useGetEditPost from './hooks/useGetEditPost';
import {
  StyledArticle,
  StyledButton,
  StyledButtonWrapper,
  StyledInputText,
  StyledLabel,
  StyledLabelInlineBlock,
  StyledPreview,
  StyledPreviewTitle,
  StyledReturn,
  StyledTextarea,
  StyledTimestamp,
} from './styled/styledEditPost';

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
