import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import InlineCode from './';

export default {
  component: InlineCode,
  title: 'components/atoms/InlineCode',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <InlineCode text={text('text', 'inline code')} />
);
