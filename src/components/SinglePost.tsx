import React from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import styled from 'styled-components';

import Spinner from '../components/Spinner';
import formatTimestampToDate from '../utility/formatTimestampToDate';
import useGetPost from './hooks/useGetPost';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const CodeBlock: React.FC<{ value: string; language: string }> = (props) => {
  return (
    <SyntaxHighlighter language={props.language} style={syntaxStyle}>
      {props.value}
    </SyntaxHighlighter>
  );
};

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

const StyledSection = styled.section`
  max-width: 1000px;
  min-height: calc(100vh - 120px - 98px);
  margin: 0 auto;
  padding: 80px 40px 240px 40px;
`;

const StyledTimestamp = styled.div`
  padding-top: 20px;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  padding-top: 80px;
  overflow-wrap: normal;

  & > h2:not(:first-child),
  & > h3:not(:first-child),
  & > h4:not(:first-child) {
    margin-top: 40px;
  }

  & > p:not(:first-child),
  & > ul:not(:first-child) {
    margin-top: 20px;
  }

  & > ul li:before {
    content: '・';
  }

  & > p code {
    margin: 0 2px;
    padding: 0 4px;
    border: 1px solid #999;
    border-radius: 3px;
    background: #f9f9f9;
  }
`;
