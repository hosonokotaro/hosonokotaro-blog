import { Meta } from '@storybook/react';
import React from 'react';

import Title from './';

export default {
  component: Title,
  title: 'components/atoms/Title',
} as Meta;

export const Default: React.FC = () => <Title text="Sample Title" />;
