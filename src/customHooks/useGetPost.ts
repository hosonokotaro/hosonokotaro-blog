import { useEffect, useState } from 'react';

import type { Props, Response } from '~/services/getPost';
import getPost from '~/services/getPost';

const useGetPost = ({ id, target, idToken }: Props) => {
  const [status, setStatus] = useState<Response['status']>('idle');
  const [post, setPost] = useState<Response['post']>({
    id: '',
    title: '',
    content: '',
    release: false,
    createDate: '',
  });

  useEffect(() => {
    setStatus('loading');

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
