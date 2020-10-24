import { useEffect, useState } from 'react';

import { collectionPosts, TPost } from '../../adapter';

const useGetPosts = (): TPost[] => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const unsubscribe = collectionPosts
      .where('release', '==', true)
      .orderBy('createDate', 'desc')
      .get()
      .then((postsSnapshot) => {
        const allPosts = postsSnapshot.docs.map<TPost>((doc) => ({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          release: doc.data().release,
          createDate: doc.data().createDate,
        }));

        setPosts(allPosts);
      });

    return () => {
      unsubscribe;
    };
  }, []);

  return posts;
};

export default useGetPosts;
