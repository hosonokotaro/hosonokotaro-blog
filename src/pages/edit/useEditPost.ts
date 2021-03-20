import { useState } from 'react';

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
  updatePost: (id: string) => void;
  deletePost: (id: string) => undefined;
}

const useEditPost = (): Props => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [release, setRelease] = useState<boolean>(false);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onReleaseChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelease(e.target.checked);
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
