import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostList, InitialStateType } from '../postListSlice';
import { RootState } from '../rootReducer';

const useGetPosts = (): InitialStateType => {
  const dispatch = useDispatch();
  const { status, titleDateList } = useSelector(
    (state: RootState) => state.blogPost
  );

  useEffect(() => {
    if (status === 'success') return;

    dispatch(fetchPostList());
  }, [dispatch, status]);

  return { status, titleDateList };
};

export default useGetPosts;
