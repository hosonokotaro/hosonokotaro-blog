import React from 'react';

import { StyledContentBox } from './styledIndex';

interface Props {
  children: React.ReactNode;
  isBetween?: boolean;
  isHalf?: boolean;
}

const ContentBox: React.VFC<Props> = ({
  children,
  isBetween = false,
  isHalf = false,
}) => {
  return (
    <StyledContentBox isBetween={isBetween} isHalf={isHalf}>
      {children}
    </StyledContentBox>
  );
};

export default ContentBox;
