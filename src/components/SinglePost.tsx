import React from 'react';
import { Helmet } from 'react-helmet';

import Spinner from '../components/Spinner';
import formatTimestampToDate from '../utility/formatTimestampToDate';
import CodeBlock from './CodeBlock';
import useGetPost from './hooks/useGetPost';
import {
  StyledReactMarkdown,
  StyledSection,
  StyledTimestamp,
} from './styled/styledSinglePost';

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
          <StyledTimestamp>
            {formatTimestampToDate(post.createDate)}
          </StyledTimestamp>
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
