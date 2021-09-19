import React from 'react';

import { StyledTextBox } from './styledIndex';

type TagName = 'div' | 'p';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  tagName?: TagName;
  children: React.ReactNode;
}

const TextBox: React.VFC<Props> = ({ tagName = 'div', children }) => {
  return <StyledTextBox as={tagName}>{children}</StyledTextBox>;
};

export default TextBox;
