import React, { useEffect, useState } from 'react';

import { db, TPost } from '../adapter';
import EditPost from './EditPost';

const EditSinglePost: React.FC = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const unsubscribe = db.collection('posts').onSnapshot((snapshot) => {
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

  return (
    <>
      <h2>記事一覧と更新</h2>
      {posts.map((post) => (
        <EditPost post={post} key={post.id} />
      ))}
    </>
  );
};

export default EditSinglePost;
