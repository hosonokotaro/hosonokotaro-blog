import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import ErrorMessage from '@/atoms/ErrorMessage';
import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import CodeBlock from '@/molecules/CodeBlock';
import type { Params } from '~/customHooks/useSinglePost';
import useSinglePost from '~/customHooks/useSinglePost';

import { StyledReactMarkdown, StyledTimestamp } from './styledIndex';

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: Params['id'] }>();
  const { postResponse, isLoading, isError } = useSinglePost({
    id,
    target: 'default',
  });

  const post = postResponse?.post;

  return (
    <Layout tag="section">
      {post && (
        <>
          <Helmet>
            <title>{post.title} | WEB DEVELOPER HOSONO KOTARO</title>
          </Helmet>
          <Title text={post.title} />
          <StyledTimestamp>{post.createDate}</StyledTimestamp>
          <StyledReactMarkdown
            source={post.content}
            renderers={{ code: CodeBlock }}
          />
        </>
      )}
      {isLoading && <Spinner />}
      {isError && <ErrorMessage />}
    </Layout>
  );
};

export default SinglePost;
