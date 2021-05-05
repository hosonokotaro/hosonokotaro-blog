import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import type { InitialState, Target } from '~/store/postSlice';
import { fetchPost, setPost } from '~/store/postSlice';
import type { RootState } from '~/store/rootReducer';

const useGetPost = (target?: Target): InitialState => {
  const { id } = useParams<{ id: InitialState['post']['id'] }>();
  const dispatch = useDispatch();
  const { post, status } = useSelector((state: RootState) => state.post);
  const { authHeader } = useSelector((state: RootState) => state.authHeader);

  // NOTE: fetch, set と命名した理由は、取得時は非同期だが、destructor 時は同期的に state を変更するため
  useEffect(() => {
    dispatch(fetchPost(id, target, authHeader.bearerToken));

    return () => {
      dispatch(
        setPost({
          status: 'idle',
          post: {
            id: '',
            title: '',
            content: '',
            release: false,
            createDate: '',
          },
        })
      );
    };
  }, [dispatch, id, target, authHeader.bearerToken]);

  return { post, status };
};

export default useGetPost;
