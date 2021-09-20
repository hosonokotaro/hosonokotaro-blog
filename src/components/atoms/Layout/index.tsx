import React from 'react';

import { StyledLayout } from './styledIndex';

type TagName = 'div' | 'article' | 'section';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  tagName?: TagName;
  children: React.ReactNode;
}

const Layout: React.VFC<Props> = ({ tagName = 'div', children }) => {
  return <StyledLayout as={tagName}>{children}</StyledLayout>;
};

export default Layout;
