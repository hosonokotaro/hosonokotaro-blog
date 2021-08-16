import { Meta } from '@storybook/react';
import React from 'react';

import Login from './';

export default {
  component: Login,
  title: 'components/organisms/Login',
} as Meta;

export const Default: React.FC = () => {
  return <Login />;
};
