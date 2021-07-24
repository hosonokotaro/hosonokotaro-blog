import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { firebaseAuth } from '~/services/authentication';
import deletePostService from '~/services/deletePost';
import type { getCurrentUserType } from '~/services/getCurrentUser';
import getCurrentUser from '~/services/getCurrentUser';
import type { Post, PostWithStatusType } from '~/services/getPost';
import getPost from '~/services/getPost';
import type { Post as ServicesPost } from '~/services/updatePost';
import updatePost from '~/services/updatePost';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useEditPost = () => {
  const [draftTitle, setDraftTitle] = useState<Post['title']>('');
  const [draftContent, setDraftContent] = useState<Post['content']>('');
  const [draftRelease, setDraftRelease] = useState<Post['release']>(false);
  const [postWithStatus, setPostWithStatus] = useState<
    PromiseType<PostWithStatusType>
  >();
  // NOTE: currentUser は記事更新時に利用する
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

  const handleUpdatePost = async () => {
    if (!currentUser || !currentUser.authHeader) return;

    const updateConfirm = confirm('更新します');

    const post: ServicesPost = {
      title: draftTitle,
      content: draftContent,
      release: draftRelease,
    };

    if (updateConfirm) {
      await updatePost({ id, idToken: currentUser.authHeader.idToken }, post);
      history.push('/edit');
    }
  };

  const handleDeletePost = async () => {
    if (!currentUser || !currentUser.authHeader) return;

    const deleteConfirm = confirm('削除します');

    if (deleteConfirm) {
      // TODO: 記事を削除したときに画像を削除する機能を復活させる
      await deletePostService({ id, idToken: currentUser.authHeader.idToken });
      history.push('/edit');
    }
  };

  useEffect(() => {
    if (!postWithStatus) return;

    setDraftTitle(postWithStatus.post.title);
    setDraftContent(postWithStatus.post.content);
    setDraftRelease(postWithStatus.post.release);
  }, [postWithStatus]);

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(async () => {
      const tempCurrentUser = await getCurrentUser();
      const tempPostWithStatus = await getPost({
        id,
        target: 'privateEnabled',
        idToken: tempCurrentUser.authHeader.idToken,
      });

      setPostWithStatus(tempPostWithStatus);
      setCurrentUser(tempCurrentUser);
    });

    return () => {
      unsubscribe;
    };
  }, [id]);

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
    handleUpdatePost,
    handleDeletePost,
  };
};

export default useEditPost;

export type EditPostType = ReturnType<typeof useEditPost>;
