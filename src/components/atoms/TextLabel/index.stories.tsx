import { select, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import TextLabel from './';

export default {
  component: TextLabel,
  title: 'components/atoms/TextLabel',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <TextLabel
    text={text('text', 'label')}
    tagName={select('TagName', ['label', 'span'], 'label')}
    htmlFor={text('htmlFor', '')}
  />
);
