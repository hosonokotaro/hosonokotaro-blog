import React from 'react';

import ErrorMessage from '@/atoms/ErrorMessage';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import useTop from '~/customHooks/useTop';

import { StyledDate, StyledLink, StyledPost } from './styledIndex';

const Top: React.FC = () => {
  const { postListResponse, isLoading, isError } = useTop({
    target: 'default',
  });

  const titleDateList = postListResponse?.titleDateList;

  return (
    <>
      <Title text="記事一覧" />
      {titleDateList && (
        <>
          {titleDateList.map((item) => (
            <StyledPost key={item.id}>
              <StyledLink to={item.id}>{item.title}</StyledLink>
              <StyledDate>{item.createDate}</StyledDate>
            </StyledPost>
          ))}
        </>
      )}
      {isLoading && <Spinner />}
      {isError && <ErrorMessage />}
    </>
  );
};

export default Top;
