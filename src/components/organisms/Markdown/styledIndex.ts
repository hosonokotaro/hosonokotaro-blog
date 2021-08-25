import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

export const StyledMarkdown = styled(ReactMarkdown)`
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

  & > p img {
    max-width: 100%;
  }
`;
