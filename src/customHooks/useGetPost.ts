import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import type { InitialState, Target } from '~/store/postSlice';
import { fetchPost } from '~/store/postSlice';
import type { RootState } from '~/store/rootReducer';

const useGetPost = (target?: Target): InitialState => {
  const { id } = useParams<{ id: InitialState['post']['id'] }>();
  const dispatch = useDispatch();
  const { post, status } = useSelector((state: RootState) => state.post);
  const { authHeader } = useSelector((state: RootState) => state.authHeader);

  useEffect(() => {
    dispatch(fetchPost(id, target, authHeader.bearerToken));
  }, [dispatch, id, target, authHeader.bearerToken]);

  return { post, status };
};

export default useGetPost;
