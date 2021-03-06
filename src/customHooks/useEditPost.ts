import { useEffect, useState } from 'react';
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
  const [userId, setUserId] = useState<string>();
  const [draftTitle, setDraftTitle] = useState<Post['title']>();
  const [draftContent, setDraftContent] = useState<Post['content']>();
  const [draftRelease, setDraftRelease] = useState<Post['release']>();
  const [postWithStatus, setPostWithStatus] = useState<
    PromiseType<PostWithStatusType>
  >();
  // TODO: currentUser は記事更新時に利用する
  const [currentUser, setCurrentUser] = useState<
    PromiseType<getCurrentUserType>
  >();

  const { id } = useParams<{ id: Post['id'] }>();

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

  const deletePost = async () => {
    // if (!authHeader) return;
    // const deleteConfirm = confirm('削除します');
    // if (deleteConfirm) {
    //   await deletePostService({ id, bearerToken: authHeader.idToken });
    //   alert(`${id}を削除しました`);
    //   // FIXME: 存在しないページに戻ると白い画面になるのを修正したい
    //   history.push('/edit');
    // }
  };

  // const userId = getLoggedInUserId();

  useEffect(() => {
    if (!postWithStatus) return;

    setDraftTitle(postWithStatus.post.title);
    setDraftContent(postWithStatus.post.content);
    setDraftRelease(postWithStatus.post.release);
  }, [postWithStatus]);

  useEffect(() => {
    if (!userId) return;

    const loggedIn = async () => {
      const currentUser = await getCurrentUser();

      const postWithStatus = await getPost({
        id,
        target: 'privateEnabled',
        idToken: currentUser.authHeader.idToken,
      });

      setPostWithStatus(postWithStatus);
      setCurrentUser(currentUser);
    };

    loggedIn();
  }, [id, userId]);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      user && setUserId(user.uid);
    });

    return () => {
      unsubscribe;
    };
  }, []);

  return {
    userId,
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
    deletePost,
  };
};

export default useEditPost;

export type EditPostType = ReturnType<typeof useEditPost>;
