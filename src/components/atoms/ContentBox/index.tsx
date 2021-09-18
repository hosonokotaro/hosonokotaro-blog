import React from 'react';

import { MarginTopSize, StyledContentBox, TextAlign } from './styledIndex';

interface Props {
  children: React.ReactNode;
  isBetween?: boolean;
  isHalf?: boolean;
  marginTopSize?: MarginTopSize;
  textAlign?: TextAlign;
}

const ContentBox: React.VFC<Props> = ({
  children,
  isBetween = false,
  isHalf = false,
  marginTopSize = '20px',
  textAlign = 'left',
}) => {
  return (
    <StyledContentBox
      isBetween={isBetween}
      isHalf={isHalf}
      marginTopSize={marginTopSize}
      textAlign={textAlign}
    >
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;
