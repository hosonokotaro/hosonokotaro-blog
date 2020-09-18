import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import firebase, {
  collectionPosts,
  formatTimestampToDate,
  TPost,
} from '../../adapter';

const EditPost: React.FC = () => {
  const { id } = useParams<{ id: TPost['id'] }>();
  const [title, setTitle] = useState<TPost['title'] | null>(null);
  const [content, setContent] = useState<TPost['content'] | null>(null);
  const [release, setRelease] = useState<TPost['release']>(false);
  const [createDate, setCreateDate] = useState<TPost['createDate']>(
    firebase.firestore.Timestamp.now()
  );

  useEffect(() => {
    const unsubscribe = collectionPosts
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists) {
          location.href = '/';
          return false;
        }

        const data = doc.data();

        setTitle(data?.title ? data.title : null);
        setContent(data?.content ? data.content : null);
        setRelease(data?.release ? data.release : false);
        setCreateDate(
          data?.createDate
            ? data.createDate
            : firebase.firestore.Timestamp.now()
        );
      });

    return () => {
      unsubscribe;
    };
  }, [id]);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onReleaseChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelease(e.target.checked);
  };

  const updatePost = (id: TPost['id']) => {
    collectionPosts
      .doc(id)
      .update({
        title,
        content,
        release,
      })
      .then(() => {
        alert(`${id}を更新しました`);
      });
  };

  const deletePost = (id: TPost['id']) => {
    const deleteConfirm = confirm('削除します');

    if (!deleteConfirm) {
      return false;
    }

    collectionPosts
      .doc(id)
      .delete()
      .then(() => {
        setTitle(null);
        setContent(null);
        setRelease(false);

        location.href = '/edit';
      });
  };

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
        defaultChecked={release}
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

  & + label {
    margin-top: 80px;
    padding-top: 80px;
    border-top: 1px solid #333;
  }
`;
