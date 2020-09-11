import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { collectionPosts, formatTimestampToDate, TPost } from '../adapter';

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: TPost['id'] }>();
  const [post, setPost] = useState<TPost | undefined>();

  useEffect(() => {
    const unsubscribe = collectionPosts
      .doc(id)
      .get({ source: 'cache' })
      .then((doc) => {
        if (!doc.exists || !doc.data()?.release) {
          return false;
        }

        const data = doc.data() as TPost;

        setPost({
          id: doc.id,
          title: data.title,
          content: data.content,
          release: data.release,
          createDate: data.createDate,
        });
      });

    return () => {
      unsubscribe;
    };
  }, [id]);

  return (
    <section>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div>{formatTimestampToDate(post.createDate)}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default SinglePost;
