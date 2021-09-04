import React from 'react';

import { Ul } from './styledIndex';

export interface Props {
  children: React.ReactNode;
}

const TextList: React.VFC<Props> = ({ children }) => {
  return <Ul>{children}</Ul>;
};

export default TextList;
