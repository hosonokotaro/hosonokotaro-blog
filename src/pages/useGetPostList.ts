import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPostList, InitialState } from '~/store/postListSlice';
import { RootState } from '~/store/rootReducer';

const useGetPostList = (): InitialState => {
  const dispatch = useDispatch();
  const { status, titleDateList } = useSelector(
    (state: RootState) => state.postList
  );

  useEffect(() => {
    if (status === 'success') return;

    dispatch(fetchPostList('/get/titlelist'));
  }, [dispatch, status]);

  return { status, titleDateList };
};

export default useGetPostList;
