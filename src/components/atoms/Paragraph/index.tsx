import React from 'react';

import { StyledParagraph } from './styledIndex';

type tagName = 'p' | 'div';

interface Props {
  as?: tagName;
  children: React.ReactNode;
}

const Paragraph: React.VFC<Props> = ({ as = 'p', children }) => {
  return <StyledParagraph as={as}>{children}</StyledParagraph>;
};

export default Paragraph;
