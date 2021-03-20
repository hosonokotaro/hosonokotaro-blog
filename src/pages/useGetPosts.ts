import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostList, InitialState } from '../store/blogPostSlice';
import { RootState } from '../store/rootReducer';

const useGetPosts = (): InitialState => {
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
