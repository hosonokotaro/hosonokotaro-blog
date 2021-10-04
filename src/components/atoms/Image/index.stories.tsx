import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import Image from './';

export default {
  component: Image,
  title: 'components/atoms/Image',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <Image
    src={text('src', 'https://picsum.photos/800/600')}
    alt={text('alt', 'image')}
    handleLoad={action('loaded')}
  />
);
