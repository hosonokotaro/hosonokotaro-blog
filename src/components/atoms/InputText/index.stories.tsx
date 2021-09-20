import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta } from '@storybook/react';
import React from 'react';

import InputText from './';

export default {
  component: InputText,
  title: 'components/atoms/InputText',
  decorators: [withKnobs],
} as Meta;

export const Default: React.FC = () => {
  return (
    <InputText
      id={text('id', 'id')}
      name={text('name', 'name')}
      defaultValue="inputText"
      handleChange={action('state を更新する為に使う')}
    />
  );
};
