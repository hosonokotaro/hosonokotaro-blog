import useSWRImmutable from 'swr/immutable';

import type { Post } from '~/services/getPost';
import getPost from '~/services/getPost';

type PostTarget = Parameters<typeof getPost>[1];

const useSinglePost = (id: Post['id'], target: PostTarget) => {
  const { data, error } = useSWRImmutable([id, target], getPost);

  return {
    singlePostResponse: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSinglePost;
