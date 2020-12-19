import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts, Post } from '../postsSlice';
import { RootState } from '../rootReducer';

const useGetPosts = (): { loaded: boolean; posts: Post[] } => {
  const dispatch = useDispatch();
  const { loaded, posts } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return { loaded, posts };
};

export default useGetPosts;
