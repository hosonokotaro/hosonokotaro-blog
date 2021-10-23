import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { PromiseType } from 'utility-types';

import { getCurrentUser, stateChanged } from '~/services/authentication';
import deletePostService from '~/services/deletePost';
import type { Post } from '~/services/getPost';
import getPost from '~/services/getPost';
import updatePost from '~/services/updatePost';

type PostFromUpdatePost = Parameters<typeof updatePost>[2];

const useEditPost = () => {
  const [draftTitle, setDraftTitle] = useState<Post['title']>('');
  const [draftContent, setDraftContent] = useState<Post['content']>('');
  const [draftRelease, setDraftRelease] = useState<Post['release']>(false);
  const [postResponse, setPostResponse] =
    useState<PromiseType<ReturnType<typeof getPost>>>();
  // NOTE: currentUser は記事更新時に利用する
  const [currentUser, setCurrentUser] =
    useState<PromiseType<ReturnType<typeof getCurrentUser>>>();

  const { id } = useParams<{ id: Post['id'] }>();

  const history = useHistory();

  const onTitleChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setDraftTitle(event.target.value);
  };

  const onContentChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDraftContent(event.target.value);
  };

  const onReleaseChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setDraftRelease(event.target.checked);
  };

  const handleUpdatePost = async () => {
    if (!currentUser || !currentUser.authHeader) return;

    const updateConfirm = confirm('更新します');

    const post: PostFromUpdatePost = {
      title: draftTitle,
      content: draftContent,
      release: draftRelease,
    };

    if (updateConfirm) {
      await updatePost(id, currentUser.authHeader.idToken, post);
      history.push('/edit');

      // HACK: ページ遷移だが、データ再取得処理が必要。再取得するよりリロードしてしまったほうが楽なので実装した
      history.go(0);
    }
  };

  const handleDeletePost = async () => {
    if (!currentUser || !currentUser.authHeader.idToken) return;
    if (!confirm('記事を削除します')) return;

    // FIXME: 記事を削除したときに画像を削除するためには、全ての画像を一つずつ全て削除しないといけない
    await deletePostService(id, currentUser.authHeader.idToken);
    history.push('/edit');

    // HACK: ページ遷移だが、データ再取得処理が必要。再取得するよりリロードしてしまったほうが楽なので実装した
    history.go(0);
  };

  const getPrivatePost = useCallback(async () => {
    const currentUser = await getCurrentUser();

    // NOTE: Edit 画面は Private が前提なので固定値を入れている
    const target = 'privateEnabled';

    const tempPostResponse = await getPost(
      id,
      target,
      currentUser.authHeader.idToken
    );

    setPostResponse(tempPostResponse);
    setCurrentUser(currentUser);
  }, [id]);

  useEffect(() => {
    if (!postResponse) return;

    setDraftTitle(postResponse.post.title);
    setDraftContent(postResponse.post.content);
    setDraftRelease(postResponse.post.release);
  }, [postResponse]);

  useEffect(() => {
    const unsubscribe = stateChanged(getPrivatePost);

    return () => {
      unsubscribe;
    };
  }, [getPrivatePost]);

  return {
    id,
    postResponse,
    draftTitle,
    draftContent,
    draftRelease,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    handleUpdatePost,
    handleDeletePost,
  };
};

export default useEditPost;
