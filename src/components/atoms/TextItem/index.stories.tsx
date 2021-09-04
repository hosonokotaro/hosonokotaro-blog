import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import TextItem from './';

export default {
  component: TextItem,
  title: 'components/atoms/TextItem',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <TextItem text={text('list item', 'hello')} />
);
