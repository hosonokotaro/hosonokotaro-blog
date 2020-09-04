import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db, TPost } from '../adapter';

const SinglePost: React.FC = () => {
  const { pageId } = useParams();
  const [post, setPost] = useState<TPost>();

  useEffect(() => {
    const unsub = db
      .collection('posts')
      .doc(pageId)
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
  }, [pageId]);

  return (
    <section>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <div>debug: {post.id}</div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </section>
  );
};

export default SinglePost;
