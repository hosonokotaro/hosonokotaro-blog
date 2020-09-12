import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import syntaxStyle from 'react-syntax-highlighter/dist/cjs/styles/prism/tomorrow';
import styled from 'styled-components';

import { collectionPosts, formatTimestampToDate, TPost } from '../adapter';
import Spinner from '../components/Spinner';

const CodeBlock: React.FC<{ value: any; language: any }> = (props) => {
  return (
    <SyntaxHighlighter language={props.language} style={syntaxStyle}>
      {props.value}
    </SyntaxHighlighter>
  );
};

const SinglePost: React.FC = () => {
  const { id } = useParams<{ id: TPost['id'] }>();
  const [post, setPost] = useState<TPost | undefined>();

  useEffect(() => {
    const unsubscribe = collectionPosts
      .doc(id)
      .get({ source: 'cache' })
      .then((doc) => {
        if (!doc.exists || !doc.data()?.release) {
          return false;
        }

        const data = doc.data() as TPost;

        setPost({
          id: doc.id,
          title: data.title,
          content: data.content,
          release: data.release,
          createDate: data.createDate,
        });
      });

    return () => {
      unsubscribe;
    };
  }, [id]);

  return (
    <StyledSection>
      {post ? (
        <>
          <Helmet>
            <title>{post.title} | WEB DEVELOPER HOSONO KOTARO</title>
          </Helmet>
          <h2>{post.title}</h2>
          <StyledReactMarkdown
            source={post.content}
            renderers={{ code: CodeBlock }}
          />
          <StyledTimestamp>
            {formatTimestampToDate(post.createDate)}
          </StyledTimestamp>
        </>
      ) : (
        <Spinner />
      )}
    </StyledSection>
  );
};

const StyledSection = styled.section`
  max-width: 1000px;
  min-height: calc(100vh - 120px - 98px);
  margin: 0 auto;
  padding: 40px;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  padding-top: 40px;
`;

const StyledTimestamp = styled.div`
  padding-top: 20px;
`;

export default SinglePost;
