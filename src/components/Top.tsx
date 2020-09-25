import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { TPostTitle } from '../adapter';
import Spinner from '../components/Spinner';
import formatTimestampToDate from '../utility/formatTimestampToDate';
import useGetPosts from './hooks/useGetPosts';

const Top: React.FC = () => {
  const posts = useGetPosts();

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
      {posts.length ? <>{posts.map((post) => showPost(post))}</> : <Spinner />}
    </StyledArticle>
  );
};

export default Top;

const StyledArticle = styled.article`
  max-width: 1000px;
  min-height: calc(100vh - 120px - 98px);
  margin: 0 auto;
  padding: 80px 40px 240px 40px;
`;

const StyledPost = styled.div`
  margin-top: 40px;
`;

const StyledLink = styled(Link)`
  font-size: 1.2rem;
`;

const StyledDate = styled.div`
  margin-top: 12px;
  font-size: 1rem;
`;
