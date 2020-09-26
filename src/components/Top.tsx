import React from 'react';

import { TPostTitle } from '../adapter';
import Spinner from '../components/Spinner';
import formatTimestampToDate from '../utility/formatTimestampToDate';
import useGetPosts from './hooks/useGetPosts';
import {
  StyledArticle,
  StyledDate,
  StyledLink,
  StyledPost,
} from './styled/styledTop';

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
