import { useEffect, useState } from 'react';

import useSession from '~/customHooks/useSession';
import createPost from '~/services/createPost';
import type { getCurrentUserType } from '~/services/getCurrentUser';
import getCurrentUser from '~/services/getCurrentUser';
import type { PostListType } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useEditTop = () => {
  const [createTitle, setCreateTitle] = useState<string>();
  const [idToken, setIdToken] = useState<string>();
  const [postListWithStatus, setPostListWithStatus] = useState<
    PromiseType<PostListType>
  >();
  const [currentUser, setCurrentUser] = useState<
    PromiseType<getCurrentUserType>
  >();

  const { userId } = useSession();

  // FIXME: 投稿時のタイムゾーンが正しく設定されていないので修正する（ローカル環境の問題の可能性もある）
  const handleSubmit = async () => {
    if (!createTitle || !currentUser || !currentUser.authHeader) return;

    await createPost({
      title: createTitle,
      content: '',
      release: false,
      idToken: currentUser.authHeader.idToken,
    });

    setCreateTitle(undefined);
  };

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateTitle(e.target.value);
  };

  const canSaveNewPost = Boolean(createTitle);

  useEffect(() => {
    if (!userId) return;

    const loggedIn = async () => {
      const currentUser = await getCurrentUser();

      const postListWithStatus = await getPostList({
        target: 'privateEnabled',
        idToken: currentUser.authHeader.idToken,
      });

      setPostListWithStatus(postListWithStatus);
      setCurrentUser(currentUser);
      setIdToken(currentUser.authHeader.idToken);
    };

    loggedIn();
  }, [userId]);

  return {
    idToken,
    postListWithStatus,
    createTitle,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  };
};

export default useEditTop;
