import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// import UploadFiles from '@/edit/upload/Upload';
import CodeBlock from '@/CodeBlock';
import Spinner from '@/Spinner';
import { StyledReactMarkdown } from '~/pages/styledSinglePost';
import useGetPost from '~/pages/useGetPost';

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
  // NOTE: 初期化時に一度だけ読み込まれる
  const post = useGetPost();

  // TODO: 既に存在する記事データを初期値として一度だけ読み込む必要がある
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
      setRelease(post.release);
      console.log('effect');
    }
  }, [post]);

  const {
    title,
    setTitle,
    content,
    setContent,
    release,
    setRelease,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    updatePost,
    deletePost,
  } = useEditPost();

  return (
    <StyledArticle>
      {post ? (
        <>
          <h2>記事を編集する</h2>
          <StyledLabel htmlFor={`editPostTitle-${post.id}`}>
            タイトル
          </StyledLabel>
          <StyledInputText
            type="text"
            id={`editPostTitle-${post.id}`}
            name={`editPostTitle-${post.id}`}
            defaultValue={title}
            onChange={onTitleChanged}
          />
          <StyledLabel htmlFor={`editPostContent-${post.id}`}>本文</StyledLabel>
          <StyledTextarea
            id={`editPostContent-${post.id}`}
            name={`editPostContent-${post.id}`}
            defaultValue={content}
            onChange={onContentChanged}
          ></StyledTextarea>
          {/* <UploadFiles uploadPath={id} /> */}
          <StyledLabelInlineBlock htmlFor={`editPostRelease-${post.id}`}>
            公開フラグ
          </StyledLabelInlineBlock>
          <input
            type="checkbox"
            id={`editPostRelease-${post.id}`}
            name={`editPostRelease-${post.id}`}
            checked={release}
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
            作成日時: {post.createDate}
            <br />
            id: {post.id}
          </StyledTimestamp>
          <StyledPreview>
            <StyledPreviewTitle>Preview</StyledPreviewTitle>
            <h2>{post.title}</h2>
            <StyledTimestamp>{post.createDate}</StyledTimestamp>
            <StyledReactMarkdown
              source={post.content ? post.content : ''}
              renderers={{ code: CodeBlock }}
            />
          </StyledPreview>
          <StyledReturn>
            <Link to="/edit">投稿された記事一覧に行く</Link>
          </StyledReturn>
        </>
      ) : (
        <Spinner />
      )}
    </StyledArticle>
  );
};

export default EditPost;
