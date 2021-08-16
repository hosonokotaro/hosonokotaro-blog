import { Meta } from '@storybook/react';
import React from 'react';

import ErrorMessage from './';

export default {
  component: ErrorMessage,
  title: 'components/atoms/ErrorMessage',
} as Meta;

export const Default: React.FC = () => <ErrorMessage />;
