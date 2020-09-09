import React, { useState } from 'react';

import { db, formatTimestampToDate, TPost } from '../adapter';

const EditSinglePost: React.FC<{ post: TPost }> = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const [release, setRelease] = useState(post.release);

  const onTitleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const onReleaseChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRelease(e.target.checked);
  };

  const updatePost = (id: TPost['id']) => {
    db.collection('posts')
      .doc(id)
      .update({
        title,
        content,
        release,
      })
      .then(() => {
        alert(`${id}を更新しました`);
      });

    setTitle('');
    setContent('');
    setRelease(false);
  };

  const deletePost = (id: TPost['id']) => {
    const deleteConfirm = confirm('削除します');

    if (!deleteConfirm) {
      return false;
    }

    db.collection('posts').doc(id).delete();
  };

  return (
    <>
      <div>
        <label htmlFor={`editPostTitle-${post.id}`}>タイトル</label>
        <input
          type="text"
          id={`editPostTitle-${post.id}`}
          name={`editPostTitle-${post.id}`}
          defaultValue={post.title}
          onChange={onTitleChanged}
        />
      </div>
      <div>
        <label htmlFor={`editPostContent-${post.id}`}>本文</label>
        <textarea
          id={`editPostContent-${post.id}`}
          name={`editPostContent-${post.id}`}
          defaultValue={post.content}
          onChange={onContentChanged}
        ></textarea>
      </div>
      <div>
        <label htmlFor={`editPostRelease-${post.id}`}>公開フラグ</label>
        <input
          type="checkbox"
          id={`editPostRelease-${post.id}`}
          name={`editPostRelease-${post.id}`}
          defaultChecked={post.release}
          onChange={onReleaseChanged}
        />
      </div>
      <div>
        <button onClick={() => updatePost(post.id)}>この記事を更新する</button>
        <button onClick={() => deletePost(post.id)}>この記事を削除する</button>
      </div>
      <div>作成日時: {formatTimestampToDate(post.createDate)}</div>
      <div>id: {post.id}</div>
    </>
  );
};

export default EditSinglePost;
