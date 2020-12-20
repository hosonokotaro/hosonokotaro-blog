import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts, InitialStateType } from '../postsSlice';
import { RootState } from '../rootReducer';

const useGetPosts = (): InitialStateType => {
  const dispatch = useDispatch();
  const { status, posts } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    if (status === 'success') return;

    dispatch(fetchPosts());
  }, [dispatch, status]);

  return { status, posts };
};

export default useGetPosts;
