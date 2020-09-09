import React, { useState } from 'react';

import firebase, { db, TPost } from '../adapter';

const NewPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [release, setRelease] = useState(false);

  const handleSubmit = () => {
    db.collection('posts').add({
      title,
      content,
      release,
      createDate: firebase.firestore.Timestamp.now(),
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

  return (
    <>
      <h2>記事の新規作成</h2>
      <div>
        <form>
          <label htmlFor="postTitle">タイトル</label>
          <input
            type="text"
            id="postTitle"
            name="postTitle"
            value={title}
            onChange={onTitleChanged}
          />
          <label htmlFor="postContent">本文</label>
          <textarea
            id="postContent"
            name="postContent"
            value={content}
            onChange={onContentChanged}
          ></textarea>
          <label htmlFor="postRelease">公開フラグ</label>
          <input
            type="checkbox"
            name="postRelease"
            checked={release}
            onChange={onReleaseChanged}
          />
        </form>
        <button onClick={handleSubmit} disabled={!canSave}>
          Submit
        </button>
      </div>
    </>
  );
};

export default NewPost;
