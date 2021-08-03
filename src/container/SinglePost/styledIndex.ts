import { styled } from '@linaria/react';
import ReactMarkdown from 'react-markdown';

export const StyledSection = styled.section`
  max-width: 1000px;
  min-height: calc(100vh - 120px - 98px);
  margin: 0 auto;
  padding: 80px 40px 240px 40px;
`;

export const StyledTimestamp = styled.div`
  padding-top: 20px;
`;

export const StyledReactMarkdown = styled(ReactMarkdown)`
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
    border-radius: 3px;
    background: #e8e8e8;
  }

  & > p img {
    max-width: 100%;
  }
`;
