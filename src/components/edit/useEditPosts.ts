import { useEffect, useState } from 'react';

import { CollectionPost, collectionPosts } from '../../adapter';

const useEditPosts = (): CollectionPost[] => {
  const [posts, setPosts] = useState<CollectionPost[]>([]);

  useEffect(() => {
    const unsubscribe = collectionPosts
      .orderBy('createDate', 'desc')
      .onSnapshot((snapshot) => {
        const allPosts = snapshot.docs.map<CollectionPost>((doc) => ({
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

export default useEditPosts;
