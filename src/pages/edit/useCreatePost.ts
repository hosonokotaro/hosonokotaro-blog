import { useState } from 'react';

import { Props } from '@/CreatePost';

// TODO: POST する Adapter を作成する
// import { collectionPosts, Timestamp } from '~/adapter/';

const useCreatePost = (): Props => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [release, setRelease] = useState(false);

  // TODO: Submit の時に、APIに投げる処理を実装する
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
