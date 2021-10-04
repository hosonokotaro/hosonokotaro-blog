import React from 'react';

import { StyledFooter } from './styledIndex';

interface Props {
  year: string;
}

const Footer: React.FC<Props> = ({ year }) => {
  return <StyledFooter>© {year} HOSONOKOTARO Tech Blog</StyledFooter>;
};

export default Footer;
