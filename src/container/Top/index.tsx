import React from 'react';

import ErrorMessage from '@/atoms/ErrorMessage';
import Spinner from '@/atoms/Spinner';
import SubTitle from '@/atoms/Title';
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
      <SubTitle text="記事一覧" />
      {postListWithStatus && postListWithStatus.status === 'success' && (
        <>
          {postListWithStatus.titleDateList.map((item) => (
            <StyledPost key={item.id}>
              <StyledLink to={item.id}>{item.title}</StyledLink>
              <StyledDate>{item.createDate}</StyledDate>
            </StyledPost>
          ))}
        </>
      )}
      {!postListWithStatus && <Spinner />}
      {postListWithStatus && postListWithStatus.status === 'failure' && (
        <ErrorMessage />
      )}
    </StyledArticle>
  );
};

export default Top;
