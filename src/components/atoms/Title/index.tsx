import React from 'react';

import { StyledTitle } from './styledIndex';

export interface Props {
  text: string;
  rank?: 'h2' | 'h3';
  isMargin?: boolean;
}

const SubTitle: React.FC<Props> = ({ text, rank = 'h2', isMargin = false }) => {
  return (
    <StyledTitle isMargin={isMargin} as={rank}>
      {text}
    </StyledTitle>
  );
};

export default SubTitle;
