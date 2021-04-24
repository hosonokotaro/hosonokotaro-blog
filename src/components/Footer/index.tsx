import React from 'react';

import { StyledFooter } from './styledIndex';

const Footer: React.FC<{ year: string }> = ({ year }) => {
  return <StyledFooter>© {year} HOSONOKOTARO Tech Blog</StyledFooter>;
};

export default Footer;
