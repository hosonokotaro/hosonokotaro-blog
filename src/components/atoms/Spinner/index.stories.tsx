import { Meta } from '@storybook/react';
import React from 'react';

import Spinner from './';

export default {
  component: Spinner,
  title: 'components/atoms/Spinner',
} as Meta;

export const Default: React.FC = () => <Spinner />;
