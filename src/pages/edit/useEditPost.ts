import { useState } from 'react';

import type { Post } from '~/store/postSlice';

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
  deletePost: (id: Post['id']) => undefined;
}

const useEditPost = (): Props => {
  // NOTE: form には初期値が必須となる
  const [title, setTitle] = useState<Post['title']>('');
  const [content, setContent] = useState<Post['content']>('');
  const [release, setRelease] = useState<Post['release']>(false);

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
    const deleteConfirm = confirm('削除します');

    if (!deleteConfirm) {
      return undefined;
    }

    // TODO: API に削除指示を投げる
    alert(`${id}を削除しました`);
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
