import { select, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import CodeBlock from './';

export default {
  component: CodeBlock,
  title: 'components/molecules/CodeBlock',
  decorators: [withKnobs],
  parameters: {
    knobs: {
      escapeHTML: false,
    },
  },
} as Meta;

export const Default: React.FC = () => (
  <CodeBlock
    value={text('code', '')}
    language={select('language', ['tsx', 'ts', 'js'], 'tsx')}
  />
);
