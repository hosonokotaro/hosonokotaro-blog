import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import Title from './';

export default {
  component: Title,
  title: 'components/atoms/Title',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <Title
    text={text('text', 'title')}
    rank={select('rank', ['h2', 'h3', 'h4'], 'h2')}
    isMargin={boolean('isMargin', false)}
  />
);
