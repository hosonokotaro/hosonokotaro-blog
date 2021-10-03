import React from 'react';

import { MarginTopSize, StyledContentBox, TextAlign } from './styledIndex';

interface Props {
  children: React.ReactNode;
  isBetween?: boolean;
  marginTopSize?: MarginTopSize;
  textAlign?: TextAlign;
}

const ContentBox: React.VFC<Props> = ({
  children,
  isBetween = false,
  marginTopSize = '0px',
  textAlign = 'left',
}) => {
  return (
    <StyledContentBox
      isBetween={isBetween}
      marginTopSize={marginTopSize}
      textAlign={textAlign}
    >
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;
