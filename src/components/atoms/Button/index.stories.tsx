import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import Button from './';

export default {
  component: Button,
  title: 'components/atoms/Button',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => (
  <Button
    text={text('label', 'button')}
    onClick={action('clicked')}
    disabled={boolean('disabled', false)}
  />
);
