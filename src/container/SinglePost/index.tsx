import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import ErrorMessage from '@/atoms/ErrorMessage';
import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import SubTitle from '@/atoms/Title';
import CodeBlock from '@/molecules/CodeBlock';
import useGetPost from '~/customHooks/useGetPost';
import type { Params } from '~/services/getPost';

import { StyledReactMarkdown, StyledTimestamp } from './styledIndex';

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: Params['id'] }>();
  const { status, post } = useGetPost({ id, target: 'default' });

  return (
    <Layout tag="section">
      {status === 'success' && (
        <>
          <Helmet>
            <title>{post.title} | WEB DEVELOPER HOSONO KOTARO</title>
          </Helmet>
          <SubTitle text={post.title} />
          <StyledTimestamp>{post.createDate}</StyledTimestamp>
          <StyledReactMarkdown
            source={post.content}
            renderers={{ code: CodeBlock }}
          />
        </>
      )}
      {!status && <Spinner />}
      {status === 'failure' && <ErrorMessage />}
    </Layout>
  );
};

export default SinglePost;
