import React from 'react';

import { StyledParagraph } from './styledIndex';

type tagName = 'p' | 'div';

interface Props {
  as?: tagName;
  isMargin?: boolean;
  children: React.ReactNode;
}

const Paragraph: React.VFC<Props> = ({
  as = 'p',
  isMargin = false,
  children,
}) => {
  return (
    <StyledParagraph as={as} isMargin={isMargin}>
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
