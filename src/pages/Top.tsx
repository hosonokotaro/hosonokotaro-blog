import React, { useState, useEffect } from 'react';

import { db } from '../adapter';

const Top: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const unsub = db.collection('posts').onSnapshot((snapshot) => {
      const allPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPosts(allPosts);
    });

    return () => {
      unsub();
    };
  }, []);

  const deletePost = (id: string) => {
    db.collection('posts').doc(id).delete();
  };

  return (
    <article>
      <h2>Top</h2>
      {posts.map(post => (
        <section key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => deletePost(post.id)}>delete post</button>
        </section>
      ))}
    </article>
  );
};

export default Top;
