import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostList, InitialState } from '~/store/postListSlice';
import { RootState } from '~/store/rootReducer';

// TODO: API の認証権限周りを確認する
const getPath = {
  publicOnly: '/get/titlelist',
  all: '/get/titlelist?private=enabled',
} as const;

type getPathTarget = keyof typeof getPath;

const useGetPostList = (target: getPathTarget): InitialState => {
  const dispatch = useDispatch();
  const { status, titleDateList } = useSelector(
    (state: RootState) => state.postList
  );

  useEffect(() => {
    if (status === 'success') return;

    dispatch(fetchPostList(getPath[target]));
  }, [dispatch, target, status]);

  return { status, titleDateList };
};

export default useGetPostList;
