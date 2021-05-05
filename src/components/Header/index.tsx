import React from 'react';

import {
  StyledHeader,
  StyledHeaderWrapper,
  StyledInlineBlock,
  StyleLink,
} from './styledIndex';

interface Props {
  linkPath?: string;
}

const Header: React.FC<Props> = ({ linkPath = '/' }) => {
  return (
    <StyledHeaderWrapper>
      <StyledHeader>
        <StyleLink to={linkPath}>
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
