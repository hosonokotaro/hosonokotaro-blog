import React from 'react';
import { Link } from 'react-router-dom';

// import UploadFiles from '@/edit/upload/Upload';
import Login from '@/Login';
import Spinner from '@/Spinner';
import Preview from '~/container/Preview';
import UploadImages from '~/container/UploadImages';
import useEditPost from '~/customHooks/useEditPost';
import useLogin from '~/customHooks/useLogin';

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
    post,
    status,
    draftTitle,
    draftContent,
    draftRelease,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    updatePost,
    deletePost,
  } = useEditPost({ target: 'all' });

  const { user, login, logout } = useLogin();

  return (
    <>
      <StyledArticle>
        {user && post && status === 'success' ? (
          <>
            <h2>記事を編集する</h2>
            <StyledLabel htmlFor={`editPostTitle-${id}`}>タイトル</StyledLabel>
            <StyledInputText
              type="text"
              id={`editPostTitle-${id}`}
              name={`editPostTitle-${id}`}
              defaultValue={post.title}
              onChange={onTitleChanged}
            />
            <StyledLabel htmlFor={`editPostContent-${id}`}>本文</StyledLabel>
            <StyledTextarea
              id={`editPostContent-${id}`}
              name={`editPostContent-${id}`}
              defaultValue={post.content}
              onChange={onContentChanged}
            ></StyledTextarea>
            <UploadImages uploadPath={id} />
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
              <StyledButton onClick={deletePost}>
                {/* TODO: 記事を削除したときに画像を削除する機能を復活させる */}
                この記事を削除する
              </StyledButton>
            </StyledButtonWrapper>
            <Preview
              id={id}
              title={draftTitle ?? ''}
              content={draftContent ?? ''}
              release={post.release}
              createDate={post.createDate}
            />
            <StyledReturn>
              <Link to="/edit">投稿された記事一覧に行く</Link>
            </StyledReturn>
          </>
        ) : (
          <Spinner />
        )}
      </StyledArticle>
      <Login user={user} login={login} logout={logout} />
    </>
  );
};

export default EditPost;
