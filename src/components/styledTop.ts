import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledArticle = styled.article`
  max-width: 1000px;
  min-height: calc(100vh - 120px - 98px);
  margin: 0 auto;
  padding: 80px 40px 240px 40px;
`;

export const StyledPost = styled.div`
  margin-top: 40px;
`;

export const StyledLink = styled(Link)`
  font-size: 1.2rem;
`;

export const StyledDate = styled.div`
  margin-top: 12px;
  font-size: 1rem;
`;
