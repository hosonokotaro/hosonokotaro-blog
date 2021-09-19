import { Meta } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from './';

export default {
  component: Header,
  title: 'components/molecules/Header',
} as Meta;

export const Default: React.FC = () => {
  return (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
};
