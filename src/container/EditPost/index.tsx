import React from 'react';
import { Link } from 'react-router-dom';

// import UploadFiles from '@/edit/upload/Upload';
import Login from '@/Login';
import Spinner from '@/Spinner';
import Preview from '~/container/Preview';
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
            {/* <UploadFiles uploadPath={id} /> */}
            <StyledLabelInlineBlock htmlFor={`editPostRelease-${id}`}>
              公開フラグ
            </StyledLabelInlineBlock>
            <input
              type="checkbox"
              id={`editPostRelease-${id}`}
              name={`editPostRelease-${id}`}
              checked={post.release}
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
            <Preview
              id={id}
              title={post.title}
              content={post.content}
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
