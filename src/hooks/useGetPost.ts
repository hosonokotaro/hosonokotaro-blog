import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db, TPost } from '../adapter';

const useGetPost = (): TPost | undefined => {
  const { id } = useParams<{ id: TPost['id'] }>();
  const [post, setPost] = useState<TPost | undefined>();

  useEffect(() => {
    const unsubscribe = db
      .collection('posts')
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists || !doc.data()?.release) {
          return false;
        }

        setPost({
          id: doc.id,
          title: doc.data()?.title,
          content: doc.data()?.content,
          release: doc.data()?.release,
        });
      });

    return () => {
      unsubscribe;
    };
  }, [id]);

  return post;
};

export default useGetPost;
