import React from 'react';

import Spinner from '@/Spinner';

import { StyledArticle, StyledDate, StyledLink, StyledPost } from './styledTop';
import useGetPostList from './useGetPostList';

const Top: React.FC = () => {
  const { status, titleDateList } = useGetPostList('publicOnly');

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
