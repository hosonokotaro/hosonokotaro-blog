import { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { firebaseAuth } from '~/services/authentication';
import deletePostService from '~/services/deletePost';
import type { getCurrentUserType } from '~/services/getCurrentUser';
import getCurrentUser from '~/services/getCurrentUser';
import type { Post, PostWithStatusType } from '~/services/getPost';
import getPost from '~/services/getPost';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useEditPost = () => {
  const [draftTitle, setDraftTitle] = useState<Post['title']>('');
  const [draftContent, setDraftContent] = useState<Post['content']>('');
  const [draftRelease, setDraftRelease] = useState<Post['release']>(false);
  const [postWithStatus, setPostWithStatus] = useState<
    PromiseType<PostWithStatusType>
  >();
  // TODO: currentUser は記事更新時に利用する
  const [currentUser, setCurrentUser] = useState<
    PromiseType<getCurrentUserType>
  >();

  const { id } = useParams<{ id: Post['id'] }>();

  const history = useHistory();

  const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDraftTitle(event.target.value);
  };

  const onContentChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDraftContent(event.target.value);
  };

  const onReleaseChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDraftRelease(event.target.checked);
  };

  const updatePost = () => {
    // TODO: API に更新データを投げる
    console.log(id);
  };

  const handleDeletePost = async () => {
    if (!currentUser || !currentUser.authHeader) return;

    const deleteConfirm = confirm('削除します');

    if (deleteConfirm) {
      // TODO: 記事を削除したときに画像を削除する機能を復活させる
      await deletePostService({ id, idToken: currentUser.authHeader.idToken });
      alert(`${id}を削除しました`);
      history.push('/edit');
    }
  };

  const getUserAndPost = useCallback(async () => {
    const currentUser = await getCurrentUser();

    const postWithStatus = await getPost({
      id,
      target: 'privateEnabled',
      idToken: currentUser.authHeader.idToken,
    });

    setPostWithStatus(postWithStatus);
    setCurrentUser(currentUser);
  }, [id]);

  useEffect(() => {
    if (!postWithStatus) return;

    setDraftTitle(postWithStatus.post.title);
    setDraftContent(postWithStatus.post.content);
    setDraftRelease(postWithStatus.post.release);
  }, [postWithStatus]);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(() => {
      getUserAndPost();
    });

    return () => {
      unsubscribe;
    };
  }, [getUserAndPost]);

  return {
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
  };
};

export default useEditPost;

export type EditPostType = ReturnType<typeof useEditPost>;
