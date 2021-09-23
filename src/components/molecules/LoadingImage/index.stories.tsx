import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import LoadingImage from './';

export default {
  component: LoadingImage,
  title: 'components/molecules/LoadingImage',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <LoadingImage
    src={text('src', 'https://picsum.photos/800/600')}
    alt={text('alt', 'image')}
  />
);
