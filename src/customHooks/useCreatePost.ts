import { useState } from 'react';
import { useSelector } from 'react-redux';

import type { Props as ReturnProps } from '@/CreatePost';
import createPost from '~/services/createPost';
import type { RootState } from '~/store/rootReducer';

// FIXME: 現状ではタイトル以外は決め打ちになっているので再考したい
const useCreatePost = (): ReturnProps => {
  const [title, setTitle] = useState('');

  const { authHeader } = useSelector((state: RootState) => state.authHeader);

  const handleSubmit = () => {
    if (!authHeader.bearerToken) return;

    createPost({
      title,
      content: '',
      release: false,
      bearerToken: authHeader.bearerToken,
    });

    setTitle('');
  };

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const canSaveNewPost = Boolean(title);

  return {
    title,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  };
};

export default useCreatePost;
