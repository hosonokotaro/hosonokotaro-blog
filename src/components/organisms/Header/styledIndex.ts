import { styled } from '@linaria/react';
import { Link } from 'react-router-dom';

export const StyledHeaderWrapper = styled.header`
  border-bottom: 2px solid #333;
`;

export const StyledHeader = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
`;

export const StyleLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: unset;
`;
