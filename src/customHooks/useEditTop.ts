import { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { getCurrentUser, stateChanged } from '~/services/authentication';
import createPost from '~/services/createPost';
import getPostList from '~/services/getPostList';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;
type CurrentUser = ReturnType<typeof getCurrentUser>;
type PostListResponse = ReturnType<typeof getPostList>;

const useEditTop = () => {
  const [createTitle, setCreateTitle] = useState<string>('');
  const [postListResponse, setPostListResponse] =
    useState<PromiseType<PostListResponse>>();
  const [currentUser, setCurrentUser] = useState<PromiseType<CurrentUser>>();

  // FIXME: ローカル環境のタイムゾーンが正しく設定されていないので修正したい
  const handleSubmit = async () => {
    if (!createTitle || !currentUser || !currentUser.authHeader.idToken) return;

    await createPost(currentUser.authHeader.idToken, {
      title: createTitle,
      content: '',
      release: false,
    });

    setCreateTitle('');

    await getAllPostList();
  };

  const onTitleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(e.target.value);
  };

  const getAllPostList = useCallback(async () => {
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
    const unsubscribe = stateChanged(getAllPostList);

    return () => {
      unsubscribe;
    };
  }, [getAllPostList]);

  return {
    postListResponse,
    createTitle,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  };
};

export default useEditTop;
