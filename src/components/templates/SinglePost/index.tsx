import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import ErrorMessage from '@/atoms/ErrorMessage';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import Markdown from '@/organisms/Markdown';
import type { Params } from '~/customHooks/useSinglePost';
import useSinglePost from '~/customHooks/useSinglePost';

import { MarkdownWrapper, Timestamp } from './styledIndex';

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: Params['id'] }>();
  const { postResponse, isLoading, isError } = useSinglePost({
    id,
    target: 'default',
  });

  const post = postResponse?.post;

  return (
    <>
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
      {isLoading && <Spinner />}
      {isError && <ErrorMessage />}
    </>
  );
};

export default SinglePost;
