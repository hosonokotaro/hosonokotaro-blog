import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import Footer from './';

export default {
  component: Footer,
  title: 'components/atoms/Footer',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => <Footer year={text('year', '2021')} />;
