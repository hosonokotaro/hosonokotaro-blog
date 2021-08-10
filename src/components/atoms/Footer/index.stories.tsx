import { Meta } from '@storybook/react';
import React from 'react';

import Footer from './';

export default {
  component: Footer,
  title: 'components/atoms/Footer',
} as Meta;

export const Default: React.FC = () => <Footer year="2021" />;
