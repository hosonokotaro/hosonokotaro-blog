import React from 'react';

import { Li } from './styledIndex';

// FIXME: ComponentProps<typeof Component> に置き換えたい
export interface Props {
  text: string;
}

const TextItem: React.VFC<Props> = ({ text }) => {
  return <Li>{text}</Li>;
};

export default TextItem;
