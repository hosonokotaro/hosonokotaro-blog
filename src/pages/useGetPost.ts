import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import type { Post } from '~/store/postSlice';
import { fetchPost } from '~/store/postSlice';
import type { RootState } from '~/store/rootReducer';

const useGetPost = (): Post | undefined => {
  const [post, setPost] = useState<Post>();
  const { id } = useParams<{ id: Post['id'] }>();
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.post);

  const content = posts.find((post) => post.id === id)?.content;

  useEffect(() => {
    if (content) return;

    dispatch(fetchPost(id));
  }, [content, dispatch, id]);

  useEffect(() => {
    setPost(posts.find((post) => post.id === id));
  }, [posts, id]);

  return post;
};

export default useGetPost;
