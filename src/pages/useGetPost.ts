import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import type { Post, Target } from '~/store/postSlice';
import { fetchPost } from '~/store/postSlice';
import type { RootState } from '~/store/rootReducer';

const useGetPost = (target?: Target): Post | undefined => {
  const [post, setPost] = useState<Post>();
  const { id } = useParams<{ id: Post['id'] }>();
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.post);
  const { authHeader } = useSelector((state: RootState) => state.authHeader);

  const content = posts.find((post) => post.id === id)?.content;

  useEffect(() => {
    if (content) return;

    dispatch(fetchPost(id, target, authHeader.bearerToken));
  }, [content, dispatch, id, target, authHeader.bearerToken]);

  useEffect(() => {
    setPost(posts.find((post) => post.id === id));
  }, [posts, id]);

  return post;
};

export default useGetPost;
