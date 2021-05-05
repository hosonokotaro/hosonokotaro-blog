import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import createPost from '~/services/createPost';
import type { getTitleListTarget, InitialState } from '~/store/postListSlice';
import { fetchPostList, setPostList } from '~/store/postListSlice';
import type { RootState } from '~/store/rootReducer';

interface Props {
  target: getTitleListTarget;
}

interface UseEditTop {
  status: string;
  titleDateList: InitialState['titleDateList'];
  title: string;
  handleSubmit: VoidFunction;
  onTitleChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  canSaveNewPost: boolean;
}

const useEditTop = ({ target }: Props): UseEditTop => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const { status, titleDateList } = useSelector(
    (state: RootState) => state.postList
  );

  const { authHeader } = useSelector((state: RootState) => state.authHeader);

  // TODO: 投稿時のタイムゾーンが正しく設定されていないので修正する
  const handleSubmit = () => {
    if (!authHeader.bearerToken) return;

    createPost({
      title,
      content: '',
      release: false,
      bearerToken: authHeader.bearerToken,
    });

    setTitle('');

    dispatch(fetchPostList(target, authHeader.bearerToken));
  };

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const canSaveNewPost = Boolean(title);

  // NOTE: fetch, set と命名した理由は、取得時は非同期だが、destructor 時は同期的に state を変更するため
  useEffect(() => {
    dispatch(fetchPostList(target, authHeader.bearerToken));

    return () => {
      dispatch(setPostList({ status: 'idle', titleDateList: [] }));
    };
  }, [dispatch, target, authHeader.bearerToken]);

  return {
    status,
    titleDateList,
    title,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  };
};

export default useEditTop;
