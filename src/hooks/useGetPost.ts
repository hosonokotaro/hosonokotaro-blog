import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db, TPost } from '../adapter';

const useGetPost = () => {
  const { id } = useParams<{ id: TPost['id'] }>();
  const [post, setPost] = useState<TPost>();

  useEffect(() => {
    const unsub = db
      .collection('posts')
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists) {
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
      unsub;
    };
  }, [id]);

  return post;
};

export default useGetPost;
