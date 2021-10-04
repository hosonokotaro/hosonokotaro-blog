import React from 'react';

import { Li } from './styledIndex';

interface Props {
  text: string;
}

const TextItem: React.VFC<Props> = ({ text }) => {
  return <Li>{text}</Li>;
};

export default TextItem;
