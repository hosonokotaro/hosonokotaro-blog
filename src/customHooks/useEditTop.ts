import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { PromiseType } from 'utility-types';

import { getCurrentUser, stateChanged } from '~/services/authentication';
import createPost from '~/services/createPost';
import getPostList from '~/services/getPostList';

const useEditTop = () => {
  const [createTitle, setCreateTitle] = useState<string>('');
  const [postListResponse, setPostListResponse] =
    useState<PromiseType<ReturnType<typeof getPostList>>>();
  const [currentUser, setCurrentUser] =
    useState<PromiseType<ReturnType<typeof getCurrentUser>>>();

  const onTitleChanged = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(e.target.value);
  }, []);

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

  // FIXME: ローカル環境のタイムゾーンが正しく設定されていないので修正したい
  const handleSubmit = useCallback(async () => {
    if (!createTitle || !currentUser || !currentUser.authHeader.idToken) return;

    await createPost(currentUser.authHeader.idToken, {
      title: createTitle,
      content: '',
      release: false,
    });

    setCreateTitle('');

    await getAllPostList();
  }, [createTitle, currentUser, getAllPostList]);

  const canSaveNewPost = useMemo(() => Boolean(createTitle), [createTitle]);

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
