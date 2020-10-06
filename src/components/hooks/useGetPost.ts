import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { collectionPosts, Timestamp, TPost } from '../../adapter';

const useGetPost = (): TPost | undefined => {
  const { id } = useParams<{ id: TPost['id'] }>();
  const [post, setPost] = useState<TPost>();

  useEffect(() => {
    const unsubscribe = collectionPosts
      .doc(id)
      .get()
      .then((doc) => {
        if (!doc.exists || !doc.data()?.release) {
          location.href = '/';
          return false;
        }

        const data = doc.data();

        setPost({
          id: doc.id,
          title: data?.title ? data.title : '',
          content: data?.content ? data.content : '',
          release: data?.release ? data.release : false,
          createDate: data?.createDate ? data.createDate : Timestamp.now(),
        });
      });

    return () => {
      unsubscribe;
    };
  }, [id]);

  return post;
};

export default useGetPost;
