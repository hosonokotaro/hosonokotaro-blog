import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import Login from '~/container/Login';
import Preview from '~/container/Preview';
import UploadImage from '~/container/UploadImage';
import useEditPost from '~/customHooks/useEditPost';

import {
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
    postResponse,
    draftTitle,
    draftContent,
    draftRelease,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    handleUpdatePost,
    handleDeletePost,
  } = useEditPost();

  return (
    <>
      <Helmet>
        <title>{draftTitle} | WEB DEVELOPER HOSONO KOTARO</title>
      </Helmet>
      <Layout tag="article">
        {postResponse && (
          <>
            <Title text="記事を編集する" />
            <StyledLabel htmlFor={`editPostTitle-${id}`}>タイトル</StyledLabel>
            <StyledInputText
              type="text"
              id={`editPostTitle-${id}`}
              name={`editPostTitle-${id}`}
              defaultValue={postResponse.post.title}
              onChange={onTitleChanged}
            />
            <StyledLabel htmlFor={`editPostContent-${id}`}>本文</StyledLabel>
            <StyledTextarea
              id={`editPostContent-${id}`}
              name={`editPostContent-${id}`}
              defaultValue={postResponse.post.content}
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
              <StyledButton onClick={handleUpdatePost}>
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
              release={postResponse.post.release}
              createDate={postResponse.post.createDate}
            />
            <StyledReturn>
              <Link to="/edit">投稿された記事一覧に行く</Link>
            </StyledReturn>
          </>
        )}
        {!postResponse && <Spinner />}
      </Layout>
      <Login />
    </>
  );
};

export default EditPost;
