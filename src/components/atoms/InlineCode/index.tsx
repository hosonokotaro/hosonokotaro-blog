import React from 'react';

import { StyledInlineCode } from './styledIndex';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  text: string;
}

const InlineCode: React.FC<Props> = ({ text }) => {
  return <StyledInlineCode>{text}</StyledInlineCode>;
};

export default InlineCode;
