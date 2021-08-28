import React from 'react';

import { StyledTitle } from './styledIndex';

export interface Props {
  text: string;
  rank?: 'h2' | 'h3' | 'h4';
  isMargin?: boolean;
}

const Title: React.FC<Props> = ({ text, rank = 'h2', isMargin = false }) => {
  return (
    <StyledTitle isMargin={isMargin} rankStyle={rank} as={rank}>
      {text}
    </StyledTitle>
  );
};

export default Title;
