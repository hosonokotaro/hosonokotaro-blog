import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  collectionPosts,
  formatTimestampToDate,
  TPost,
  TPostTitle,
} from '../adapter';

const Top: React.FC = () => {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    const unsubscribe = collectionPosts
      .where('release', '==', true)
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

  const showPost = (post: TPostTitle) => {
    if (!post.release) {
      return false;
    }

    return (
      <StyledPost key={post.id}>
        <StyledLink to={post.id}>{post.title}</StyledLink>
        <StyledDate>{formatTimestampToDate(post.createDate)}</StyledDate>
      </StyledPost>
    );
  };

  return (
    <StyledArticle>
      <h2>記事一覧</h2>
      <div>{posts.map((post) => showPost(post))}</div>
    </StyledArticle>
  );
};

export default Top;

const StyledArticle = styled.article`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 40px 0 40px;
`;

const StyledPost = styled.div`
  margin-top: 20px;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
`;

const StyledDate = styled.div`
  margin-top: 10px;
  font-size: 1rem;
`;
