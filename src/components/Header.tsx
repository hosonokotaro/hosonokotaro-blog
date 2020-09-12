import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyleLink to="/">
          <h1>
            <InlineBlock>HOSONO</InlineBlock>
            <InlineBlock>KOTARO</InlineBlock> Tech Blog
          </h1>
        </StyleLink>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;

const StyledHeaderWrapper = styled.div`
  border-bottom: 2px solid #333;
`;

const StyledHeader = styled.header`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
`;

const StyleLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: unset;
`;

const InlineBlock = styled.span`
  display: inline-block;
`;
