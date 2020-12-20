import React from 'react';
import { Helmet } from 'react-helmet';

import Spinner from '../components/Spinner';
import { Post } from '../postsSlice';
import CodeBlock from './CodeBlock';
import {
  StyledReactMarkdown,
  StyledSection,
  StyledTimestamp,
} from './styledSinglePost';
import useGetPost from './useGetPost';

const SinglePost: React.FC = () => {
  const post = useGetPost();

  return (
    <StyledSection>
      {post ? (
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
