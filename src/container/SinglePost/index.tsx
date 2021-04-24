import React from 'react';
import { Helmet } from 'react-helmet';

import CodeBlock from '@/CodeBlock';
import Spinner from '@/Spinner';
import useGetPost from '~/customHooks/useGetPost';

import {
  StyledReactMarkdown,
  StyledSection,
  StyledTimestamp,
} from './styledIndex';

const SinglePost: React.FC = () => {
  const { status, post } = useGetPost();

  return (
    <StyledSection>
      {status === 'success' ? (
        <>
          <Helmet>
            <title>{post.title} | WEB DEVELOPER HOSONO KOTARO</title>
          </Helmet>
          <h2>{post.title}</h2>
          <StyledTimestamp>{post.createDate}</StyledTimestamp>
          <StyledReactMarkdown
            source={post.content}
            renderers={{ code: CodeBlock }}
          />
        </>
      ) : (
        <Spinner />
      )}
    </StyledSection>
  );
};

export default SinglePost;
