import React from 'react';

import { StyledTextBox } from './styledIndex';

type TagName = 'div' | 'p';

export interface Props {
  tagName?: TagName;
  isMargin?: boolean;
  children: React.ReactNode;
}

const TextBox: React.VFC<Props> = ({
  tagName = 'div',
  isMargin = false,
  children,
}) => {
  return (
    <StyledTextBox as={tagName} isMargin={isMargin}>
      {children}
    </StyledTextBox>
  );
};

export default TextBox;
