import { useEffect, useState } from 'react';

import type { PostListWithStatusType, Props } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useGetPostList = ({ target, idToken }: Props) => {
  const [postListWithStatus, setPostListWithStatus] = useState<
    PromiseType<PostListWithStatusType>
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
