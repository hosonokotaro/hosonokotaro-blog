import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import InputTextArea from './';

export default {
  component: InputTextArea,
  title: 'components/atoms/InputTextArea',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  return (
    <InputTextArea
      id={text('id', 'id')}
      name={text('name', 'name')}
      defaultValue={text('defaultValue', 'input text')}
      handleChange={action('state を更新する為に使う')}
    />
  );
};
