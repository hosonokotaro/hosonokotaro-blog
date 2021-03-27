import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchPostList,
  getPathTarget,
  InitialState,
} from '~/store/postListSlice';
import { RootState } from '~/store/rootReducer';

const useGetPostList = (target: getPathTarget): InitialState => {
  const dispatch = useDispatch();
  const { status, titleDateList } = useSelector(
    (state: RootState) => state.postList
  );

  useEffect(() => {
    if (status === 'success') return;

    dispatch(fetchPostList(target));
  }, [dispatch, target, status]);

  return { status, titleDateList };
};

export default useGetPostList;
