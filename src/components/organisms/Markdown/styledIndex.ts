import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

export const StyledMarkdown = styled(ReactMarkdown)`
  overflow-wrap: normal;

  & > h2:not(:first-child),
  & > h3:not(:first-child),
  & > h4:not(:first-child) {
    margin-top: 40px;
  }

  & > ul:not(:first-child) {
    margin-top: 20px;
  }

  & > ul li:before {
    content: '・';
  }
`;
