import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  const getYear = () => {
    return dayjs(new Date()).format('YYYY');
  };

  return <StyledFooter>©{getYear()} HOSONOKOTARO Tech Blog</StyledFooter>;
};

export default Footer;

const StyledFooter = styled.div`
  padding: 40px;
  text-align: center;
  border-top: 2px solid #333;
`;
