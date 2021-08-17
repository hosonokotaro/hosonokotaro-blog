import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { firebaseAuth } from '~/services/authentication';
import createPost from '~/services/createPost';
import type { getCurrentUserType } from '~/services/getCurrentUser';
import getCurrentUser from '~/services/getCurrentUser';
import type { PostListWithStatusType } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useEditTop = () => {
  const [createTitle, setCreateTitle] = useState<string>('');
  const [postListWithStatus, setPostListWithStatus] = useState<
    PromiseType<PostListWithStatusType>
  >();
  const [currentUser, setCurrentUser] = useState<
    PromiseType<getCurrentUserType>
  >();

  // FIXME: ローカル環境のタイムゾーンが正しく設定されていないので修正したい
  const handleSubmit = async () => {
    if (!createTitle || !currentUser || !currentUser.authHeader) return;

    await createPost(currentUser.authHeader.idToken, {
      title: createTitle,
      content: '',
      release: false,
    });

    setCreateTitle('');

    await getUserAndPost();
  };

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(e.target.value);
  };

  const getUserAndPost = useCallback(async () => {
    const currentUser = await getCurrentUser();

    const postListWithStatus = await getPostList({
      target: 'privateEnabled',
      idToken: currentUser.authHeader.idToken,
    });

    setPostListWithStatus(postListWithStatus);
    setCurrentUser(currentUser);
  }, []);

  const canSaveNewPost = Boolean(createTitle);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(() => {
      getUserAndPost();
    });

    return () => {
      unsubscribe;
    };
  }, [getUserAndPost]);

  return {
    postListWithStatus,
    createTitle,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  };
};

export default useEditTop;
