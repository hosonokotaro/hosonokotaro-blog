import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import Paragraph from './';

export default {
  component: Paragraph,
  title: 'components/atoms/Paragraph',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <Paragraph>
    {text(
      'text',
      'いろはにほへと ちりぬるを わかよたれそ つねならむ うゐのおくやま けふこえて あさきゆめみし ゑひもせすん'
    )}
  </Paragraph>
);
