import React from 'react';

import { MarginTopSize, StyledContentBox } from './styledIndex';

interface Props {
  children: React.ReactNode;
  isBetween?: boolean;
  isHalf?: boolean;
  marginTopSize?: MarginTopSize;
}

const ContentBox: React.VFC<Props> = ({
  children,
  isBetween = false,
  isHalf = false,
  marginTopSize = '20px',
}) => {
  return (
    <StyledContentBox
      isBetween={isBetween}
      isHalf={isHalf}
      marginTopSize={marginTopSize}
    >
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;
