import React from 'react';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  children: React.ReactNode;
}

const TextList: React.VFC<Props> = ({ children }) => {
  return <ul>{children}</ul>;
};

export default TextList;
