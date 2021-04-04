import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { getPathTarget, InitialState } from '~/store/postListSlice';
import { fetchPostList } from '~/store/postListSlice';
import type { RootState } from '~/store/rootReducer';

const useGetPostList = (target: getPathTarget): InitialState => {
  const dispatch = useDispatch();
  const { status, titleDateList } = useSelector(
    (state: RootState) => state.postList
  );
  const { authHeader } = useSelector((state: RootState) => state.authHeader);

  useEffect(() => {
    dispatch(fetchPostList(target, authHeader.bearerToken));
  }, [dispatch, target, authHeader.bearerToken]);

  return { status, titleDateList };
};

export default useGetPostList;
