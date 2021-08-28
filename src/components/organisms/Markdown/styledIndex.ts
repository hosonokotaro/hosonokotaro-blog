import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

export const StyledMarkdown = styled(ReactMarkdown)`
  overflow-wrap: normal;

  & > ul:not(:first-child) {
    margin-top: 20px;
  }

  & > ul li:before {
    content: '・';
  }
`;
