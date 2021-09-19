import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import SiteTitle from '@/atoms/SiteTitle';

// FIXME: Organisms から Style を削除したい
import { StyledHeader, StyledHeaderWrapper, StyleLink } from './styledIndex';

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
          <SiteTitle />
        </StyleLink>
      </StyledHeader>
    </StyledHeaderWrapper>
  );
};

export default Header;
