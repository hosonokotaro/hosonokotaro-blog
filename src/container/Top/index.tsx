import React from 'react';

import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import useGetPostList from '~/customHooks/useGetPostList';

import { StyledDate, StyledLink, StyledPost } from './styledIndex';

const Top: React.FC = () => {
  const postListResponse = useGetPostList({ target: 'default' });

  return (
    <Layout tag="article">
      <Title text="記事一覧" />
      {postListResponse && postListResponse.status === 'success' && (
        <>
          {postListResponse.titleDateList.map((item) => (
            <StyledPost key={item.id}>
              <StyledLink to={item.id}>{item.title}</StyledLink>
              <StyledDate>{item.createDate}</StyledDate>
            </StyledPost>
          ))}
        </>
      )}
      {!postListResponse && <Spinner />}
    </Layout>
  );
};

export default Top;
