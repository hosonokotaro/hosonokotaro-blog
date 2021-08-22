import useSWR from 'swr';

import type { Post, PostTarget } from '~/services/getPost';
import getPost from '~/services/getPost';

export interface Params {
  id: Post['id'];
  target: PostTarget;
}

const useSinglePost = ({ id, target }: Params) => {
  const { data, error } = useSWR([id, target], getPost);

  return { postResponse: data, isLoading: !error && !data, isError: error };
};

export default useSinglePost;
