import { useEffect, useState } from 'react';

import type { PostListType, Props } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useGetPostList = ({ target, idToken }: Props) => {
  const [postListWithStatus, setPostListWithStatus] = useState<
    PromiseType<PostListType>
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

  // NOTE: status = 'failure' の場合はデータ取得に問題があるので、FE側では扱わない
  if (postListWithStatus && postListWithStatus.status === 'failure') return;

  return postListWithStatus;
};

export default useGetPostList;
