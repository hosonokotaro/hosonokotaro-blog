import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import CodeBlock from '@/CodeBlock';
import ErrorMessage from '@/ErrorMessage';
import Spinner from '@/Spinner';
import useGetPost from '~/customHooks/useGetPost';
import type { Props } from '~/services/getPost';

import {
  StyledReactMarkdown,
  StyledSection,
  StyledTimestamp,
} from './styledIndex';

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: Props['id'] }>();
  const { status, post } = useGetPost({ id, target: 'default' });

  return (
    <StyledSection>
      {status === 'success' && (
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
      )}
      {!status && <Spinner />}
      {status === 'failure' && <ErrorMessage />}
    </StyledSection>
  );
};

export default SinglePost;
