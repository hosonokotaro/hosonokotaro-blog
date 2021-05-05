import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { getTitleListTarget, InitialState } from '~/store/postListSlice';
import { fetchPostList, setPostList } from '~/store/postListSlice';
import type { RootState } from '~/store/rootReducer';

interface Props {
  target: getTitleListTarget;
}

const useGetPostList = ({ target }: Props): InitialState => {
  const dispatch = useDispatch();
  const { status, titleDateList } = useSelector(
    (state: RootState) => state.postList
  );

  // NOTE: fetch, set と命名した理由は、取得時は非同期だが、destructor 時は同期的に state を変更するため
  useEffect(() => {
    dispatch(fetchPostList(target));

    return () => {
      dispatch(setPostList({ status: 'idle', titleDateList: [] }));
    };
  }, [dispatch, target]);

  return { status, titleDateList };
};

export default useGetPostList;
