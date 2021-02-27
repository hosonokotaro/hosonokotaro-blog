import { useState } from 'react';

// TODO: POST する Adapter を作成する
// import { collectionPosts, Timestamp } from '../adapter/';

export interface Props {
  title: string;
  handleSubmit: () => void;
  onTitleChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  canSaveNewPost: boolean;
}

const useCreatePost = (): Props => {
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

  const canSaveNewPost = Boolean(title);

  return {
    title,
    handleSubmit,
    onTitleChanged,
    canSaveNewPost,
  };
};

export default useCreatePost;
