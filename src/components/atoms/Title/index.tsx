import React from 'react';

import { StyledTitle } from './styledIndex';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  text: string;
  rank?: 'h2' | 'h3' | 'h4' | 'span';
}

const Title: React.FC<Props> = ({ text, rank = 'h2' }) => {
  return (
    <StyledTitle rankStyle={rank} as={rank}>
      {text}
    </StyledTitle>
  );
};

export default Title;
