import React from 'react';
import { Link } from 'react-router-dom';

// import UploadFiles from '@/edit/upload/Upload';
import ErrorMessage from '@/ErrorMessage';
import Login from '@/Login';
import Spinner from '@/Spinner';
import Preview from '~/container/Preview';
import UploadImage from '~/container/UploadImage';
import useEditPost from '~/customHooks/useEditPost';

import {
  StyledArticle,
  StyledButton,
  StyledButtonWrapper,
  StyledInputText,
  StyledLabel,
  StyledLabelInlineBlock,
  StyledReturn,
  StyledTextarea,
} from './styledIndex';

const EditPost: React.FC = () => {
  const {
    id,
    postWithStatus,
    status,
    draftTitle,
    draftContent,
    draftRelease,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    updatePost,
    handleDeletePost,
  } = useEditPost();

  return (
    <>
      <StyledArticle>
        {postWithStatus && postWithStatus.status === 'success' ? (
          <>
            <h2>記事を編集する</h2>
            <StyledLabel htmlFor={`editPostTitle-${id}`}>タイトル</StyledLabel>
            <StyledInputText
              type="text"
              id={`editPostTitle-${id}`}
              name={`editPostTitle-${id}`}
              defaultValue={postWithStatus.post.title}
              onChange={onTitleChanged}
            />
            <StyledLabel htmlFor={`editPostContent-${id}`}>本文</StyledLabel>
            <StyledTextarea
              id={`editPostContent-${id}`}
              name={`editPostContent-${id}`}
              defaultValue={postWithStatus.post.content}
              onChange={onContentChanged}
            ></StyledTextarea>
            <UploadImage uploadPath={id} />
            <StyledLabelInlineBlock htmlFor={`editPostRelease-${id}`}>
              公開フラグ
            </StyledLabelInlineBlock>
            <input
              type="checkbox"
              id={`editPostRelease-${id}`}
              name={`editPostRelease-${id}`}
              checked={draftRelease}
              onChange={onReleaseChanged}
            />
            <StyledButtonWrapper>
              <StyledButton onClick={updatePost}>
                この記事を更新する
              </StyledButton>
              <StyledButton onClick={handleDeletePost}>
                この記事を削除する
              </StyledButton>
            </StyledButtonWrapper>
            <Preview
              id={id}
              title={draftTitle ?? ''}
              content={draftContent ?? ''}
              release={postWithStatus.post.release}
              createDate={postWithStatus.post.createDate}
            />
            <StyledReturn>
              <Link to="/edit">投稿された記事一覧に行く</Link>
            </StyledReturn>
          </>
        ) : (
          <Spinner />
        )}
        {status === 'failure' && <ErrorMessage />}
      </StyledArticle>
      <Login />
    </>
  );
};

export default EditPost;
