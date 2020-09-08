import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { db, TPost, TPostTitle } from '../adapter';

const Top: React.FC = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const unsubscribe = db
      .collection('posts')
      .where('release', '==', true)
      .onSnapshot((snapshot) => {
        const allPosts = snapshot.docs.map<TPost>((doc) => ({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          release: doc.data().release,
        }));

        setPosts(allPosts);
      });

    return () => {
      unsubscribe();
    };
  }, []);

  const showPost = (post: TPostTitle) => {
    if (!post.release) {
      return false;
    }

    return (
      <div key={post.id}>
        <Link to={post.id}>{post.title}</Link>
      </div>
    );
  };

  return (
    <article>
      <h2>記事一覧</h2>
      {posts.map((post) => showPost(post))}
    </article>
  );
};

export default Top;
