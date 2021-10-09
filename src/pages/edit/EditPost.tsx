import React from 'react';
import { Helmet } from 'react-helmet';

import Button from '@/atoms/Button';
import ContentBox from '@/atoms/ContentBox';
import InputCheckBox from '@/atoms/InputCheckBox';
import InputTextArea from '@/atoms/InputTextArea';
import InputTextInline from '@/atoms/InputTextInline';
import Spinner from '@/atoms/Spinner';
import TextBox from '@/atoms/TextBox';
import TextLabel from '@/atoms/TextLabel';
import Title from '@/atoms/Title';
import Markdown from '@/organisms/Markdown';
import UploadImage from '@/organisms/UploadImage';
import useEditPost from '~/customHooks/useEditPost';
import useUploadFileList from '~/customHooks/useUploadFileList';

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

  const { imagePathList, deleteImage, imageFile, setImageFile, handleUpload } =
    useUploadFileList(id);

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
          <ContentBox marginTopSize="40px">
            <UploadImage
              imagePathList={imagePathList}
              deleteImage={deleteImage}
              image={imageFile}
              callbackSetImage={setImageFile}
              handleUpload={handleUpload}
            />
          </ContentBox>

          <ContentBox marginTopSize="40px" isBoxCenter isCard>
            <ContentBox>
              <TextLabel text="公開フラグ" htmlFor={`editPostRelease-${id}`} />
              <InputCheckBox
                id={`editPostRelease-${id}`}
                name={`editPostRelease-${id}`}
                checked={draftRelease}
                handleChange={onReleaseChanged}
              />
            </ContentBox>
            <ContentBox marginTopSize="20px" isBetween>
              <Button
                text="この記事を更新する"
                handleClick={handleUpdatePost}
              />
              <Button
                text="この記事を削除する"
                handleClick={handleDeletePost}
                attention
              />
            </ContentBox>
            <ContentBox marginTopSize="20px">
              <TextBox>
                記事作成日時: {postResponse.post.createDate}
                <br />
                id: {id}
                <br />
                現在の公開ステータス:{' '}
                {postResponse.post.release ? '公開' : '非公開'}
              </TextBox>
            </ContentBox>
          </ContentBox>

          <ContentBox marginTopSize="80px">
            <Title text={draftTitle} />
            <ContentBox marginTopSize="20px">
              {postResponse.post.createDate}
            </ContentBox>
            <ContentBox marginTopSize="80px">
              <Markdown content={draftContent} />
            </ContentBox>
          </ContentBox>
        </>
      )}
      {!postResponse && <Spinner />}
    </>
  );
};

export default EditPost;
