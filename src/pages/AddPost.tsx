import React, { useState } from 'react';
import { db } from '../adapter';

const AddPost: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    db.collection('posts').add({
      title,
      content,
    });

    setTitle('');
    setContent('');
  };

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const canSave = Boolean(title) && Boolean(content);

  return (
    <article>
      <h2>AddPost</h2>
      <form>
        <label htmlFor="postTitle">Post Title</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Post Content</label>
        <textarea
          name="postContent"
          id="postContent"
          value={content}
          onChange={onContentChanged}
        ></textarea>
      </form>
      <button onClick={handleSubmit} disabled={!canSave}>
        Submit
      </button>
    </article>
  );
};

export default AddPost;
