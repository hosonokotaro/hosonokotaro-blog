import React from 'react';

import { StyledParagraph } from './styledIndex';

type TagName = 'p' | 'div';

export interface Props {
  tagName?: TagName;
  isMargin?: boolean;
  children: React.ReactNode;
}

const Paragraph: React.VFC<Props> = ({
  tagName = 'p',
  isMargin = false,
  children,
}) => {
  return (
    <StyledParagraph as={tagName} isMargin={isMargin}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
