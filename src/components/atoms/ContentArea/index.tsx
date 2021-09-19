import React from 'react';

import { MarginTopSize, StyledContentArea } from './styledIndex';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  tag?: 'div' | 'article' | 'section';
  marginTopSize?: MarginTopSize;
  children: React.ReactNode;
}

const ContentArea: React.VFC<Props> = ({
  tag = 'div',
  marginTopSize = '0px',
  children,
}) => {
  return (
    <StyledContentArea as={tag} marginTopSize={marginTopSize}>
      {children}
    </StyledContentArea>
  );
};

export default ContentArea;
