import React from 'react';

import Spinner from '../components/Spinner';
import { StyledArticle, StyledDate, StyledLink, StyledPost } from './styledTop';
import useGetPosts from './useGetPosts';

const Top: React.FC = () => {
  const { status, titleDateList } = useGetPosts();

  return (
    <StyledArticle>
      <h2>記事一覧</h2>
      {status === 'success' ? (
        <>
          {titleDateList.map((item) => (
            <StyledPost key={item.id}>
              <StyledLink to={item.id}>{item.title}</StyledLink>
              <StyledDate>{item.createDate}</StyledDate>
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
