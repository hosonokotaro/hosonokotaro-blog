import { text } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import Markdown from './';

export default {
  component: Markdown,
  title: 'components/organisms/Markdown',
} as Meta;

export const Default: React.FC = () => {
  return (
    <Markdown content={text('content', '### Markdown をいれてください')} />
  );
};
