import React, { useState } from 'react';

import { db, TPost } from '../adapter';
import useGetPosts from '../hooks/useGetPosts';

const EditPost: React.FC = () => {
  // EditPosts
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [release, setRelease] = useState(false);

  const handleSubmit = () => {
    db.collection('posts').add({
      title,
      content,
      release,
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

  // ShowPosts
  const posts = useGetPosts();

  const deletePost = (id: TPost['id']) => {
    db.collection('posts').doc(id).delete();
  };

  return (
    <article>
      <h2>記事の新規作成</h2>
      <section>
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
      </section>

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
  );
};

export default EditPost;
