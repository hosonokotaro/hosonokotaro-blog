import { useState } from 'react';

import { collectionPosts, Timestamp } from '../../adapter';

const useNewPost = (): {
  title: string;
  content: string;
  release: boolean;
  handleSubmit: () => void;
  onTitleChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContentChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onReleaseChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  canSave: boolean;
} => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [release, setRelease] = useState(false);

  const handleSubmit = () => {
    collectionPosts.add({
      id: collectionPosts.doc().id,
      title,
      content,
      release,
      createDate: Timestamp.now(),
    });

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

  const canSave = Boolean(title) && Boolean(content);

  return {
    title,
    content,
    release,
    handleSubmit,
    onTitleChanged,
    onContentChanged,
    onReleaseChanged,
    canSave,
  };
};

export default useNewPost;
