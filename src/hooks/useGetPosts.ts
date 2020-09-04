import { useEffect, useState } from 'react';

import { db, TPost } from '../adapter';

const useGetPosts = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const unsub = db.collection('posts').onSnapshot((snapshot) => {
      const allPosts = snapshot.docs.map((doc) => ({
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        release: doc.data().release,
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
