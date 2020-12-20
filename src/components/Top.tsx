import React from 'react';

import Spinner from '../components/Spinner';
import { StyledArticle, StyledDate, StyledLink, StyledPost } from './styledTop';
import useGetPosts from './useGetPosts';

const Top: React.FC = () => {
  const { status, posts } = useGetPosts();

  return (
    <StyledArticle>
      <h2>記事一覧</h2>
      {status === 'success' ? (
        <>
          {posts.map((post) => (
            <StyledPost key={post.id}>
              <StyledLink to={post.id}>{post.title}</StyledLink>
              <StyledDate>{post.createDate}</StyledDate>
            </StyledPost>
          ))}
        </>
      ) : (
        <Spinner />
      )}
    </StyledArticle>
  );
};

export default Top;
