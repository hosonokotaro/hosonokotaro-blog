import React, { useEffect, useState } from 'react';

import { collectionPosts, TPost } from '../adapter';
import EditPost from './EditPost';

const EditSinglePost: React.FC = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const unsubscribe = collectionPosts.onSnapshot((snapshot) => {
      const allPosts = snapshot.docs.map<TPost>((doc) => ({
        id: doc.id,
        title: doc.data().title,
        content: doc.data().content,
        release: doc.data().release,
        createDate: doc.data().createDate,
      }));

      setPosts(allPosts);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <h2>投稿された記事一覧</h2>
      {posts.map((post) => (
        <EditPost post={post} key={post.id} />
      ))}
    </>
  );
};

export default EditSinglePost;
