import { useState } from 'react';
import { useSelector } from 'react-redux';

import deletePostService from '~/services/deletePost';
import type { Post } from '~/store/postSlice';
import type { RootState } from '~/store/rootReducer';

interface Props {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  release: boolean;
  setRelease: React.Dispatch<React.SetStateAction<boolean>>;
  onTitleChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChanged: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onReleaseChanged: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updatePost: (id: Post['id']) => void;
  deletePost: (id: Post['id']) => void | undefined;
}

const useEditPost = (): Props => {
  // NOTE: form には初期値が必須となる
  const [title, setTitle] = useState<Post['title']>('');
  const [content, setContent] = useState<Post['content']>('');
  const [release, setRelease] = useState<Post['release']>(false);

  const { authHeader } = useSelector((state: RootState) => state.authHeader);

  const onTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onContentChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const onReleaseChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRelease(event.target.checked);
  };

  const updatePost = (id: string) => {
    // TODO: API に更新データを投げる
    console.log(id);
  };

  const deletePost = (id: string) => {
    if (!authHeader.bearerToken) return;

    const deleteConfirm = confirm('削除します');

    if (deleteConfirm) {
      // FIXME: 早期 return しても非同期処理が走った原因を知りたい
      deletePostService({ id, bearerToken: authHeader.bearerToken });
      alert(`${id}を削除しました`);
    }
  };

  return {
    title,
    setTitle,
    content,
    setContent,
    release,
    setRelease,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    updatePost,
    deletePost,
  };
};

export default useEditPost;
