import React from 'react';
import { Link } from 'react-router-dom';

import CodeBlock from '../../components/CodeBlock';
import UploadFiles from '../../components/edit/upload/Upload';
import formatTimestampToDate from '../../utility/formatTimestampToDate';
import { StyledReactMarkdown } from '../styledSinglePost';
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
} from './styledEditPost';
import useEditPost from './useEditPost';

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
    canSaveEditPost,
  } = useEditPost();

  return (
    <StyledArticle>
      <h2>記事を編集する</h2>
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
      <UploadFiles uploadPath={id} />
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
        <StyledButton
          onClick={() => updatePost(id)}
          disabled={!canSaveEditPost}
        >
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
