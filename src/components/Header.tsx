import React from 'react';

import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledInlineBlock,
  StyleLink,
} from './styledHeader';

const Header: React.FC = () => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyleLink to="/">
          <h1>
            <StyledInlineBlock>HOSONO</StyledInlineBlock>
            <StyledInlineBlock>KOTARO</StyledInlineBlock> Tech Blog
          </h1>
        </StyleLink>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
