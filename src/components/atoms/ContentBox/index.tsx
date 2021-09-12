import React from 'react';

import { StyledContentBox } from './styledIndex';

interface Props {
  children: React.ReactNode;
}

const ContentBox: React.VFC<Props> = ({ children }) => {
  return <StyledContentBox>{children}</StyledContentBox>;
};

export default ContentBox;
