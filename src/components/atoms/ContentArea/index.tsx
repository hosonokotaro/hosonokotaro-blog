import React from 'react';

import { MarginTopSize, StyledContentArea } from './styledIndex';

export interface Props {
  tag?: 'div' | 'article' | 'section';
  marginTopSize?: MarginTopSize;
  children: React.ReactNode;
}

const ContentArea: React.VFC<Props> = ({
  tag = 'div',
  marginTopSize = '40px',
  children,
}) => {
  return (
    <StyledContentArea as={tag} marginTopSize={marginTopSize}>
      {children}
    </StyledContentArea>
  );
};

export default ContentArea;
