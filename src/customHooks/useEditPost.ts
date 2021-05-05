import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import deletePostService from '~/services/deletePost';
import type { InitialState, Post, Target } from '~/store/postSlice';
import { fetchPost, setPost } from '~/store/postSlice';
import type { RootState } from '~/store/rootReducer';

interface Props {
  target: Target;
}

interface UseEditPost {
  id: Post['id'];
  post: InitialState['post'];
  status: InitialState['status'];
  onTitleChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChanged: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onReleaseChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updatePost: (id: Post['id']) => void;
  deletePost: (id: Post['id']) => void | undefined;
}

const useEditPost = ({ target }: Props): UseEditPost => {
  // TODO: Preview 機能を再作成する

  const { id } = useParams<{ id: Post['id'] }>();

  const dispatch = useDispatch();
  const { post, status } = useSelector((state: RootState) => state.post);
  const { authHeader } = useSelector((state: RootState) => state.authHeader);

  const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setTitle(event.target.value);
  };

  const onContentChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // setContent(event.target.value);
  };

  const onReleaseChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setRelease(event.target.checked);
  };

  const updatePost = (id: string) => {
    // TODO: API に更新データを投げる
    console.log(id);
  };

  const deletePost = (id: string) => {
    if (!authHeader.bearerToken) return;

    const deleteConfirm = confirm('削除します');

    if (deleteConfirm) {
      // FIXME: 早期 return しても非同期処理が走った原因を知りたい
      deletePostService({ id, bearerToken: authHeader.bearerToken });
      alert(`${id}を削除しました`);
    }
  };

  // NOTE: fetch, set と命名した理由は、取得時は非同期だが、destructor 時は同期的に state を変更するため
  useEffect(() => {
    dispatch(fetchPost(id, target, authHeader.bearerToken));

    return () => {
      dispatch(
        setPost({
          status: 'idle',
          post: {
            id: '',
            title: '',
            content: '',
            release: false,
            createDate: '',
          },
        })
      );
    };
  }, [dispatch, id, target, authHeader.bearerToken]);

  return {
    id,
    post,
    status,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    updatePost,
    deletePost,
  };
};

export default useEditPost;
