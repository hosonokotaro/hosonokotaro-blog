import { useEffect, useState } from 'react';

import type { Params, PostListWithStatus } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useGetPostList = ({ target, idToken }: Params) => {
  const [postListWithStatus, setPostListWithStatus] = useState<
    PromiseType<PostListWithStatus>
  >();

  useEffect(() => {
    const fetchGetPostList = async () => {
      const getPostListWithStatus = await getPostList({
        target,
        idToken,
      });

      setPostListWithStatus(getPostListWithStatus);
    };

    fetchGetPostList();
  }, [target, idToken]);

  return postListWithStatus;
};

export default useGetPostList;
