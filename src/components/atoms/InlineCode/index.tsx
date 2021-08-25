import React from 'react';

import { StyledInlineCode } from './styledIndex';

export interface Props {
  text: string;
}

const InlineCode: React.FC<Props> = ({ text }) => {
  return <StyledInlineCode>{text}</StyledInlineCode>;
};

export default InlineCode;
