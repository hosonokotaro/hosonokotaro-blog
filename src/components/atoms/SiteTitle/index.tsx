import React from 'react';

import { StyledInlineBlock } from './styledIndex';

const SiteTitle: React.FC = () => {
  return (
    <h1>
      <StyledInlineBlock>HOSONO</StyledInlineBlock>
      <StyledInlineBlock>KOTARO</StyledInlineBlock> Tech Blog
    </h1>
  );
};

export default SiteTitle;
