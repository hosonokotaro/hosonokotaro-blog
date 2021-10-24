import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import ContentBox from '@/atoms/ContentBox';
import ErrorMessage from '@/atoms/ErrorMessage';
import Layout from '@/atoms/Layout';
import Spinner from '@/atoms/Spinner';
import Title from '@/atoms/Title';
import Markdown from '@/organisms/Markdown';
import useSinglePost from '~/customHooks/useSinglePost';

type Id = Parameters<typeof useSinglePost>[0];

const SinglePost: React.VFC = () => {
  const { id } = useParams<{ id: Id }>();

  const {
    singlePostResponse,
    isLoading: isSinglePostLoading,
    isError: isSinglePostError,
  } = useSinglePost(id, 'default');

  const post = singlePostResponse && singlePostResponse.post;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://techblog.hosonokotaro.jp/${post && post.id}`,
    },
    headline: `${post && post.title}`,
    image: {
      '@type': 'ImageObject',
      url: 'https://techblog.hosonokotaro.jp/static/media/og.png',
    },
    author: {
      '@type': 'Person',
      name: 'Hosono Kotaro',
      url: 'https://hosonokotaro.jp/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'HOSONOKOTARO Tech Blog',
      logo: {
        '@type': 'ImageObject',
        url: '',
      },
    },
    datePublished: `${post && post.createDate}`,
  };

  return (
    <Layout tagName="section">
      {post && (
        <>
          <Helmet>
            <title>{post.title} | WEB DEVELOPER HOSONO KOTARO</title>
            <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
          </Helmet>
          <Title text={post.title} />
          <ContentBox marginTopSize="20px">{post.createDate}</ContentBox>
          <ContentBox marginTopSize="80px">
            <Markdown content={post.content} />
          </ContentBox>
          <ContentBox marginTopSize="80px">
            <Link to="/">記事一覧へ</Link>
          </ContentBox>
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
