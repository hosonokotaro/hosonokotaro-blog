import { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { firebaseAuth } from '~/services/authentication';
import deletePostService from '~/services/deletePost';
import type { CurrentUser } from '~/services/getCurrentUser';
import getCurrentUser from '~/services/getCurrentUser';
import type { Post, PostResponse } from '~/services/getPost';
import getPost from '~/services/getPost';
import type { Post as ServicesPost } from '~/services/updatePost';
import updatePost from '~/services/updatePost';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useEditPost = () => {
  const [draftTitle, setDraftTitle] = useState<Post['title']>('');
  const [draftContent, setDraftContent] = useState<Post['content']>('');
  const [draftRelease, setDraftRelease] = useState<Post['release']>(false);
  const [postResponse, setPostResponse] = useState<PromiseType<PostResponse>>();
  // NOTE: currentUser は記事更新時に利用する
  const [currentUser, setCurrentUser] = useState<PromiseType<CurrentUser>>();

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

    const post: ServicesPost = {
      title: draftTitle,
      content: draftContent,
      release: draftRelease,
    };

    if (updateConfirm) {
      await updatePost(id, currentUser.authHeader.idToken, post);
      history.push('/edit');
    }
  };

  const handleDeletePost = async () => {
    if (!currentUser || !currentUser.authHeader) return;

    const deleteConfirm = confirm('削除します');

    if (deleteConfirm) {
      // FIXME: 記事を削除したときに画像を削除するためには、全ての画像を一つずつ全て削除しないといけない
      await deletePostService(id, currentUser.authHeader.idToken);
      history.push('/edit');
    }
  };

  useEffect(() => {
    if (!postResponse) return;

    setDraftTitle(postResponse.post.title);
    setDraftContent(postResponse.post.content);
    setDraftRelease(postResponse.post.release);
  }, [postResponse]);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(async () => {
      const tempCurrentUser = await getCurrentUser();

      // NOTE: Edit 画面は Private が前提なので固定値を入れている
      const target = 'privateEnabled';

      const tempPostResponse = await getPost(
        id,
        target,
        tempCurrentUser.authHeader.idToken
      );

      setPostResponse(tempPostResponse);
      setCurrentUser(tempCurrentUser);
    });

    return () => {
      unsubscribe;
    };
  }, [id]);

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
