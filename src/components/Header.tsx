import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyleLinkCancel to="/">
        <h1>
          <InlineBlock>HOSONO</InlineBlock>
          <InlineBlock>KOTARO</InlineBlock> Blog
        </h1>
      </StyleLinkCancel>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  text-align: center;
  background: #eee;
`;

const StyleLinkCancel = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: unset;
`;

const InlineBlock = styled.span`
  display: inline-block;
`;
