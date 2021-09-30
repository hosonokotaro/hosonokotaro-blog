import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import ContentBox from '@/atoms/ContentBox';
import ErrorMessage from '@/atoms/ErrorMessage';
import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import Markdown from '@/organisms/Markdown';
import type { Params } from '~/customHooks/useSinglePost';
import useSinglePost from '~/customHooks/useSinglePost';

import { MarkdownWrapper, Timestamp } from './styledSinglePost';

const SinglePost: React.VFC = () => {
  const { id } = useParams<{ id: Params['id'] }>();

  const {
    singlePostResponse,
    isLoading: isSinglePostLoading,
    isError: isSinglePostError,
  } = useSinglePost({
    id,
    target: 'default',
  });

  const post = singlePostResponse?.post;

  return (
    <Layout tagName="section">
      {post && (
        <>
          <Helmet>
            <title>{post.title} | WEB DEVELOPER HOSONO KOTARO</title>
          </Helmet>
          <Title text={post.title} />
          <Timestamp>{post.createDate}</Timestamp>
          <MarkdownWrapper>
            <Markdown content={post.content} />
          </MarkdownWrapper>
        </>
      )}
      {isSinglePostLoading && <Spinner />}
      {isSinglePostError && (
        <ContentBox marginTopSize="40px" textAlign="center">
          <ErrorMessage />
        </ContentBox>
      )}
    </Layout>
  );
};

export default SinglePost;
