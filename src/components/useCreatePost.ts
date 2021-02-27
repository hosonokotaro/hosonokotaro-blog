import { useState } from 'react';

// TODO: POST する Adapter を作成する
// import { collectionPosts, Timestamp } from '../adapter/';

const useCreatePost = (): {
  title: string;
  content: string;
  release: boolean;
  handleSubmit: () => void;
  onTitleChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onReleaseChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  canSaveNewPost: boolean;
} => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [release, setRelease] = useState(false);

  const handleSubmit = () => {
    // collectionPosts.add({
    //   id: collectionPosts.doc().id,
    //   title,
    //   content,
    //   release,
    //   createDate: Timestamp.now(),
    // });

    console.log(title, content, release);

    setTitle('');
    setContent('');
    setRelease(false);
  };

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onReleaseChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelease(e.target.checked);
  };

  const canSaveNewPost = Boolean(title);

  return {
    title,
    content,
    release,
    handleSubmit,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    canSaveNewPost,
  };
};

export default useCreatePost;
