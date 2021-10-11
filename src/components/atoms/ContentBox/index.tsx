import React from 'react';

import { MarginTopSize, StyledContentBox, TextAlign } from './styledIndex';

interface Props {
  children: React.ReactNode;
  isBetween?: boolean;
  marginTopSize?: MarginTopSize;
  textAlign?: TextAlign;
  isBoxCenter?: boolean;
  isCard?: boolean;
}

const ContentBox: React.VFC<Props> = ({
  children,
  isBetween = false,
  marginTopSize = '0px',
  textAlign = 'left',
  isBoxCenter = false,
  isCard = false,
}) => {
  return (
    <StyledContentBox
      isBetween={isBetween}
      marginTopSize={marginTopSize}
      textAlign={textAlign}
      isBoxCenter={isBoxCenter}
      isCard={isCard}
    >
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;
