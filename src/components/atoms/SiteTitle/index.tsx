import React from 'react';

import { StyledInlineBlock } from './styledIndex';

interface Props {
  text1: string;
  text2: string;
  text3: string;
}

const SiteTitle: React.FC<Partial<Props>> = ({
  text1 = 'HOSONO',
  text2 = 'KOTARO',
  text3 = 'Tech Blog',
}) => {
  return (
    <h1>
      <StyledInlineBlock>{text1}</StyledInlineBlock>
      <StyledInlineBlock>{text2}</StyledInlineBlock> {text3}
    </h1>
  );
};

export default SiteTitle;
