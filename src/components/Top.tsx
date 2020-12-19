import React from 'react';

import Spinner from '../components/Spinner';
import formatTimestampToDate from '../utility/formatTimestampToDate';
import { StyledArticle, StyledDate, StyledLink, StyledPost } from './styledTop';
import useGetPosts from './useGetPosts';

const Top: React.FC = () => {
  const { loaded, posts } = useGetPosts();

  return (
    <StyledArticle>
      <h2>記事一覧</h2>
      {loaded ? (
        <>
          {posts.map((post) => (
            <StyledPost key={post.id}>
              <StyledLink to={post.id}>{post.title}</StyledLink>
              <StyledDate>{formatTimestampToDate(post.createDate)}</StyledDate>
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
