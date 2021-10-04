import useSWR from 'swr';

import type { Post, PostTarget } from '~/services/getPost';
import getPost from '~/services/getPost';

const useSinglePost = (id: Post['id'], target: PostTarget) => {
  const { data, error } = useSWR([id, target], getPost);

  return {
    singlePostResponse: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSinglePost;
