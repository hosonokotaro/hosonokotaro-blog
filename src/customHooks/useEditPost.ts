import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// TODO: LoggedInUserId は getIdToken から取れば良い
import useGetPost from '~/customHooks/useGetPost';
import deletePostService from '~/services/deletePost';
import type { getCurrentUserType } from '~/services/getCurrentUser';
import getIdToken from '~/services/getCurrentUser';
import type { Post } from '~/services/getPost';

// TODO: Login 判定を入れる
// TODO: store を排除する
// import type { Post, Target } from '~/store/postSlice';
// import { fetchPost, setPost } from '~/store/postSlice';
// import type { RootState } from '~/store/rootReducer';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useEditPost = () => {
  const { id } = useParams<{ id: Post['id'] }>();

  // const dispatch = useDispatch();
  // const { post, status } = useSelector((state: RootState) => state.post);
  // const { authHeader } = useSelector((state: RootState) => state.authHeader);

  const [draftTitle, setDraftTitle] = useState<Post['title']>();
  const [draftContent, setDraftContent] = useState<Post['content']>();
  const [draftRelease, setDraftRelease] = useState<Post['release']>();
  const [userId, setUserId] = useState<string>();
  const [authHeader, setAuthHeader] = useState<
    PromiseType<getCurrentUserType>['authHeader']
  >();

  const { status, post } = useGetPost({
    id,
    target: 'privateEnabled',
    idToken: authHeader?.idToken,
  });

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

  const deletePost = async () => {
    if (!authHeader) return;

    const deleteConfirm = confirm('削除します');

    if (deleteConfirm) {
      await deletePostService({ id, bearerToken: authHeader.idToken });
      alert(`${id}を削除しました`);

      // FIXME: 存在しないページに戻ると白い画面になるのを修正したい
      history.push('/edit');
    }
  };

  // const userId = getLoggedInUserId();

  // NOTE: fetch, set と命名した理由は、取得時は非同期だが、destructor 時は同期的に state を変更するため
  // useEffect(() => {
  //   dispatch(fetchPost(id, target, authHeader.bearerToken));

  //   return () => {
  //     dispatch(
  //       setPost({
  //         status: 'idle',
  //         post: {
  //           id: '',
  //           title: '',
  //           content: '',
  //           release: false,
  //           createDate: '',
  //         },
  //       })
  //     );
  //   };
  // }, [dispatch, id, target, authHeader.bearerToken]);

  useEffect(() => {
    setDraftTitle(post.title);
    setDraftContent(post.content);
    setDraftRelease(post.release);
  }, [post]);

  useEffect(() => {
    const loggedIn = async () => {
      const { status: idTokenStatus, authHeader } = await getIdToken();

      if (idTokenStatus === 'success') {
        // const { status: postListStatus, titleDateList } = await getPostList({
        //   target: 'privateEnabled',
        //   idToken: authHeader.idToken,
        // });
        // if (postListStatus === 'success') setTitleDateList(titleDateList);

        setAuthHeader(authHeader);
        setUserId(authHeader.idToken);
      }
    };

    loggedIn();
  }, []);

  return {
    userId,
    id,
    post,
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
