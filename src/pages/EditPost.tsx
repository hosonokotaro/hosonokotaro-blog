import React, { useState } from 'react';

import { db, TPost } from '../adapter';
import useGetPosts from '../hooks/useGetPosts';

const EditPost: React.FC = () => {
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

  // ShowPosts
  const posts = useGetPosts();

  const deletePost = (id: TPost['id']) => {
    db.collection('posts').doc(id).delete();
  };

  return (
    <>
      <article>
        <h2>記事の新規作成</h2>
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

      <article>
        <h2>記事一覧</h2>
        {posts.map((post) => (
          <section key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => deletePost(post.id)}>
              この記事を削除する
            </button>
          </section>
        ))}
      </article>
    </>
  );
};

export default EditPost;
