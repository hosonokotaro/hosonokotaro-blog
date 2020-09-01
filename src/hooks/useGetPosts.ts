import { useState, useEffect } from 'react';
import { db, TPost } from '../adapter';

const useGetPosts = (): TPost[] => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const unsub = db.collection('posts').onSnapshot((snapshot) => {
      const allPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
      }));

      setPosts(allPosts);
    });

    return () => {
      unsub();
    };
  }, []);

  return posts;
};

export default useGetPosts;
