import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
