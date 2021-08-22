import { useEffect, useState } from 'react';

import type { Post, PostResponse, PostTarget } from '~/services/getPost';
import getPost from '~/services/getPost';

// NOTE: https://log.pocka.io/ja/posts/typescript-promisetype/
type PromiseType<T> = T extends Promise<infer P> ? P : never;

export interface Params {
  id: Post['id'];
  target: PostTarget;
  idToken?: string;
}

const useGetPost = ({ id, target, idToken }: Params) => {
  const [status, setStatus] = useState<PromiseType<PostResponse>['status']>();
  const [post, setPost] = useState<PromiseType<PostResponse>['post']>({
    id: '',
    title: '',
    content: '',
    release: false,
    createDate: '',
  });

  useEffect(() => {
    const fetchGetPost = async () => {
      const { status, post } = await getPost(id, target, idToken);

      setStatus(status);
      setPost(post);
    };

    fetchGetPost();
  }, [id, target, idToken]);

  return { post, status };
};

export default useGetPost;
