import React from 'react';

import getYear from '../utility/getYear';
import { StyledFooter } from './styledFooter';

const Footer: React.FC = () => {
  return <StyledFooter>© {getYear()} HOSONOKOTARO Tech Blog</StyledFooter>;
};

export default Footer;
