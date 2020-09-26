import dayjs from 'dayjs';
import React from 'react';

import { StyledFooter } from './styled/StyledFooter';

const Footer: React.FC = () => {
  const getYear = () => {
    return dayjs(new Date()).format('YYYY');
  };

  return <StyledFooter>© {getYear()} HOSONOKOTARO Tech Blog</StyledFooter>;
};

export default Footer;
