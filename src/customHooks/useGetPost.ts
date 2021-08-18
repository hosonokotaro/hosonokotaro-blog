import { useEffect, useState } from 'react';

import type { Params, PostWithStatus } from '~/services/getPost';
import getPost from '~/services/getPost';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

const useGetPost = ({ id, target, idToken }: Params) => {
  const [status, setStatus] = useState<PromiseType<PostWithStatus>['status']>();
  const [post, setPost] = useState<PromiseType<PostWithStatus>['post']>({
    id: '',
    title: '',
    content: '',
    release: false,
    createDate: '',
  });

  useEffect(() => {
    const fetchGetPost = async () => {
      const { status, post } = await getPost({ id, target, idToken });

      setStatus(status);
      setPost(post);
    };

    fetchGetPost();
  }, [id, target, idToken]);

  return { post, status };
};

export default useGetPost;
