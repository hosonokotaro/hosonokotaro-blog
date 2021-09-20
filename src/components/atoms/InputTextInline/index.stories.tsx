import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import InputTextInline from './';

export default {
  component: InputTextInline,
  title: 'components/atoms/InputTextInline',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  return (
    <InputTextInline
      id={text('id', 'id')}
      name={text('name', 'name')}
      defaultValue={text('defaultValue', 'input text')}
      handleChange={action('state を更新する為に使う')}
    />
  );
};
