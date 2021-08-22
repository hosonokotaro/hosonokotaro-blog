import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { firebaseAuth } from '~/services/authentication';
import createPost from '~/services/createPost';
import type { CurrentUser } from '~/services/getCurrentUser';
import getCurrentUser from '~/services/getCurrentUser';
import type { PostListResponse } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useEditTop = () => {
  const [createTitle, setCreateTitle] = useState<string>('');
  const [postListResponse, setPostListResponse] = useState<
    PromiseType<PostListResponse>
  >();
  const [currentUser, setCurrentUser] = useState<PromiseType<CurrentUser>>();

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

  // FIXME: User, Post を分割したい。Post は、private 状態で取得するものであること
  const getUserAndPost = useCallback(async () => {
    const currentUser = await getCurrentUser();

    // NOTE: Edit 画面は Private が前提なので固定値を入れている
    const target = 'privateEnabled';

    const postListResponse = await getPostList(
      target,
      currentUser.authHeader.idToken
    );

    setPostListResponse(postListResponse);
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
    postListResponse,
    createTitle,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  };
};

export default useEditTop;
