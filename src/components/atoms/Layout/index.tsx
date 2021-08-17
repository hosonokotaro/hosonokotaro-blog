import React from 'react';

import { StyledLayout } from './styledIndex';

export interface Props {
  tag?: 'div' | 'article' | 'section';
  children: React.ReactNode;
}

const Layout: React.VFC<Props> = ({ tag = 'div', children }) => {
  return <StyledLayout as={tag}>{children}</StyledLayout>;
};

export default Layout;
