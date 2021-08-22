import { useEffect, useState } from 'react';

import type { PostListResponse, TitleListTarget } from '~/services/getPostList';
import getPostList from '~/services/getPostList';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

interface Params {
  target: TitleListTarget;
  idToken?: string;
}

const useGetPostList = ({ target, idToken }: Params) => {
  const [postListResponse, setPostListResponse] = useState<
    PromiseType<PostListResponse>
  >();

  useEffect(() => {
    const fetchGetPostList = async () => {
      const getPostListResponse = await getPostList(target, idToken);

      setPostListResponse(getPostListResponse);
    };

    fetchGetPostList();
  }, [target, idToken]);

  return postListResponse;
};

export default useGetPostList;
