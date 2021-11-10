import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledAnchor = styled.a`
  color: #f33;

  &:after {
    font-size: 0.8rem;
    content: '（外部サイト）';
  }
`;

export const StyledLink = styled(Link)`
  color: #f33;
`;
