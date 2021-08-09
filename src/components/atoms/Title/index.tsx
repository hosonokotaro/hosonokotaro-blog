import React from 'react';

import { StyledSubTitle, StyledTitle } from './styledIndex';

export interface Props {
  text: string;
  rank?: 'h2' | 'h3';
  isMargin?: boolean;
}

const SubTitle: React.FC<Props> = ({ text, rank = 'h2', isMargin = false }) => {
  if (rank === 'h3')
    return (
      <StyledSubTitle style={!isMargin ? {} : { marginTop: '40px' }}>
        {text}
      </StyledSubTitle>
    );

  return <StyledTitle>{text}</StyledTitle>;
};

export default SubTitle;
