import React from 'react';

import { MarginTopSize, StyledContentArea } from './styledIndex';

type TagName = 'div' | 'article' | 'section';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  tagName?: TagName;
  marginTopSize?: MarginTopSize;
  children: React.ReactNode;
}

const ContentArea: React.VFC<Props> = ({
  tagName = 'div',
  marginTopSize = '0px',
  children,
}) => {
  return (
    <StyledContentArea as={tagName} marginTopSize={marginTopSize}>
      {children}
    </StyledContentArea>
  );
};

export default ContentArea;
