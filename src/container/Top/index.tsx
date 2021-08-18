import React from 'react';

import ErrorMessage from '@/atoms/ErrorMessage';
import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import useGetPostList from '~/customHooks/useGetPostList';

import { StyledDate, StyledLink, StyledPost } from './styledIndex';

const Top: React.FC = () => {
  const postListWithStatus = useGetPostList({ target: 'default' });

  return (
    <Layout tag="article">
      <Title text="記事一覧" />
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
    </Layout>
  );
};

export default Top;
