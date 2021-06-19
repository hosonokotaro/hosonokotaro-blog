import React from 'react';

import ErrorMessage from '@/ErrorMessage';
import Spinner from '@/Spinner';
import useGetPostList from '~/customHooks/useGetPostList';

import {
  StyledArticle,
  StyledDate,
  StyledLink,
  StyledPost,
} from './styledIndex';

const Top: React.FC = () => {
  const postListWithStatus = useGetPostList({ target: 'default' });

  return (
    <StyledArticle>
      <h2>記事一覧</h2>
      {postListWithStatus && postListWithStatus.status === 'success' ? (
        <>
          {postListWithStatus.titleDateList.map((item) => (
            <StyledPost key={item.id}>
              <StyledLink to={item.id}>{item.title}</StyledLink>
              <StyledDate>{item.createDate}</StyledDate>
            </StyledPost>
          ))}
        </>
      ) : (
        <Spinner />
      )}
      {postListWithStatus && postListWithStatus.status === 'failure' && (
        <ErrorMessage />
      )}
    </StyledArticle>
  );
};

export default Top;
