import { withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import TextItem from '@/atoms/TextItem';

import TextList from './';

export default {
  component: TextList,
  title: 'components/atoms/TextList',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <TextList>
    <TextItem text="hello" />
    <TextItem text="goodbye" />
    <TextItem text="thanks" />
  </TextList>
);
