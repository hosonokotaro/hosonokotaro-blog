import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import ErrorMessage from '@/atoms/ErrorMessage';
import InlineCode from '@/atoms/InlineCode';
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
            components={{
              code({ inline, className, children }) {
                const match = /language-(\w+)/.exec(className || '');

                if (!inline && match) {
                  return (
                    <CodeBlock
                      value={String(children).replace(/\n$/, '')}
                      language={match[1]}
                    />
                  );
                }

                if (inline) {
                  return (
                    <InlineCode text={String(children).replace(/\n$/, '')} />
                  );
                }

                // HACK: どの条件にも一致しない時に null を返さないとエラーを起こす
                return null;
              },
            }}
          >
            {post.content}
          </StyledReactMarkdown>
        </>
      )}
      {isLoading && <Spinner />}
      {isError && <ErrorMessage />}
    </Layout>
  );
};

export default SinglePost;
