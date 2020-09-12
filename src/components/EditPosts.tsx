import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { collectionPosts, TPost } from '../adapter';
import EditPost from './EditPost';

const EditSinglePost: React.FC = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const unsubscribe = collectionPosts
      .orderBy('createDate', 'desc')
      .onSnapshot((snapshot) => {
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
    <StyledSection>
      <h2>投稿された記事一覧</h2>
      {posts.map((post) => (
        <EditPost post={post} key={post.id} />
      ))}
    </StyledSection>
  );
};

export default EditSinglePost;

const StyledSection = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
`;
