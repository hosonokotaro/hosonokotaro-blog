import { useEffect, useState } from 'react';

import { db, TPost } from '../adapter';

const useGetAllPosts = (): TPost[] | undefined => {
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

  return posts;
};

export default useGetAllPosts;
