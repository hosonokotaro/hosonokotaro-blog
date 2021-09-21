import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputCheckBox from '@/atoms/InputCheckBox';
import InputTextArea from '@/atoms/InputTextArea';
import InputTextInline from '@/atoms/InputTextInline';
import Spinner from '@/atoms/Spinner';
import TextLabel from '@/atoms/TextLabel';
import Title from '@/atoms/Title';
import UploadImage from '@/organisms/UploadImage';
import Preview from '@/templates/Preview';
import useEditPost from '~/customHooks/useEditPost';

// FIXME: Error handling がないので実装したい
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
      {postResponse && (
        <>
          <Title text="記事を編集する" />
          <ContentBox marginTopSize="20px">
            <TextLabel text="タイトル" htmlFor={`editPostTitle-${id}`} />
            <InputTextInline
              id={`editPostTitle-${id}`}
              name={`editPostTitle-${id}`}
              defaultValue={postResponse.post.title}
              handleChange={onTitleChanged}
            />
          </ContentBox>
          <ContentBox marginTopSize="20px">
            <TextLabel text="本文" htmlFor={`editPostContent-${id}`} />
            <InputTextArea
              id={`editPostContent-${id}`}
              name={`editPostContent-${id}`}
              defaultValue={postResponse.post.content}
              handleChange={onContentChanged}
            />
          </ContentBox>

          <UploadImage uploadPath={id} />

          <ContentBox marginTopSize="20px">
            <TextLabel text="公開フラグ" htmlFor={`editPostRelease-${id}`} />
            <InputCheckBox
              id={`editPostRelease-${id}`}
              name={`editPostRelease-${id}`}
              checked={draftRelease}
              handleChange={onReleaseChanged}
            />
          </ContentBox>
          <ContentBox isBetween isHalf marginTopSize="20px">
            <Button text="この記事を更新する" onClick={handleUpdatePost} />
            <Button
              text="この記事を削除する"
              onClick={handleDeletePost}
              attention
            />
          </ContentBox>
          <Preview
            id={id}
            title={draftTitle ?? ''}
            content={draftContent ?? ''}
            release={postResponse.post.release}
            createDate={postResponse.post.createDate}
          />
          <ContentBox marginTopSize="40px">
            <Link to="/edit">投稿された記事一覧に行く</Link>
          </ContentBox>
        </>
      )}
      {!postResponse && <Spinner />}
    </>
  );
};

export default EditPost;
