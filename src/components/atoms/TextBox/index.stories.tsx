import { select, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import TextBox from './';

export default {
  component: TextBox,
  title: 'components/atoms/TextBox',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <TextBox tagName={select('tagName', ['div', 'p'], 'div')}>
    {text(
      'text',
      'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせすん'
    )}
  </TextBox>
);
